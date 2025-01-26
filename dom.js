/*
DOM = Document Object Model (like a tree structure of HTML tags).
*/
// Selecting things from the DOM (i.e. taking HTML elements and assigning them to variables).
// NOTE: window object is the parent object of the browser (window.alert(1) is the same as alert(1) because window is the top level object).

// Single element selectors
const form = document.getElementById('my-form'); // selects an element by its unique HTML id attribute
console.log(form);
const firstHeadingOnly = document.querySelector('h1'); // "selects the first element that matches the provided CSS selector".
console.log(firstHeadingOnly);
// multiple element selectors
