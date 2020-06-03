const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

mongoose.connect('mongodb://localhost:27017/todoListDB', { useNewUrlParser: true });

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// init mongo item schema/collection
let itemSchema = new mongoose.Schema({
  name: String,
});

let listSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema],
});

const Item = mongoose.model('item', itemSchema);
const List = mongoose.model('List', listSchema);
const defaultItems = [];
let def_strings = ['welcome to do list app', 'add items with the +', '<--- click to delete'];
for (let i = 0; i < def_strings.length; i++) {
  defaultItems.push(
    new Item({
      name: def_strings[i],
    })
  );
}

app.get('/', function (req, res) {
  const day = date.getDate();
  console.log(req.body);
  List.findOne({ name: day }, (err, todayList) => {
    if (!err) {
      if (!todayList) {
        // create new lsit
        const list = new List({
          name: day,
          items: defaultItems,
        });
        list.save();
        res.redirect('/');
      } else {
        // show new lsit
        res.render('list', { listTitle: day, newListItems: todayList.items.map((x) => x.name) });
      }
    }
  });
});

app.post('/', function (req, res) {
  const day = date.getDate();
  console.log(req.body);
  const listName = req.body.list;
  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName,
  });

  List.findOne({ name: listName }, (err, foundList) => {
    foundList.items.push(item);
    foundList.save();
    if (listName === day) {
      res.redirect('/');
    } else {
      res.redirect('/' + listName);
    }
  });
});

app.post('/delete', function (req, res) {
  console.log(req.body);
  const day = date.getDate();
  const checkedItem = req.body.checkbox;
  const listName = req.body.listName;

  // Item.deleteOne({ name: req.body.checkbox }, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(`succesfully deleted`);
  //   }
  // });

  List.findOneAndUpdate({ name: listName }, { $pull: { items: { name: checkedItem } } }, (err) => {
    if (!err) {
      if (listName === day) {
        res.redirect('/');
      } else {
        res.redirect('/' + listName);
      }
    }
  });
});

// custom lsits
app.get('/:listname', function (req, res) {
  const listName = _.capitalize(req.params.listname);

  List.findOne({ name: listName }, (err, foundList) => {
    if (!err) {
      if (!foundList) {
        // create new lsit
        const list = new List({
          name: listName,
          items: defaultItems,
        });
        list.save();
        res.redirect('/' + listName);
      } else {
        // show new lsit
        res.render('list', { listTitle: listName, newListItems: foundList.items.map((x) => x.name) });
      }
    }
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
