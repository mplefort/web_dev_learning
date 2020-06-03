function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  var output = [];
  var start = [0, 1];
  while (output.length < n) {
    if (output.length === 0) {
      output.push(start[0]);
    } else if (output.length === 1) {
      output.push(start[1]);
    } else {
      var count = output.length - 1;
      output.push(output[count] + output[count - 1]);
    }
  }

  return output;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(5));
