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

[Odin Library Project Github](mplefort.github.io/Odin-Library-Project)


### [Factory Functions and the Module Pattern](https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern)

Topics:
  - 
  - Scope of variables
  - closures
  - Disadvanges of using constructors
  - Factory functions
  - Private variables and factory functions
  - Object inheritance using factory functions
  - Module Pattern and IIFEs
  - Encapsulation and Module Pattern (namespacing)

#### Scopes:

  Var = function scoped. Can be accessed anywhere in the function it is defined in. Once defined in a function, it is available anywhere in the function.

  Let/Const = block scoped. Can be accessed anywhere in the block it is defined in. A block is anything between curly braces. Once defined in a block, it is available anywhere in the block. Once you leave the block, it is no longer available.

#### Closures:

  A closure is a function that has access to the parent scope, even after the parent function has closed. This is possible because of the scope chain. The scope chain is a list of scopes that a function has access to. The scope chain is created when a function is defined. The scope chain is created in the order that the functions are defined. The scope chain is used when a function is called. The function will look for a variable in its own scope, then in the scope of the function that called it, then in the scope of the function that called that function, etc. until it reaches the global scope. If the variable is not found, it will return undefined.

  A closure is created when a function is defined inside another function. The inner function has access to the variables in the outer function. The inner function is returned from the outer function. The inner function is called after the outer function has closed. The inner function still has access to the variables in the outer function because of the scope chain.

  Closures are useful for creating private variables. A private variable is a variable that cannot be accessed outside of the function it is defined in. This is useful for hiding implementation details. The only way to access the private variable is through the inner function. The inner function is the only way to access the private variable. The inner function is the only way to change the private variable. The private variable is not accessible outside.

#### Factory Functions:

  Factory functions are functions that return objects. They are useful for creating multiple objects with the same properties and methods. They are useful for creating objects that are similar but not identical.

  Factory functions are useful for creating private variables. This is useful for hiding implementation details. The only way to access the private variable is through the inner function. The inner function is the only way to access the private variable. The inner function is the only way to change the private variable. The private variable is not accessible outside.
  



  #### Private Variables and Factory Functions

  Here the get/set functions and names are avaiable to the user of "createUser". But the reputation variable is private and cannot be directly accessed or manipulated. The only way to access it is through the get/set functions.

  ```javascript
// A simple factory function, returns and object there its a factory. No need for New keyword
const userFactory = function( name) {
  
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = function() {return this.reputation
  };
  const giveReputation = function() {return this.reputation++};

  return { name, reputation, discordName, getReputation, giveReputation };
}

const josh = userFactory("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
console.log({
  discordName: josh.discordName,
  reputation: josh.reputation,
});
// logs { discordName: "@josh", reputation: 2 }
// reputation is accessbile as a public or getter
  ```

#### Prototypal Inheritance with Factories
 
 Extend and factory function for more items/functionalites with the object.assign() method. This will create a new object with the properties of the first object and the second object. The second object will overwrite any properties that are the same. 

 In this example, a player object can be created from a user object. The player object will have all the properties of the user object, plus the increaseLevel function. The increaseLevel function is not available to the user object.

  ```javascript
  function createPlayer (name, level) {
  const user = createUser(name);
  let level = level;

  const increaseLevel = () => level++;
  const getLevel = () => level;
  //  Object.assign(target, source1, souce2, ..., sourceN)
  return Object.assign({}, user, { increaseLevel });
}

const josh = createPlayer("josh", 1);
```


#### Module Pattern - IIFEs

A module is a immediately invoked function expression (IIFE) in the same way a standard factory function works. Only difference it is immediately called.

```javascript
  const myplayer = (function createPlayer (name, level) {
  const user = createUser(name);
  let level = level;

  const increaseLevel = () => level++;
  const getLevel = () => level;
  //  Object.assign(target, source1, souce2, ..., sourceN)
  return Object.assign({}, user, { increaseLevel }("josh", 1));
  })()
```


#### Encapsulation and Module Pattern (namespacing)

Encapsulation is the idea of bundling data and methods that work on that data within one unit. This keeps everything that is needed to make something work in one place. This makes it easier to understand and maintain. It also keeps things from leaking out into the global scope. This is called namespacing. Namespacing is the idea of putting everything that is needed to make something work in one object. This keeps things from leaking out into the global scopes.


### [Project: Tic Tac Toe](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)

### [Classes](https://www.theodinproject.com/courses/javascript/lessons/classes)


```javascript

class MyClass {
  constructor() {
    let _realPrivateVar = 'This is private';
    this._likePrivateVar = 'This is treated as private (convention)';

    this.getPrivateVar = function() {
      return _realPrivateVar;
    };
  }

  publicMethod() {
    return this.getPrivateVar();
  }
}

const myObject = new MyClass();
console.log(myObject.publicMethod()); // Accesses the private variable indirectly
console.log(myObject._realPrivateVar); // This will be undefined, indicating privacy
console.log(myObject._likePrivateVar); // This is accessible, but it's a convention to treat it as private




```

### [ES6 Modules](https://www.theodinproject.com/courses/javascript/lessons/es6-modules)

### [Webpack](https://www.theodinproject.com/courses/javascript/lessons/webpack)

### [Project: Restaurant Page](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page)

### [OOP Principles](https://www.theodinproject.com/courses/javascript/lessons/oop-principles)

### [Project: Todo List](https://www.theodinproject.com/courses/javascript/lessons/todo-list)