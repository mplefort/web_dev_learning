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

// // TRAVERSING THE DOM - DOM CRASH COURSE PART 2 // //

// // parentNode & parentElement mostly interchangeable
// let itemList = document.querySelector("#items");
// console.log(itemList.parentElement);
// console.log(itemList.parentNode);
// itemList.parentElement.style.backgroundColor = "#333";
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// // Chaining
// console.log(itemList.parentNode.parentNode);

// // ChildNodes
// let itemList = document.querySelector("#items");
// // text - represents whitespace or linebreaks in actual HTML, annoyting to work around
// console.log(itemList.childNodes);
// // ILO of childNodes use children - returns an array
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = "yellow";
// // First child vs. firstElementChild - firstChild may return whitespace elements, firstElementChild - returns HTML element
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// // last child vs. lastElementChild - lastChild may return whitespace elements, lastElementChild - returns HTML element
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// // Siblings
// console.log(itemList.nextElementSibling);
// console.log(itemList.nextSibling);
// console.log(itemList.previousElementSibling);
// console.log(itemList.previousSibling);

// // CreateElement
// // Create a div
// let newDiv = document.createElement("div");
// // add Class
// newDiv.className = "hello";
// // add id
// newDiv.id = "idhello";
// // add attributes
// newDiv.setAttribute("title", "Hello Div");
// // add text node
// let newDivText = document.createTextNode("hello world");
// newDiv.appendChild(newDivText);
// // add to DOM
// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// console.log(newDiv);
// container.insertBefore(newDiv, h1);

// // Events! - DOM Crash course part 3 // //
// let button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //   document.getElementById("header-title").textContent = "Changed";
//   console.log(e);
//   console.log(e.target);

//   let output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";

//   //   clientX is position mouse rel. to window, offsetX - pos rel. to element,
//   console.log(e.clientX);
//   console.log(e.offsetX);
//   console.log(e.pageX);

//   // altKey, ctrlKey, shiftKey - if a key was held during click
//   console.log(e.altKey);
// }

// let button = document.getElementById("button");
// let box = document.getElementById("box");
// // types of events
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// // enter = into containing element, over = into any child element within container or into element
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseover", runEvent);
// // leave = into containing element, out = into any child element within or out of element
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);

// function runEvent(e) {
//   console.log("Event Type: " + e.type);
//   console.log(e);
//   output.innerHTML =
//     "<h3>MouseX: " + e.offsetX + " \n MouseY: " + e.offsetY + "</h3>";

//   box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }

// let itemInput = document.querySelector("input[type='text']");
// let form = document.querySelector("form");
// let select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// // select inside element (focus), select out of element (blur)
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("paste", runEvent);
// // catch all
// select.addEventListener("input", runEvent);

// // select elemetns (drop down lists)
// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

// // form
// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   console.log("Event Type: " + e.type);

//   //   submitting ot page default behavior
//   e.preventDefault();

//   //   document.getElementById("output").innerHTML =
//   //     "<h3>" + e.target.value + "</h3>";
// }

// DOM crash course part 4 -- Build a small project // //

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', delItem);
// Filer items
filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();
  //   get text input value
  let newItem = document.getElementById('item');
  //   Create new li element to add text to
  let li = document.createElement('li');
  li.className = 'list-group-item';
  //   append text node with input value
  li.appendChild(document.createTextNode(newItem.value));

  //   create delete button
  let delbtn = document.createElement('button');
  delbtn.className = 'btn btn-danger btn-sm float-right delete';
  delbtn.appendChild(document.createTextNode('X'));
  li.appendChild(delbtn);
  itemList.appendChild(li);
}

function delItem(e) {
  console.log(e);
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert to lowercase
  let text = e.target.value.toLowerCase();

  //   get all li in list
  let items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    itemName = itemName.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
