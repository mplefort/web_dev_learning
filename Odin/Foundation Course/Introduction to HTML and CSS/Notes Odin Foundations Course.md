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
[Interneting is hard’s treatment on HTML links and images](https://internetingishard.netlify.app/html-and-css/links-and-images)
[What happened the day Google decided links including (/) were malware](https://www.itpro.co.uk/609724/google-apologises-after-blacklisting-entire-internet)
