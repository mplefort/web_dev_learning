const prompt = require("prompt-sync")({ sigint: true });

/*
"use strict" will catch more errors
*/
function canYouSpotTheProblem() {
  //   "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();

/*
Tests: 'test runners' or test suites for creating unit tests


Debuggers: use your IDEs - setup VS codes

Exceptions: Jump out of all nested functions to the calling function when raised. 
*/
//  Exception:
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
} finally {
  console.log("run this no matter what");
}

// for (;;) {
//   try {
//     let dir = promtDirection("Where?"); // ← typo!
//     console.log("You chose ", dir);
//     break;
//   } catch (e) {
//     console.log(e);
//     console.log("Not a valid direction. Try again.");
//   }
// }

// Make your own Error Class
// Thi allows you to check for expected error types rather then just a catch all error like above
// example.
class InputError extends Error {}

function promptDirection(question) {
  result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

for (;;) {
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}
