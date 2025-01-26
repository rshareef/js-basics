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
// Multiple element selectors
const listOfItems = document.querySelectorAll('.item'); // gives a node list (simailar to array)
console.log(listOfItems);
// can apply array methods to node lists.
listOfItems.forEach((item)=>console.log(item)); // loop through items list and return each item.

// Changing things in the DOM (user interface).

// REMOVING ITEMS
const ul = document.querySelector('.items');
//ul.remove(); // removes elements
//ul.lastElementChild.remove(); // removes last element only

// SET ITEM VALUES
ul.firstElementChild.textContent = "Hi";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //add html dynamically
const btn = document.querySelector('.btn');
btn.style.background = 'red'; //change css dynamically - useful for events.

// EVENTS
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('click');
    console.log(e.target.className); // gives the class name of the element interacting with. can get all diff attributes of event clicked.
    // CHANGE APPEARANCE ON CLICKING
    document.querySelector('#my-form').style.background = '#ccc'; //change the background of the form colour.
    document.querySelector('body').classList.add('bg-dark'); // apply the css written in css class bg-dark to the body element.
    ul.lastElementChild.style.color = 'blue';
});