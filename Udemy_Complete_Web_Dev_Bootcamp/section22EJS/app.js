const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// show static assets
app.use(express.static('public'));
app.use(express.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//globals
let item = [];
let workItems = [];

app.get('/', (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  // date options string
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  let daystring = today.toLocaleString('en-us', options);
  // console.log(daystring);

  res.render('index', { ListTitle: daystring, newItem: item });
});

app.post('/newItem', (req, res) => {
  console.log(req.body);

  if (req.body.list == 'Work List') {
    workItems.push(req.body.newItem);
    res.redirect('/work');
  } else {
    item.push(req.body.newItem);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('index', { ListTitle: 'Work List', newItem: workItems });
});

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

app.get('/about', (req, res) => {
  res.render('about');
});
