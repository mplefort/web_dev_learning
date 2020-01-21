// Crash course JS - see mdn documentation
// Variables
// var - global scope, let, const
// let - block-level, reassign values,
// const - constant

// let age = 30;
// age = 31;
// console.log(age);

/*
    dtypes: String, Numbers, Boolean, null, undefined, symbol

*/
const name = "John"; // string
const age = 30;
// const rating = 4.5; // no float, just a number still
// const boolean = true;
// const x = null; // returns typeof = object
// const y = undefined;
// let z;

// concatenation with template strings/literals
// const hello = `My name is ${name} and I am ${age}`;
// const str = "teck, split, k";
// console.log(str.split(","));

/*
Arrays - varibles that hold multiple values
*/
// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ["apples", "oranges", 2];
// fruits[3] = "grapes"; // used const and added vals
// fruits[3] = "pears";
// fruits.push("mangos");
// fruits.unshift("strawberries");
// console.log(fruits.pop());
// console.log(fruits[1]);
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("oranges"));

/*
Key / Val pairs
*/

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st"
//   }
// };

// console.log(person.hobbies[1]);

/* Loops */
// const todos = [
//   {
//     id: 1,
//     text: "task 1",
//     isComplete: true
//   },
//   {
//     id: 2,
//     text: "task 2",
//     isComplete: false
//   },
//   {
//     id: 3,
//     text: "task 3",
//     isComplete: true
//   }
// ];
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let item of todos) {
//   console.log(item.id);
// }

// High order array methods forEach, map, filter
// todos.forEach(function(item) {
//   console.log(item.text);
// });

// const todoText = todos.map(function(todo) {
//   return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos
//   .filter(function(todo) {
//     return todo.isComplete === true;
//   })
//   .map(function(todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

/*
    Conditionals

    == vs ===
    == - only matches vars ('10' == 10)
    === - matches var and type (10 === 10)
*/

// const x = 10;
// const y = 5;
// if (x === 10 || y === 5) {
//   console.log("x is 10 or y is 5");
// } else if (x > 10) {
//   console.log("x > 10");
// } else {
//   console.log("else reached");
// }

// ternary operator
// const color = x > 10 ? "red" : "blue";
// console.log(color);

// switches
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is def");
//     break;
// }

// function addNums(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }

// console.log(addNums(5, 4));
// addNums();

// arrow function
// const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums2());

/*
 Classes and objects 
*/
// objects with function prototypes
// // function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// // move functions of object to prototype (__proto__) object
// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function() {
//   return `${this.firstName} , ${this.lastName}`;
// };

// class Person_class {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} , ${this.lastName}`;
//   }
// }

// const person1 = new Person("matt", "lef", "12-15-1991");
// console.log(person1);
// console.log(person1.dob.getDate());
// console.log(person1.getFullName());

// const person2 = new Person_class("matt", "lef", "12-15-1991");
// console.log(person2);
// console.log(person2.dob.getDate());
// console.log(person2.getFullName());

/*
 DOM - Document object Model - see index.html
    Selectors: single and multiple

*/
// element selectors
// console.log(window);
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach(item => console.log(item));

// // DOM manipulation
// const ul = document.querySelector(".items");
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].textContent = "brad";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// // // event Listeners
// btn.addEventListener("click", e => {
//   e.preventDefault();
//   console.log((document.querySelector("#my-form").style.background = "#ccc"));
//   //   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

// // DOM examples
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    //   add to user lsit item
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    // clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
