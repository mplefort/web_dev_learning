class Rabbit {
  constructor(type) {
    this.type = type;
    this.defualtline = "default Line";
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    console.log(this.someVar);
  }
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.someVar = 9;
weirdRabbit.speak();

let sym = Symbol("name");

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "O", done: false}
console.log(okIterator.next());
// → {value: "K", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}

// //  Class ES6 Setup // //

class Matrix {
  static myproperty = "Hello";
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
  [Symbol.iterator]() {
    return new MatrixIterator(this);
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

let matrix = new Matrix(3, 2, (x, y) => `Hello  ${x},${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}

// // Inheritance // //
// depends on block above

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2

// // Getter and Setters // //

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  // get keyword
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  // set keyword
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  // belongs to Class scope instead of object scope. Can call method on class
  // during creation. see below. Static methods cannot access instance properties or methods,\
  // but they can access static properties and other static methods of the class.
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

// let temp = new Temperature.fromFahrenheit(80);
// console.log(temp.fahrenheit);
// // → 71.6
// temp.fahrenheit = 86;
// console.log(temp.celsius);
// // → 30
