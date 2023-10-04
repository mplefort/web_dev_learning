# Full Stack Javascript - Odin Javascript course

Make your websites dynamic and interactive with JavaScript! You'll create features and stand-alone applications. 
This module includes projects where you will learn how to manipulate the DOM, use object-oriented programming principles,
 and fetch real-world data using APIs.

## Introduction

[LearnXinYminutes](https://learnxinyminutes.com/docs/javascript/) - A quick overview of the language's syntax.


## [Organizing Your Javascript Code](https://www.theodinproject.com/courses/javascript/lessons/organizing-your-javascript-code)

### [Organizing your JS code Intro](https://www.theodinproject.com/courses/javascript/lessons/organizing-your-javascript-code)

JS is very forgiving and unstructured as a language. You as the developer must make design pattern decisions to keep your code organized and readable.
This will cover:
    - Plain JS objects and Constructors
    - Factory Functions and the Module Pattern
    - Classes
    - ES6 Modules

### [Objects and Object Constructors](https://www.theodinproject.com/courses/javascript/lessons/objects-and-object-constructors)

Topics:
    - How to write an object constructor and instantiate the object.
    - Describe what a prototype is and how it can be used.
    - Explain prototypal inheritance.
    - Understand the basic do’s and don’t’s of prototypal inheritance.
    - Explain what Object.create does.
    - Explain what the this keyword is.


#### Constructor Functions

Constructor functions are a way to make objects with the same properties and methods.
They are like classes in other languages, but they are not classes. They are functions that you call with the new keyword.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person('Xavier', 55);
const person2 = new Person('Joan', 25);
person1.greet();  // Hello, my name is Xavier

```

The new keyword does a few things:
    - It creates a new empty object {}
    - It sets the value of this to be the new empty object
    - It calls the constructor method
    - It adds a return this to the constructor method (so that the object that is created is returned when the constructor is run)


#### Prototypes

Every function has a prototype property that references an object. This object is shared among all instances of the function.
This means that any properties or methods added to the prototype are available to all instances of that function and any objects created from it.

Best practice is to:
1. Define constructor functions
2. define methods on the constructor function's prototype property
3. Define inheriting constructor functions (use call() to call parent)
4. Set Object.setPrototypeOf(child.prototype, parent.prototype) to link prototypes
5. Define methods on the child's prototype property
6. Use the new keyword to instantiate objects




```javascript
// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

```

#### this keyword
  This keyword refers to different objects in different contexts. See examples:

```javascript

  // this refers to the global object
  console.log(this.document === document); // true

  // In web browsers, the window object is also the global object:
  console.log(this === window); // true

  this.a = 37;
  console.log(window.a); // 37

  // this refers to the calling object in a method
  const obj = {
    prop: 37,
    f: function() {
      return this.prop;
    },
  };
  console.log(obj.f()); // 37

  // this refers to the new object in a constructor
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const car1 = new Car('Eagle', 'Talon TSi', 1993);

  // this is set to the object the method is called on
  const o = {
    prop: 37,
    f: function() {
      return this.prop;
    },
  };
  console.log(o.f()); // 37

  const o = {prop: 37};

  function independent() {
    return this.prop;
  }
  o.f = independent;

```

    
### [Project: Library](https://www.theodinproject.com/courses/javascript/lessons/library)

### [Factory Functions and the Module Pattern](https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern)

### [Project: Tic Tac Toe](https://www.theodinproject.com/courses/javascript/lessons/tic-tac-toe-javascript)

### [Classes](https://www.theodinproject.com/courses/javascript/lessons/classes)

### [ES6 Modules](https://www.theodinproject.com/courses/javascript/lessons/es6-modules)

### [Webpack](https://www.theodinproject.com/courses/javascript/lessons/webpack)

### [Project: Restaurant Page](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page)

### [OOP Principles](https://www.theodinproject.com/courses/javascript/lessons/oop-principles)

### [Project: Todo List](https://www.theodinproject.com/courses/javascript/lessons/todo-list)