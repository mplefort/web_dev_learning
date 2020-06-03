const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting Server at ${port}`);
});
app.use(express.json({ limi: '1mb' }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/get-weather', (req, res) => {
  console.log(req.body);
  let city = req.body.city;
  let api_key = process.env.OPEN_WEATHER_API_KEY;
  let units = req.body.units;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${units}`;

  https.get(url, (weather_res) => {
    // console.log('statusCode:', weather_res.statusCode);
    // console.log('headers:', weather_res.headers);

    weather_res.on('data', (d) => {
      // process.stdout.write(d);
      const weatherData = JSON.parse(d);
      // console.log(weatherData);
      const desc = weatherData.weather[0].description;
      console.log(desc);

      const im_url = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

      res.write(`<p>The weather is currently: ${desc} </p>`);
      res.write(`<h1> The temp in ${city} is ${weatherData.main.temp.toFixed(2)}, ${units}</h1>`);
      res.write(`<img src="${im_url}" alt="">`);
      res.send();
    });
  });
});
