**Intermediate HTML and CSS**

# **Intermediate HTML**

## Intro

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Cheat Sheet](https://html-css-js.com/html/)

### Types of HTML Tags
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
11. Demarcating Edits - 
12. Table Content
13. Forms
14. Interactive Elements
15. Web Components

## Emmet

[Emmet in 15min](https://www.youtube.com/watch?v=V8vizNQKtx0)
[Emmet Docs](https://docs.emmet.io/)
[Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

## SVG

Vector file instead of jpeg group of pixels. Scales without losing quality.
Pros:
- Scalable
- Small file size
- Can be animated

Cons:
- Not good for photos

### How to use in Practice

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


 ## Tables

 ```html
 <!-- Table -->
<table>
    <caption>Table Caption</caption>
    <thead> <!-- Table Header  used for styling hook-->
        <tr>
            <th colspan="2">Column 1</th>  <!-- colspan - span multiple columns -->
            <th>Column 2</th>
        </tr>
    </thead>
    <tbody> <!-- Table Body Used for styling hook-->
        <tr>
            <td rowspan="2">Row 1, Column 1</td> <!-- rowspan - span multiple rows -->
            <td>Row 1, Column 2</td>
        </tr>
        <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
        </tr>
    </tbody>
 ```

## Default Styles

Browsers have a defualt CSS sheet applied. To remove this, use a CSS reset sheet.
Example Resets:
- [Normalize](https://necolas.github.io/normalize.css/)
- [Reset](https://meyerweb.com/eric/tools/css/reset/)

## CSS Units

1. Absolute - fixed size
    - px, pt, cm, in
2. Relative - relative to something else
     - em, rem, % 
     - rem = root html fontsize * x rem. i.e. 1.5rem = 1.5 * 16px = 24px
3. Viewport Units
    - vw, vh, vmin, vmax
    - vw = 1% of viewport width
    - vh = 1% of viewport height
    - vmin = 1% of viewport width or height, whichever is smaller
    - vmax = 1% of viewport width or height, whichever is larger