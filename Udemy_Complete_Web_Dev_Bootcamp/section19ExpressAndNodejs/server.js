const express = require('express');
const bodyParser = require('body-parser');
// A Calculator example

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });
app.get('/contact', (req, res) => res.send('JohnDoe@gmail.com'));
app.get('/about', (req, res) => res.send('About me'));

app.post('/calculate', (req, res) => {
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  res.send(`your number is ${num1 + num2} `);
});

app.post('/bmicalculator', (req, res) => {
  console.log(req.body);
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  res.send(`your BMI is ${weight / (height * height)} `);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
