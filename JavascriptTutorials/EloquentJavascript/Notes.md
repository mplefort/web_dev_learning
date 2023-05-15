# Eloquent Javascript

## Ch 10 Modules

Keywords for exports and imports. <br>
Importing
```javascipt
// importing: ./ relative to current module file location.
const package_name = require("./package")

or 

import package_name from "./package";

```
Exporting
```
// exporting
exports.my_function = function_to_export

or 

export function myfunction()

// defualt export
<!-- in file.js -->
export default myfunction()
import something from "file"
```

The **module** is the file name "module.js"
# Eloquent Javascript Notes

## Chapter 11 Asynchronous Programming

### Asynchronicity

Asynchronous progrmaming will continue to do other work while waiting for a call to respond, like a call to hardisk, wait for a internet connection response, etc.
<br>
<br>
This is done with **threads**. Async programming is where you multiple threads, split from a single thread, then rejoin when all items needed are returned. Synchronous multithread programming is implicitly waits for the other function to return. It will just block until it gets its returned object. While Async uses keywords to explicitly indicated we will be waiting for another thread to return here.

### Callbacks

Use a callback function to call something after it finishes.

```
setTimeout(() => console.log("Tick"), 500);
```

This calls the log function after the timer is done.

### Promises

3 states: <br>

1. **Pending**: init state when the async operation is still in progress and promise is not fulfilled or rejected yet.
2. **Fulflilled**: state when async operation completed successfully, and the promise is filled with a value.
3. **Rejected**: state when async operation failed or errored and the promised is rejected with a reason or error.

Called useing a `Promise` constructor, takes a callback with params `resolve` and `reject`. WHen done you call `resolve(value)` to fulfill promise or `reject(reason)` to reject the promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Simulating an asynchronous operation
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      resolve(randomNumber); // Fulfill the promise with a value
    } else {
      reject(new Error("Something went wrong")); // Reject the promise with an error
    }
  }, 2000);
});

// call a promises value with promise.then(onFulfilled(),onRejected())
myPromise.then(
  (value) => {
    console.log("Promise fulfilled with value:", value);
  },
  (reason) => {
    console.log("Promise rejected with reason:", reason);
  }
);

// or call a promise with a chain of thens. Use a catch() to catch any errors and recover
myPromise
  .then((value) => {
    console.log("Promise fulfilled with value:", value);
    return value * 2; // Return a new value for the next `then()` in the chain
  })
  .then((newValue) => {
    console.log("New value:", newValue);
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
```
