# Intro to JS

### LGs:
- [ ] Mutate the DOM and its styles using JavaScript
- [ ] Create new DOM nodes and append them
- [ ] Use different querySelectors to select single or multiple elements from the DOM


### Learning Goal 1: Mutate the DOM and its styles using JavaScript

- What is the DOM?
  - The DOM (Document Object Model) is a representation of an HTML document as a **tree** that can be manipulated with JavaScript
  - Javascript is a language created to manipulate the DOM
- Accessing the DOM in Chrome developer tools, starting with the `document`, and traversing down the DOM tree to access different elements
- How we can use `let` and `const` to create variables so we can write less code
- How attributes of HTML elements are present in the DOM
- How we can change attributes of the DOM using JavaScript
- How JavaScript must run on the clients computer to do this

#### TASK: Grab h4 tag and change innertext to your name. 


### Learning Goal 2: Create new DOM nodes and append them


- Creating a new DOM element with `document.createElement`
- Mutating the properties of that element with JavaScript
- How the element will not appear on the page until we `.append` it somewhere
- Using `.innerHTML` to create elements from HTML

#### TASK: Display `gighy.gif` image on screen using image tag cration and append them.

### Learning Goal 3: Use different querySelectors to select single or multiple elements from the DOM


- How accessing elements via the DOM tree is brittle 
- Using  `querySelector` to jump to specific elements on the page
- Using  `querySelectorAll` to select multiple elements on the page
- Using a for-loop to iterate ove all the selected elements
- That there are legacy tools, `.getElementById`, .`getElementsByClassName`

#### TASK: Change p tag innertext "try to change me!" to "we love food!"
