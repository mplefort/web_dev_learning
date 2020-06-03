const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static('public'));

//TODO
const db = `mongodb://localhost:27017/wikiDB`;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

let articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Article = mongoose.model('Article', articleSchema);

app.listen(3000, function () {
  console.log('Server started on port 3000');
});

app
  .route('/articles')
  .get((req, res) => {
    Article.find({}, (err, foundArticles) => {
      console.log(foundArticles);
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  .post((req, res) => {
    console.log(req.body);

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send('Successfully added new article');
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteMany({}, (err) => {
      if (!err) {
        res.send('Successfully delete all articles');
      } else {
        res.send(err);
      }
    });
  });

app
  .route('/articles/:articleTitle')
  .get((req, res) => {
    const articleTitle = req.params.articleTitle;
    Article.findOne({ title: articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send('No article found');
      }
    });
  })
  .put((req, res) => {
    const articleTitle = req.params.articleTitle;
    console.log(articleTitle);
    Article.update({ title: articleTitle }, { title: req.body.title, content: req.body.content }, { overwrite: true }, (err, updateRes) => {
      if (!err) {
        res.send('Successfully updated');
      } else {
        res.send('No article updated');
      }
    });
  })
  .patch((req, res) => {
    console.log(req.body);
    Article.update({ title: req.params.articleTitle }, { $set: req.body }, (err, result) => {
      if (!err) {
        res.send('success update article');
      } else {
        res.send(err);
      }
    });
  })
  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (!err) {
        res.send('Successfully deleted article');
      } else {
        res.send(err);
      }
    });
  });
