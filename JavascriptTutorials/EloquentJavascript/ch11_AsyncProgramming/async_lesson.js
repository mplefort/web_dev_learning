// https://www.youtube.com/watch?v=ZYb_ZU8LNxs&t=3008s

// // Promises
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject("shop closed");
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} selected`))
//   .then(
//     () => {
//       return order(0000, () => console.log("production started"));
//     },
//     (reject_reason) => {
//       console.log(`Oh no, rejected: ${reject_reason}`);
//     }
//   )
//   .then(() => {
//     return order(1000, () => console.log("make icecream"));
//   })
//   .then(() => {
//     throw new Error("I'm an error");
//     // return order(0000, () => console.log("Served"));
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally Closed");
//   });

// console.log("No need to wait");

//   Async / Await version
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("Shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} was selected`);

//     await time(0000);
//     console.log("production has started");

//     await time(2000);
//     console.log("Ice Cream done, served");

//     return "return call";
//   } catch (error) {
//     console.log("customer left");
//   }
// }

// // Trigger
// let outcome = kitchen().then((value) => {
//   console.log(`async returned ${value}`);
// });

// console.log(outcome);

// console.log("i'm not waiting");

// Chat GPT version
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
  try {
    console.log("Before delay 1");
    await delay(2000);
    console.log("After delay 1");

    console.log("Before delay 2");
    await delay(1000);
    console.log("After delay 2");

    throw new Error("Oops! Something went wrong.");

    console.log("This code will not execute.");
  } catch (error) {
    console.error("Caught an error:", error.message);
  } finally {
    console.log("Finally block executed.");
    // Unhandled error
    // throw new Error("Oops! Something went wrong.");
    // return "Returned Promise for .then(), .catch(), .finally()";
  }

  return "Async Completed: Returned Promise for .then(), .catch(), .finally()";
}

console.log("Before function call");
example()
  .then((result) => console.log("Async function result:", result))
  .catch((error) => console.error("Unhandled error:", error))
  .finally(() => console.log("Promise chain completed."));
console.log("After function call");
