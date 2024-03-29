**Foundation Course**

# **Introduction**

Learning Approach: Learn with the thought you will teach it to someone.

Time commitment: Consistency

Comparison: only compare yourself to your past self.

## **Web - How does it work?**

1. Internet = Hardware to connect computers. World Wide Web = Content of web. Internet is the backbone of the web.
2. Mozilla Firefox description:

Route for internet: Computer -> Router -> Modem -> ISP. Has IP address like 192.168.2.10. Domain names replace IPs with text, i.e. google.com = 142.250.190.78.

Data is split up into packets to ship information to other computers. Packets make their way but a client sending data to an address and along the route each router adds layer of IP so it has a return path route from server.

## **Git workflow**

`$ git remote -v` = See your remote <br>

starting on master branch

- Create new banch -`git branch "new branch"`
- Checkout new branch
  - `git checkout "new branch"`
- make changes and do your coding.
- Check what changes have been made
  - `git status`
- Add changes to staging. Consider Atomic Adds/Commit messages
  - `git add -A`
  - `git commit -m`
- Push your changes to repo.
  - `git push -u origin "new branch"`
- Run Integration tests. Pull that repo to the production server. Run that branch temporarily. Test to make sure no unexpected errors occur with new feature and functions. This is where integration/unit tests should be ran.
- Merge changes to master and redploy
  - `git checkout master`
  - `git pull master`
  - `git merge "new branch"`
- Delete Feature Branch for clutter free repo and local repo.
  - `git branch --merge` show merged branches into master done. You should see your feature branch in this list.
  - `git branch -d "feature branch"` delete branch locally
  - `git branch -a` list local and remote repos. Shoud see the locally delted feature branch in this list.
  - `git push origin --delete "feature branch"` delete the branch on remote repo.

Git best practice: <br>

1. Atomic commits - only make commits on one feature at a time. Be selective with your adds/staging to make different commit messages on larger changes.
2. `git config --global core.editor "code --wait"` - don't let a missing commit message open VIM.

## **HTML Foundations**

### **Intro to HTML/CSS**

HTML = Hyper Text Markup Language is the Structure of website
CSS = Stlying, colors, images, etc.
JS = Dynamic changes to HTML/CSS

### **Elements and Tags**

1. Element = An entire tag, content, closing tag item.
2. Tag = `<p> opening </p> closing`

List of HTML Tags: https://developer.mozilla.org/en-US/docs/Web/HTML/Element.
It is important to use the correct tag for:

- Ranked for SEO
- Accessbility for screen readers

### **Boiler Plate**

`index.html` the index.html is default file web servers look for the home page.

See `./html-boilerplate.html` for notes

Validator tool to ensure markup is good:
<br>https://validator.w3.org/

### **Working with Text Tags**

Tags

- Paragraph tags. New line after each p tag. Block element
  - `<p> </p>`
- h1-6 heading tags. Important for outlining. Block Element
  - `<hx> </h>`
- The <strong>`<strong>`</strong> makes the text bold. Good for screen readers. Inline element
  - `<strong>`
- The em element is <em>italic</em>. Good for screen readers.
  - `<Em>`

Nesting

Parent, Child, and sibilign relations exist between nested elements. Useful with JS later on when using selectors.

### **Lists**

- Unordered List / Ordered list

  ```
    <ul> / <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul> / </ol>
  ```

Extra Resources:

- [Shay Howe's HTML Lists Tutorial](https://learn.shayhowe.com/html-css/creating-lists/)
  - Description Lists
  - Styling Lists
  - Horizontal Lists

### **Links and Images**

- Links to pages on other sites
  - `<a href="https://www.theodinproject.com/about">click me</a>`
- Links to pages on local site
  - `<a href="./pages/about.html">About</a>`
- Diff between absolute and relative links
  - Links to other sites: `protocal://domain/path`
  - Relative Links: Links to local site. Only need a relative path, `./path/file.html`
- Display image on webpage

File Organization structure 9Kevin Powell:
Use lower case
Use no spaces, replace with hyphen, camelCase, or underscores.

- path
  - css
  - img
  - js
  - index.html
  - about.html
  - contact.html

4 types of Images on web

- Jpg
  - Large Color palette
- GIF
  - Simple animations
- PNG
  - icons, diagrams, logos, etc.
- SVG
  - scalable vector based graphic. respone to resizing

Extra Resources:

- [Interneting is hard’s treatment on HTML links and images](https://internetingishard.netlify.app/html-and-css/links-and-images)
- [What happened the day Google decided links including (/) were malware](https://www.itpro.co.uk/609724/google-apologises-after-blacklisting-entire-internet)

### **Git Commit Messages**

When to Commit:

- Commit when you have meaningful code change.
  - i.e. fix a bug, type, work out a function to produce what you want.
- Should explain why you changed code, examples:
  - 5ba3db6 Fix failing CompositePropertySourceTests
  - 84564a0 Rework @PropertySource early parsing logic
  - e142fd1 Add tests for ImportSelector meta-data
  - 887815f Update docbook dependency and generate epub
  - ac8326d Polish mockito usage

7 Tips:

1. Use Code editor for message. Separate subject and body with one line.
2. Limit subject to 50 chars
3. Capitalize subject line
4. Do not end subject line with period
5. Use the imperative mood in subject line
   - Use this to make imperative: If applied, this commit will <em>**refactor subsystem X for readability**</em>
6. Wrap body at 72 chars
7. Use body to explain what and why vs. how

Set git to use VS code as editor for a commit message: <br>
`$ git config --global core.editor "code --wait`

See your git messages: <br>
`$ git log` or just the subject line: `$ git log --oneline`

Set a template git commit message: <br>
`git config --global commit.template ~/.gitmessage.txt`

### Project: Recipes

See project in [Odin/Foundation Course/Introduction to HTML and CSS/Project_Recipes](./Project_Recipes/)

## CSS Foundations

### [Intro to CSS](https://www.theodinproject.com/lessons/foundations-intro-to-css)

#### Basic Syntax

```css
/* Syntax */
selector {
  property: value;
}

/* for example */
div.bold-text {
  font-weight: 700;
}
```

#### The Types of selectors:

- `*` - Select all using `*`
- `element`- select all same type elements using `name element`
- `class` - select all with same class using `.`
- `id` - seelct all with same id using `#`. Note use IDs after classes. Should be rare.
- `group` - select multiple classes using ",". i.e. `.class1, .class2`
- `chaining` - select a element by 2 or more classes with ".". i.e. `.class1.class2` or `.class1#id1` you can use for chaining any type of selector except for elements.
- `descendants` select a nested element within a specific parent with " ". i.e. `.parent-class .child-class #child-child-id`.

#### Properties

Basic:

- color - sets text color
- background-color - Sets background of element
- font-family - List of fonts comma separated for browsers to try each one
- font-size: font size
- font-weight: sets boldness. use `bold` or `1-1000` value.

Images:

- height: set height in px or relative text sizes rem?
- width: set width <br>
  Common to use `auto` for one of the two so ratio of img stays correct. Best to always use these so images loading don't cause website text to "jump" around.

#### Adding CSS to HTML

External CSS added with a link

```html
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

```css
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

#### Assignment

[CSS Assignment 1-5](https://github.com/TheOdinProject/css-exercises)

### The Cascade
Children elements/classes receive the same style as parent.

The order of which styles are apply and how they take precedence over each other.

1. ID Selectors (most specific)
2. CLass Selector
3. Type Selector
4. Inheritance - Typography based properties (color, font-size, font-family, etc.) are inherited to child elements. Other properties are not.
5. Order of definition

Note that two Type selectors beat a single. This applies to each level of specificity above.

### Inspecting HTML CSS
Use `CTRL+SHIFT+C`

### The Box Model
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model 

Types of display:
- `display: <block|flex|inline-block|inline-flex>` 
- Block: elements width default to container size
- Inline: elements width default to content size

Box Components:
- Content Box: Area inside box. use `inline-size, block-size, width, height`
- Padding box: Padding between content and box. `padding`
- Boarder Box: `boarder`
- Margin Box: `Margin`

Box models:
- `box-sizing: border-box` = width and height are of the entire box (content+padding+border) not the content's box.


To use border box on all items:

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

### Block and Inline

Types of display:
- `display: <block|flex|inline-block|inline-flex>` 
- Block: new line, elements width default to container size
- Inline: continuous flow like paragraph elements width default to content size
- Inline-block: continuous flow like paragraph by width/height elements respected by css.

Generic element for dividing content 
- `<div>` block element 
- `<span>` inline element


### Flexbox + Growing and Shrinking

More commonly used flexbox apposed to messing with inline-block for positioning. 

Topics:
- Positioning with flexbox
- flex containers and items
- create components and layouts 

Definitions:
- **flex container** - Parent element with **flex items** as children.
- **flex-grow** - 

Properties:
- `display: flex`= Creates a flex container. Flex layout horizontal by default
- `flex: 1` = shorthand for `flex-grow, flex-shrink, flex-basis`
  - `1` = `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0` or `flex: 1 1 0`
-`flex-grow: int` = growth rate compared to other flex items in the container  
-`flex-shrink: int` = shrink rate compared to other flex items in the container

Standard uses are:
- flex: 1 to make divs grow evenly
- flex-shrink: 0 to keep certain divs from shrinking

### Flex Direction: Axes

Properties:
- `flex-direction: column|row` 
  - Set in flex container
  - Note: block elements height default to 0 or their content height, so set their height manually or use the full shortand: `flex: 1 1 auto`; auto to make the height fill its available container space, rather then defualt to 0 (nothing)

### Flex Alignment: 

- Properties:
  - `justify-content: ` alignment on main axis (horizontal default)
  - `align-items` alignment on cross axis (vertical default)
  - `gap` place "margin" on flex-items within a container.

Extra Resources:
- [Travis Media - Flexbox Crash Course](https://www.youtube.com/watch?v=3YW65K6LcIA)


### Flex Project: Landing Page
Completed: https://mplefort.github.io/OdinLandingPage/

## Javascript Basics

### Fundamentals

1. data types
  - Strings
  - numbers

2. Conditionals
  - "<, >, ==, !=, ===, ||, &&, "
  - === - checks equality without type conversion
    - null === undefined => false
    - null == undefined => true

### Functions

1. Default parameters:
  
  ```javascript
   function hello(name = "Defualt")
   ```
  
2. Scope
  - scope to global or within brackets. Can access outside of brackets if previously defined. Inside bracket defined variables are removed once brackets end


### Clean Code

1. Naming
  - Variables = start with Adj/Noun
  - Functions = start with Verb
  - Be consistent in naming/referring to items.
  - Use camelCase(Functions/classes) or the_underscore_names (Variables)
  - _variable = private
  - Names = Use good variable names rather then constants or straight numbers

2. Clean Code Tips:
  - Revise logic before coding. Have a plan/blueprint to what to code
  - Use HTML div ids for noting structure
  - Avoid Large functions - break them down for more readability
  - Name standards for Functions and Variables
  - Avoid mixing languages i.e. inline css/JS 

  ### Fundamentals - Part 4 Large Data

  Arrays, built in array methods, Loops, and Test-Driven Development (TDD)

  TDD is useful for scoping a function/design prior to writing any code. It forces you to think what you want the function to do prior to stumbling through writing, and painfully testing different inputs to make sure it functions as intended for each item.

  Instead, use TDD. Write out the tests first to clearly define your goal and when it comes time to test it is a simple click. TDD options include:
  - Mocha
  - Jest

### DOM Manipulations and Events

Selectors:
 - `div.display` - element.classs
 - `.display` - .class
 - `#container > .display` - #id > child class
 - `div#container > div.display` - element#id > child element.class

 Methods:
  - `element.querySelector(selector)` - first match 
  - `element.querySelectorAll(selectors)` - **NodeList** which is not an array. Convert to array with `Array.from()` or spread operator
  - `document.createElement(tagName, [options])` - make new element.
    - Add Elements
      - `parentNode.appendChild(childNode)`
      - `parentNode.insertBefore(newNode, referenceNode)`
    - remove Element
      - `parentNode.removeChild(child)`
  - Alter elements
    - `div.style.color = 'blue'` or `div.setAttribute('style','color: blue; background: white')`
    - `div.setAttribute()`
    - `div.getAttribute()`
    - `div.removeAttribute()`
    - `div.classList.add()`
    - `div.classList.remove()`
    - `div.classList.toggle()`
  - Add text/HTML
    - `div.textContent = ` 
    - `div.innerHTML = `  **Increased Security Risk** use textContent when possible.
  

  Add js file to your HTML with defer to run at end of rendering page.
  ``` html
  <head>
    <script src="js-file.js" defer></script>
  </head>
  ```


  Event Listeners Methods:

  
  1. JS in HTML (not preferred)
  ``` html
    <button onclick="alert('Hello World')">Click Me</button> 
  
  ```

  2. HTML and JS split. Btn only allowed one click property it watches for.
  ``` html
    HTML file
    <button id="btn">Click Me</button>
  ```
  ``` javascript 
    const btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World");
  ```

3. Most preferred, separate code and add multiple event listeners
  ``` html
  <button id="btn">Click Me Too</button>
  ```
  ``` javascript
  // the JavaScript file
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', alertFunction(e) => {
      alert("Hello World");
      console.log(e.target); // access info on event and target node
    });
  ```

  Some good event listener's:
  - click
  - dblclick
  - keydown
  - keyup
  - [More Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

  
Capture and Bubbling:

```javascript

  function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    console.log(this);
  }
  
  divs.forEach(div => div.addEventListener('click', logText, {
    capture: true,  // if true fire function on way down, false to fire on way up (bubbling)
    once: true  // only listen for event once. Remove event listener after first click
  }));
  
  ```


  ### Fundamentals - Part 5

  1. Objects
  ```javascript
  // string notation
  obj.property = 'value';
  obj['property'] = 'value';

  delete obj.property;
  "key" in obj; // true or false
  for (let key in obj) {
    console.log(key, obj[key]);
  }

  // Object methods
  Object.keys(obj); // returns array of keys
  Object.values(obj); // returns array of values
  Object.entries(obj); // returns array of arrays of key value pairs
  Object.assign(obj1, obj2); // copies obj2 into obj1
  Object.assign({}, obj1, obj2); // copies obj1 and obj2 into new object
  
  // Object Spread Operator
  const obj3 = {...obj1, ...obj2}; // copies obj1 and obj2 into new object

  // Object Destructuring
  const {property1, property2} = obj1; // creates variables property1 and property2 from obj1
  
  // array methods
  arr.filter(item => item !== 1); // returns new array with items that pass test
  arr.map(item => item * 2); // returns new array with items changed by function
  arr.sort((a, b) => a - b); // sorts array in place
  arr.reduce((accumulator, currentValue) => accumulator + currentValue, startingValue); // returns single value from array
  arr = Array.from(querSelectoryAll('div')); // converts NodeList to array

  arr.some(item => item > 2); // returns true if some items pass test
  arr.every(item => item > 2); // returns true if all items pass test
  arr.find(item => item > 2); // returns first item that passes test. Find the comment with ID of 823423
  arr.findIndex(item => item > 2); // returns index of first item that passes test.
  arr.splice(index, 1); // removes item at index from array 

  ```
  


# Good Resource List:

1. Images
  - [Pexels](https://www.pexels.com/)
  - [Pixabay](https://pixabay.com/)
  - [Unsplash](https://unsplash.com/)



  