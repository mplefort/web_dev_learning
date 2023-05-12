"strict";
// Testing for matches

console.log(/abc/.test("abcde"));
console.log(new RegExp("abc").test("abcde"));

console.log(/[0-9]/.test("ab9cde"));

// let match = /\b\d+\b/g.exec("one two 100 silly 500");
const matches = "one two 100 silly 500".match(/(\d+)/g);

console.log(matches);

// Dates
// months 0-11, Days 1-31
console.log(new Date());
// → Mon Nov 13 2017 16:19:11 GMT+0100 (CET)

console.log(new Date(2009, 11, 9));
// → Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)

console.log(new Date().getTime());
// Unix time - number of milliseconds since 1970 in UTC timezone
function getDate(string) {
  let match = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  let [_, month, day, year] = match;
  return new Date(year, month - 1, day);
}
console.log(getDate("100-1-30000"));
