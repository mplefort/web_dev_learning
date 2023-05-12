// load dependencies
require("./code/load")(
  "code/scripts.js",
  "code/chapter/05_higher_order.js",
  "code/intro.js"
);

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });
  scripts = scripts.filter(checkName);

  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

function checkName(name) {
  return name.name != "none";
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
