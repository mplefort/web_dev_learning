const mongoose = require('mongoose');

// Connect to a database
mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true });

// make a schema or outline of a document with validation
let fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Fruit requires a name'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Make a collection
const Fruit = mongoose.model('Fruit', fruitSchema);

// Make a document
let fruit = new Fruit({
  name: 'Apple',
  rating: 5,
  review: 'great fruit',
});

// fruit.save();

let kiwi = new Fruit({
  name: 'Kiwi',
  rating: 5,
  review: 'great fruit',
});

let orange = new Fruit({
  name: 'orange',
  rating: 3,
  review: 'great fruit',
});

let banana = new Fruit({
  name: 'banana',
  rating: 5,
  review: 'great fruit',
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('success added fruits to FruitsDB');
//   }
// });

// second example
let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({
  name: 'Matt',
  age: 34,
  favoriteFruit: banana,
});

person.save();

// Reading from Your database
let query_option = { rating: { $gte: 4 } };
Fruit.find(query_option, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    mongoose.connection.close();
    res.forEach((item) => {
      console.log(item.name);
    });
  }
});

// Update and delte
Fruit.updateMany({ rating: { $eq: 6 } }, { rating: 7 }, (err) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    console.log('Successful updating ratings');
  }
});

// Delete

Person.deleteMany({ name: 'John' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    console.log('Successful deleted ppl');
  }
});

// Establishing Relationships and embedding documents
