// // Object Literal
// const book1 = {
//   title: 'book1',
//   author: 'john doe',
//   year: '2013',
//   getSummary: function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
// };

// console.log(book1);
// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// Inheritance
// // Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // getSummary
// Book.prototype.getSummary = function() {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// // inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine('Mag 1', 'John Doe', '2018', 'Jan');

// console.log(mag1.getSummary());

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  static topBookStore() {
    return 'BnN';
  }
}

// subclass / inheritance
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine('Mag 1', 'John Doe', '2018', 'Jan');
console.log(mag1.getSummary());

const book1 = new Book('Book1', 'jon doe', '2012');
console.log(Book.topBookStore());
