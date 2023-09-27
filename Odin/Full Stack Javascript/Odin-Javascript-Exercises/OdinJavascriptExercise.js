/*
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

Book.prototype.sayHello = function() {
    console.log("Hello, I'm a book")
}

Book.prototype.myVal = 10

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
const theLOTR = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'not read yet')
console.log(theHobbit.info())
theHobbit.sayHello()

Object.getPrototypeOf(theHobbit).myVal = 20;

console.log(theLOTR.myVal)

console.log(Object.getPrototypeOf(theHobbit) === Book.prototype)

console.log(theHobbit.valueOf())

*/

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);  
Object.setPrototypeOf(table, head);

console.log(bed.glasses)
