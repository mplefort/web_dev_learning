var fs = require("fs");

var data = {
  name: "cliff",
  age: "34",
  name: "ted",
  age: "42",
  name: "bob",
  age: "12",
};

var jsonData = JSON.stringify(data);

fs.writeFile("test.txt", jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
// // function myfunc(callback) {
// //   console.log("Starting");

// //   callback();

// //   return "Finised function";
// // }

// // let func_return = myfunc(() =>
// //   setTimeout(() => console.log("timer done"), 2000)
// // );

// // console.log(func_return);

// // try {
// //   setTimeout(() => {
// //     throw new Error("Woosh");
// //   }, 20);
// // } catch (_) {
// //   // This will not run
// //   console.log("Caught!");
// // }

// let start = Date.now();
// setTimeout(() => {
//   console.log("Timeout ran at", Date.now() - start);
// }, 20);
// while (Date.now() < start + 2000) {}
// console.log("Wasted time until", Date.now() - start);
// // → Wasted time until 50
// // → Timeout ran at 55
