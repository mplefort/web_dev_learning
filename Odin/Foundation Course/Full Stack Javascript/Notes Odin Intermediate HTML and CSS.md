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
