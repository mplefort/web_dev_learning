const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const _ = require('lodash');

// mongoose / mongo setup
const db = `mongodb://localhost:27017/BlogPostDB`;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('MongoDB is Connected ...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

// express setup
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//  Content setup
const homeStartingContent =
  'Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.';
const aboutContent =
  'Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.';
const contactContent =
  'Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.';

const postList = [
  {
    title: 'my first post',
    post:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum facere eveniet aperiam ipsa! Harum labore ipsum adipisci deleniti. Ullam, beatae tempora. Velit nemo cum, in neque saepe distinctio incidunt.',
  },
  {
    title: 'day 2 post',
    post:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum facere eveniet aperiam ipsa! Harum labore ipsum adipisci deleniti. Ullam, beatae tempora. Velit nemo cum, in neque saepe distinctio incidunt.',
  },
];

let postSchema = new mongoose.Schema({
  title: String,
  post: String,
});
const Post = mongoose.model('Post', postSchema);

app.get('/', (req, res) => {
  // console.log(postList);
  Post.find({}, (err, res_posts) => {
    // console.log(res_posts);
    res.render('home', { homeContent: homeStartingContent, postList: res_posts });
  });
});

app.get('/about', (req, res) => {
  res.render('about', { aboutContent: aboutContent });
});

app.get('/contact', (req, res) => {
  res.render('contact', { contactContent: contactContent });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  const post = new Post({
    title: req.body.titleText,
    post: req.body.postText,
  });

  post.save();

  // const post = {
  //   title: req.body.titleText,
  //   post: req.body.postText,
  // };
  // postList.push(post);

  res.redirect('/');
});

app.get('/posts/:postId', (req, res) => {
  // const requstedTitle = _.lowerCase(req.params.postName);
  const id = req.params.postId;
  Post.findById(id, (err, res_post) => {
    if (!err) {
      // console.log('Post Found');
      // console.log(res_post);
      res.render('post', { post: res_post });
    } else {
      console.log(err);
    }
  });

  // for (let i = 0; i < postList.length; i++) {
  //   const storedTitle = _.lowerCase(postList[i].title);

  //   if (storedTitle === requstedTitle) {
  //     console.log('Match Found for ' + req.params.postName);
  //     res.render('post', { post: postList[i] });
  //     return;
  //   } else {
  //     console.log('No match found for ' + req.params.postName);
  //     // res.send('Error');
  //   }
  // }
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
