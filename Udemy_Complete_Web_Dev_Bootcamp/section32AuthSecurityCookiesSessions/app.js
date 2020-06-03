require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// Security
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
const bcrypt = require('bcrypt');

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
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Mongoose encrpytion password method
// let secret = process.env.ENCRYPTION_STRING;
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ['password'] });

// exclude age from encryption, still encrypt name. _id will also remain unencrypted
// userSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['password'] });

// End of mongoose encryption method

// Bcrypt hashing security method
// const saltRounds = 10;

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

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/secrets', (req, res) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.render('secrets');
  } else {
    res.redirect('/login');
  }
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

app.post('/register_bcrypt', (req, res) => {
  // md5 hashing method
  // newUser.password = md5(newUser.password);
  // newUser.save((err) => {
  //   if (!err) {
  //     res.render('secrets');
  //   } else {
  //     console.log(err);
  //   }
  // });

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      const newUser = new User(req.body);
      newUser.password = hash;
      newUser.save((err) => {
        if (!err) {
          res.render('secrets');
        } else {
          console.log(err);
        }
      });
    });
  });
});

app.post('/login_bcrypt', (req, res) => {
  const username = req.body.username;

  // md5 hashing security method
  // const password = md5(req.body.password);
  // User.findOne({ username: username }, (err, foundUser) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     if (foundUser.password === password) {
  //       console.log(foundUser);
  //       res.render('secrets');
  //     }
  //   }
  // });

  // bcrypt hashing method

  User.findOne({ username: username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.compare(req.body.password, foundUser.password, function (error, result) {
        // result == true
        if (result === true) {
          console.log(foundUser);
          res.render('secrets');
        }
      });
    }
  });
});
