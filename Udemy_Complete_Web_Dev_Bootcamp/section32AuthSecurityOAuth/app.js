require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

// Security
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
// const bcrypt = require('bcrypt');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  session({
    secret: process.env.ENCRYPTION_STRING,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const db = 'mongodb://localhost:27017/userDB';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('MongoDB connected ...');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

// User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
  secret: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/secrets',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/auth/google/secrets', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect('/secrets');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/secrets', (req, res) => {
  User.find({ secret: { $ne: null } }, (err, foundSecrets) => {
    console.log(foundSecrets);
    if (err) {
      console.log(err);
    } else {
      if (foundSecrets) {
        res.render('secrets', { userSecrets: foundSecrets });
      }
    }
  });
});

app.get('/submit', (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.render('submit');
  } else {
    res.redirect('/login');
  }
});

app.post('/submit', (req, res) => {
  const secretSubmitted = req.body.secret;
  console.log(req.user);
  User.findById(req.user._id, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        foundUser.secret = secretSubmitted;
        foundUser.save(() => {
          res.redirect('/secrets');
        });
      }
    }
  });
});

app.post('/register', (req, res) => {
  User.register({ username: req.body.username }, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.redirect('/register');
    } else {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/secrets');
      });
    }
  });
});

app.post('/login', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, (err) => {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate('local')(req, res, function () {
        res.redirect('/secrets');
      });
    }
  });
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
