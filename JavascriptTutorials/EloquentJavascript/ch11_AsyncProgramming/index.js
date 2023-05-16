// Callback function to call after 500ms timeout reached
setTimeout(() => console.log("Tick"), 500);

// Called first since the code moves on, unblocking
console.log("Tock");

const { bigOak } = require("./crow-tech");
const { defineRequestType } = require("./crow-tech");

bigOak.readStorage("food caches", (caches) => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, (info) => {
    console.log(info);
  });
});

bigOak.send("Cow Pasture", "Note", "Lets caw loudly at 7PM", () =>
  console.log("Note received")
);

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});

function storage(nest, name) {
  return new Promise((resolve) => {
    nest.readStorage(name, (result) => resolve(result));
  });
}

storage(bigOak, "enemies").then((value) => console.log("Got", value));


// class Timeout extends Error {}

// function request(nest, target, type, content) {
//   return new Promise((resolve, reject) => {
//     let done = false;
//     function attempt(n) {
//       nest.send(target, type, content, (failed, value) => {
//         done = true;
//         if (failed) reject(failed);
//         else resolve(value);
//       });
//       setTimeout(() => {
//         if (done) return;
//         else if (n < 3) attempt(n + 1);
//         else reject(new Timeout("Timed out"));
//       }, 250);
//     }
//     attempt(1);
//   });
// }

// function requestType(name, handler) {
//   defineRequestType(name, (nest, content, source, callback) => {
//     try {
//       Promise.resolve(handler(nest, content, source))
//         .then(response => callback(null, response),
//               failure => callback(failure));
//     } catch (exception) {
//       callback(exception);
//     }
//   });
// }

// requestType("ping", () => "pong");

// function availableNeighbors(nest) {
//   let requests = nest.neighbors.map(neighbor => {
//     return request(nest, neighbor, "ping")
//       .then(() => true, () => false);
//   });
//   return Promise.all(requests).then(result => {
//     return nest.neighbors.filter((_, i) => result[i]);
//   });
// }

// const {everywhere} = require("./crow-tech")

// everywhere(nest => {
//   nest.state.gossip = [];
// });

// function sendGossip(nest, message, exceptFor = null) {
//   nest.state.gossip.push(message);
//   for (let neighbor of nest.neighbors) {
//     if (neighbor == exceptFor) continue;
//     request(nest, neighbor, "gossip", message);
//   }
// }

// requestType("gossip", (nest, message, source) => {
//   if (nest.state.gossip.includes(message)) return;
//   console.log(`${nest.name} received gossip '${
//                message}' from ${source}`);
//   sendGossip(nest, message, source);
// });

// sendGossip(bigOak, "Kids with airgun in the park");

// // // Promises // //

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Simulating an asynchronous operation
//     const randomNumber = Math.random();

//     if (randomNumber < 0.5) {
//       resolve(randomNumber); // Fulfill the promise with a value
//     } else {
//       reject(new Error("Something went wrong")); // Reject the promise with an error
//     }
//   }, 2000);
// });

// myPromise.then(
//   (value) => {
//     console.log("Promise fulfilled with value:", value);
//   },
//   (reason) => {
//     console.log("Promise rejected with reason:", reason);
//   }
// );

// myPromise
//   .then((value) => {
//     console.log("Promise fulfilled with value:", value);
//     // Create a new promise here
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const anotherRandomNumber = Math.random();
//         resolve(anotherRandomNumber);
//       }, 1000);
//     }); // Return a new value for the next `then()` in the chain
//   })
//   .then((newValue) => {
//     console.log("New value:", newValue);
//   })
//   .catch((error) => {
//     console.log("An error occurred:", error);
//   });

// new Promise((_, reject) => reject(new Error("Fail")))
//   .then((value) => console.log("Handler 1"))
//   .catch((reason) => {
//     console.log("Caught failure " + reason);
//     return "whatever I want";
//   })
//   .then((value) => console.log("Handler 2", value));
// // → Caught failure Error: Fail
// // → Handler 2 nothing