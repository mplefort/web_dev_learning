# **Intermediate HTML and CSS**

## **Intermediate HTML**

### Intro

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Cheat Sheet](https://html-css-js.com/html/)

#### Types of HTML Tags

1. Main Root
2. Document Meta Data
3. Sectioning Root
4. Content Sectioning
5. Text Content
6. Inline Text Semantics
7. Image and Multimedia
8. Embedded Content
9. SVG and MathML
10. Scripting
11. Demarcating Edits
12. Table Content
13. Forms
14. Interactive Elements
15. Web Components

### Emmet

[Emmet in 15min](https://www.youtube.com/watch?v=V8vizNQKtx0)
[Emmet Docs](https://docs.emmet.io/)
[Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

### SVG

Vector file instead of jpeg group of pixels. Scales without losing quality.
Pros:

- Scalable
- Small file size
- Can be animated

Cons:

- Not good for photos

#### How to use in Practice

1. Create SVG using Illustrator, Inkscape, or [Figma](https://www.figma.com/)
2. Tweak using file
3. Add to HTML
   - `xmlns` - XML NameSpace dialet used. `xmlns="http://www.w3.org/2000/svg"`
   - `viewBox` - defines the position and dimension, in user space, of an SVG viewport.
   - `class` `id` - to style
   - Some common elements:
     - `<rect>` - rectangle
     - `<circle>` - circle
     - `<ellipse>` - ellipse
     - `<line>` - line
     - `<polyline>` - polyline
     - `<polygon>` - polygon
     - `<path>` - path
     - `<text>` - text

Resources:

- [D3](https://d3js.org/) - Display data visualizatiosn
- [Figma](https://www.figma.com/) - Design tool create SVGs
- [Animate](https://www.youtube.com/watch?v=UTHgr6NLeEw) - Animate SVGs and icons

### Tables

```html
<!-- Table -->
<table>
  <caption>
    Table Caption
  </caption>
  <thead>
    <!-- Table Header  used for styling hook-->
    <tr>
      <th colspan="2">Column 1</th>
      <!-- colspan - span multiple columns -->
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <!-- Table Body Used for styling hook-->
    <tr>
      <td rowspan="2">Row 1, Column 1</td>
      <!-- rowspan - span multiple rows -->
      <td>Row 1, Column 2</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
    </tr>
  </tbody>
</table>
```

## Intermediate CSS Concepts

### Default Styles

Browsers have a defualt CSS sheet applied. To remove this, use a CSS reset sheet.
Example Resets:

- [Normalize](https://necolas.github.io/normalize.css/)
- [Reset](https://meyerweb.com/eric/tools/css/reset/)

### CSS Units

1. Absolute - fixed size
   - px, pt, cm, in
2. Relative - relative to something else
   - em, rem, %
   - rem = root html fontsize _ x rem. i.e. 1.5rem = 1.5 _ 16px = 24px
   - em = relative to parent element
3. Viewport Units
   - vw, vh, vmin, vmax
   - vw = 1% of viewport width
   - vh = 1% of viewport height
   - vmin = 1% of viewport width or height, whichever is smaller
   - vmax = 1% of viewport width or height, whichever is larger

Best Practices sizes:

1. Font Sizes
   - rem
2. Widths
   - %, with max-width
   - ch - width of characters (45-75 characters per line)
3. Heights
   - %, with max-height
   - vh - viewport height
4. Padding/Margin
   - rem,
5. Media Queries
   - rem

### Fonts

Font Families:

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

Text Styles:

```css
font-style: italic;
letter-spacing: 0.1em;
line-height: 1.5;
text-transform: uppercase, lowercase, capitalize;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
/* truncate with ... */
.overflowing {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

### More CSS Properties

1. Background -
   - Set images, color, position/size, repeat, etc.
2. Borders
   - border-width, border-style, border-color, border-radius
   - `border: 1px solid black;`
   - `border-radius: 5px;`
3. Box Shadow
   - `box-shadow: 0 0 10px rgba(0,0,0,0.5);`
4. Overflow:
   - overflow:
     - hidden
     - scroll
     - auto
5. Opacity

   - `opacity: 0.5;`

6. Dynamic pseudo-classes

   - :F:\0. Sales Order Transitioning Project\229 Converted - when element is focused by click or keyboard
   - :hover - when mouse is over element
   - :active - when element is being clicked
   - :visited - when link has been visited
   - :link - when link has not been visited

7. Structural pseudo-classes

   - :root - selects root element
   - :first-child - selects first child of parent
   - :last-child - selects last child of parent
   - :empty - selects empty elements
   - :only-child - selects elements that are only children

8. Pseudo-elements:

   - ::marker - selects list item marker
   - ::first-letter - selects first letter of element
   - ::first-line - selects first line of element
   - ::selection - selects portion of element that is selected
   - ::before/::after - inserts content before/after element

9. Attribute
   - [attribute] - selects elements with attribute
   - selector[attribute] - selects elements with attribute for more specificity
   - [attribute="value"] - selects elements with attribute and value
   - [attribute~="value"] - selects elements with attribute and value in a space separated list
   - [attribute|="value"] - selects elements with attribute and value in a hyphen separated list
   - [attribute^="value"] - selects elements with attribute and value that starts with value
   - [attribute$="value"] - selects elements with attribute and value that ends with value
   - [attribute*="value"] - selects elements with attribute and value that contains value

[CSS diner](https://flukeout.github.io/#) - lvl 17

### Positioning

Absolute, Relative, Fixed, Sticky are the options to positioning.

**Static** is default and is uneffected by `top, right, bottom, left` properties.

**Relative** is the same as static, but is effected by `top, right, bottom, left` properties to move an element relative to its default position.
This moves out of the document flow. It will overflow over to the other elements.

**Absolute** is positioned relative to its closest ancestor. It will not be in the standard flow of the document and is positioned via `top, right, bottom, left` properties. The document ignores this element. Good to stick something in postion without moving anything else. `top, right, bottom, left` will be positioned relative to root or its closest ancestor with `position: relative` or `absolute`.

Good for:

- a dropdown menu
- modals
- image with a caption
- icons on top of other elements

**Fixed** is positioned relative to the **viewport**. It will not be in the standard flow of the document and is positioned via `top, right, bottom, left` properties.

**Sticky** position act normal until you scroll past them. Then they behave like fixed.

### CSS Functions

Common functions:

- `calc()` - perform calculations
- `var()` - use variables, alled at time of use

  ```css
  --color-font: red;
  color: var(--color-font, fallback);
  ```

  - scope of var set to parent selector or children elements.
  - use global scope with `:root`

- `min(ideal val, max val to shrink too)` - use minimum value
  use min to allow element to growing past a max value, but shrink
- `max(min val, ideal val(s))` - use maximum value
  use max to allow element to stop shrinking past a min value, but grow
- `clamp(min, ideal, max)` - use value between min and max
  - a combination of min and max. Sets a max and min value, but allows the ideal (variable) value to be used if it is between the min and max values.

Function types to be aware of:

- Translational functions - move a element
- Rotational Functions - rotate an element
- Scale Functions - scale an element
- Skew Functions - skew an element
- Transform Functions - combine multiple functions (Matrix)
- Math calc, min, max, clamp
- Trig
- Rounding
- exponential
- Images
  - opacity
  - image() - create an image with url
  - image-set() - pick a image from set
  - cross-fase
- Color
  - rgb, color-mi
- References
  - attr() - get value of attribute from HTML
  - var() - get value of variable
- Grid Functions
- Animate

### Browsers

[Can I Use](https://caniuse.com/) - check browser support for features


### Forms

`action` - where to send data via api URL
`method` - how to send data (POST, GET)

Outline of a form:
```html
    <form action="example.com/path" method="post">
        <!-- Label: the label for == input id -->
        <label for="name">First Name:</label>
        <!-- Controls,
             name - tells backend
             id - for label
             placeholder - hint to user
             required - required field
         -->
        <input type="text" name="name" id="name" placeholder="Name" required>
        
        <!-- other form controls -->
        <!-- email -->
        <label for="user_email">Email:</label>
        <input type="email" name="user_email" id="user_email" placeholder="Email" required>

        <!-- password -->
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" required>

        <!-- number input -->
        <label for="age">Age:</label>
        <input type="number" name="age" id="age" placeholder="Age" required>

        <!-- Date -->
        <label for="date">Date:</label>
        <input type="date" name="date" id="date" placeholder="Date" required>

        <!-- text area  -->
        <label for="message">Message:</label>
        <textarea name="message" id="message" placeholder="Message" rows="20" cols="60" required></textarea>

        <!-- Dropdown -->
        <label for="dropdown">Dropdown:</label>
        <select name="dropdown" id="dropdown">
            
            <optgroup label="cars">
                <option value="1">tesla 1</option>
                <option value="2" selected>Ford 2</option>
                <option value="3">BMW 3</option>
            </optgroup>
            <optgroup label="trucks">
                <option value="4">Ford F150 </option>
                <option value="5">Toyota Tundra</option>
            </optgroup>
        </select>

        <!-- radio Button for ticket types  -->
        <div>
            <input type="radio" id="child" name="ticket_type" value="child">
            <label for="child">Child</label>
        </div>
        <div>
            <input type="radio" id="adult" name="ticket_type" value="adult">
            <label for="adult">Adult</label>
        </div>
        <div>
            <input type="radio" id="senior" name="ticket_type" value="senior">
            <label for="senior">Senior</label>
        </div>

        <!-- checkbox -->
        <div>
            <input type="checkbox" id="agree" name="agree" value="agree">
            <label for="agree">I agree to the terms and conditions</label>
        </div>
        <div>
            <input type="checkbox" id="subscribe" name="subscribe" value="subscribe" checked>
            <label for="subscribe">Subscribe to our newsletter</label>
        </div>

        <!-- Buttons -->
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button type="button">Click to Toggle"</button>


        <!-- organize elements with Fieldset, legend -->

        <fieldset>
            <legend>Legend</legend>
            <!-- form elements -->
        </fieldset>


    </form>
```

#### Styling Forms

  Reset default styles of form elements:

    ```css

    button,
    input,
    select,
    textarea {
    font-family: inherit;
    font-size: 100%;
    width: 150px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    
    ```

  See Form-InternetHardForm for example of styling a form.


### [Form Validation](https://www.theodinproject.com/lessonsnode-path-intermediate-html-and-css-form-validation)

#### Client Side Validation
Use `required` to require a field to be filled out on a input element. Standard practice to add a `*` to the label to indicate required.

#### Pattern match
Use `pattern` to require a specific pattern to be followed. Use regex to define the pattern. i.e. for credit cards, zip code, PWs etc.

#### Text Length
Use `minlength` and `maxlength` to set the min and max length of a text input.

#### Max and Min
[MDN Max and Min](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax) has complete list of how to use Max and Min. Commonly used in `date, month, week, time, datetime-local, number, range` input types.

#### Styling validations
Use `:valid` and `:invalid` to style valid and invalid inputs. Use `:required` to style required inputs.

#### Assignment:
1. [MDN Client side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
  - Note: There are several errors that will prevent the form from being submitted, including a `badInput, patternMismatch, rangeOverflow or rangeUnderflow, stepMismatch, tooLong or tooShort, typeMismatch, valueMissing`, or a `CustomError`.

2. [sitepoint html forms constraint guide](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)
  - 


### Grid

Properties Lists:
- [CSS-Tricks Grid Properties](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-properties)

#### [Intro to Grid](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-introduction-to-grid)

Grid is good for layouts. Flexbox is good for alignment. Both are great.

#### [Creating a Grid](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid)

Grid is a 2D layout system. This will show how to make a grid container, tracks, diff between implicit and explicit grid, set gaps between cells.

Example simple grid system:

```html

    <div class="grid-container">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

```

```css

.grid-container {
  /* Type of grid container
  inline = Only used size of grid based on grid template sizing
  grid = block element and span the entire width of container
  */
    display: grid | inline-grid;
    /* Tracks - aka a column or a row. */
    /* 2 columns each 1 fr (fraction of free space) */
    grid-template-columns: 1fr 1fr;
    /* 2 rows each 100px */
    grid-template-rows: 100px 100px;
    
    /* Gap adds to both columns and rows */
    grid-gap: 10px;
    /* or */
    column-gap: 10px;
    row-gap: 10px;

    /* for overflow content divs greater then grid-template-(rows*columns) i.e. div 5*/
    grid-auto-rows: 100px;
  }
  

```
All **direct** child elements will become a grid element. 

[Google Dev tools CSS Grid](https://developer.chrome.com/docs/devtools/css/grid/)

### [Position Grid Elements](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-positioning-grid-elements)

Lines:
- Grid Lines are 1 indexed and indicate the line between rows/columns
- used for positioning grid elements
- Use Dev tools **layout** tab to see grid lines

Cells:
- Grid cells are 1 indexed and indicate the cell between rows/columns

Positioning:
```css
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px 100px;
  }

  .grid-item{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    /* shorthand */
    grid-column: 1 / 3;
    grid-row: 1 / 3;

    /* span */
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;

    /* area shorthand */
    grid-area: 1 / 1 / 3 / 3;
    /* or if we have grid items with #ids of area1, area2, area3*/
    grid-area:
     "area1 area1 area1"
      "area2 area3 area3"

  }
```


### [Advanced Grid Properties](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-grid-properties)

Topics:
  - repeat function - `grid-template-columns: repeat(3, 1fr);`
  - fr units - fraction of free space
  - Set min, max, and ideal track size. Using `minmax(min, max)`
  - auto-fill and auto-fit - dynamic number of rows/columns



### [Using Flexbox and Grid](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-using-flexbox-and-grid)

Topics:
  - Know when to flexbox vs Grid


#### Content first vs layout first design

If your design comes from the content, start with flexbox.

If your design starts from the layout, and your content will fit into these pretty boxes and not go over. Then use Grid.


