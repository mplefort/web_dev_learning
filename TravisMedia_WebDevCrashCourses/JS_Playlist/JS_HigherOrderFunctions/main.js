const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // forEach - loop over array ILO of for loop
// companies.forEach(company => {
//   console.log(company.name);
// });

// // filter -
// // get all ages >21 with for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) {
//     canDrink.push(ages[i]);
//   }
// }

// // With filter
// const canDrink = ages.filter(age => {
//   if (age > 21) {
//     return true;
//   }
// });
// or
// // const canDrink = ages.filter(age => age > 21);
// console.log(canDrink);

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   company => company.category === 'Retail'
// );
// console.log(retailCompanies);

// // get 80s companies
// const eightiesCompanies = companies.filter(
//   company => company.start > 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// // last 10 years
// const matureCompanies = companies.filter(
//   company => company.end - company.start > 10
// );

// console.log(matureCompanies);

// map - apply a function to each item in array
// create array of company names
// const companyNames = companies.map(
//   company => `${company.name}` + ' is a great company'
// );
// console.log(companyNames);

// sort companies by start year = return 1 if before, 0 of equal, -1 if after
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// companies.sort();
// console.log(sortedCompanies);

// reduce

// let ageSum = 0;
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);
