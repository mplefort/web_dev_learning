// EXAMINE THE DOCUMENT OBJECT //

console.dir(document);
// console.log(document.domain);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// // Does gets all items in textcontent even if hidden
// headerTitle.textContent = 'Hello';
// // pays attention to style (if display=None it will not return undisplayed items)
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// // will insert this HTML inside element
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";

// //GETELEMENTSBYCLASSNAME Selector
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "hello 2";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// // GETELEMENTBYTAGNAME
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "hello 2";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

// // QUERYSELECTOR //
// Only grabs first one by query
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// let input = document.querySelector("input");
// input.value = "Hello";

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";
// // use pseudo classes with class queryselector
// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// // QUERYSELECTORALL
// // returns nodelist - cna run array function on node list opposed to Collection
// let titles = document.querySelectorAll(".title");
// console.log(titles);

// // css pseudo selector
// let odd = document.querySelectorAll("li:nth-child(odd)");
// console.log(odd);

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
// }
