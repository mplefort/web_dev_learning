// // 1
// let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]
// // console.log(arrays[0].concat(arrays[1]));

// const flat = arrays.reduce((a, b) => {
//   return a.concat(b);
// }, []);

// console.log(flat);

// // 2
// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log
// );
//  → 3
// → 2
// → 1

// // 3 Everything

// function every(array, test) {
//   for (let element of array) {
//     console.log(element);
//     if (test(element)) {
//       return false;
//     }
//   }
//   return true;
// }

// function every2(array, test) {
//   return !array.some((element) => !test(element));
// }

// console.log(every2([1, 3, 5], (n) => n < 10));
// // → true
// console.log(every2([2, 4, 16], (n) => n < 10));
// // → false
// console.log(every2([], (n) => n < 10));
// // → true

// 4 Dominant Writing Direction
// load dependencies
require("./code/load")(
  "code/scripts.js",
  "code/chapter/05_higher_order.js",
  "code/intro.js"
);

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });
  scripts = scripts.filter((name) => {
    return name.name != "none";
  });

  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

// function checkName(name) {
//   return name.name != "none";
// }

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
