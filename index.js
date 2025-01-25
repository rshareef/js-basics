// STATEMENT: code that expresses an action to be performed.
// e.g. log a message on the console:
console.log('Hello World');
console.error("Error!");
console.warn("Warning");

/*
VARIABLES: var, let, const.
- var (depreciated - has global scope - don't use anymore).
- let (can reassign values).
- const (will give an error if u try and reassign value).
use const unless you know you will be reassigning the variables value.
*/
let score = 0;
score = 10;
console.log(score);

const favNum = 7;
// favNum = 9; will produce an error in console.
console.log(favNum);

/*
DATA TYPES: String, Numbers, Boolean, null, undefined.
*/
const firstName = "John"; //typeof = string
const age = 12; //typeof = number
const rating = 4.5; //typeof = number
const isCool = true; //typeof = boolean
const x = null; //typeof = object (actually an error)
let z; //typeof = undefined

// test type
console.log(typeof z);

// concatenation with template strings.
const hello = `My name is ${firstName} and I am ${age}.`;
console.log(hello);

// property = doesnt end with (), method = ends with ().
const s = "Hello World";
console.log(s.length); // length of string.
console.log(s.toUpperCase()); // all uppercase.
console.log(s.toLowerCase()); // all lowercase.
console.log(s.substring(0,5)); // substring of s from index 0 to 4 inclusive (Hello).
console.log(s.substring(0,5).toUpperCase()); // combine methods/properties.

// create array from a string with separators. e.g. blogpost form with tags.
const y = 'technology, computers, it, code';
console.log(y.split(', '));

/* 
ARRAYS:
- can have mutiple data types in array and dynamic size (no need to set array size at initialisation).
- also note JS is not statically typed (TypeScript is statically typed).
- can add onto the end of the array e.g. in an array with 3 elements, u can add the 4th and so on elements with .push(value).
- cannot directly reassign an existing array, can manipulate it though.
*/
const numbers = new Array(1,2,3,4,5); // array using a constructor.
const fruits = ['apples', 'oranges', 10, true]; // array starting with [] brackets.

console.log(fruits);
console.log(fruits[1]); // output the 2nd element in the array.
fruits.push("mangoes"); // add the value "mangoes" to the end of the array.
console.log(fruits);
fruits.unshift("strawberries"); // add the value "strawberries" to the start of the array.
console.log(fruits);
fruits.pop(); // remove and return last element of the array.
console.log(fruits);
// use the function 'isArray' to check if the item passed in is an array or not. returns a boolean value.
console.log(Array.isArray(fruits)); // returns true.
console.log(Array.isArray("hello")); // returns false
console.log(fruits.indexOf('oranges')); // returns the index of the value passed in.

/*
OBJECT LITERALS
declaring an object, with key value pairs, delimited by commas.
can have embedded object literals, such as address as below
*/
const person = {
    firstname: 'John',
    lastName: 'Smith',
    age: 30,
    hobbies: ['sports', 'movies'],
    address: {
        street: '50 Pine Street',
        city: 'London',
        postcode: 'WB 321'
    }
};

console.log(person);
// access properties from an object literal: e.g. John Smith movies London
console.log(person.firstname, person.lastName, person.hobbies[1], person.address.city);
/* DESTRUCTURING: 
- unpack object/ iterable(e.g. arrays) properties into variables
- does not change the original object
- can use it to set default values (e.g. country = "UK" below)
- used to extract multiple values from an obj/iterable in one go.*/
const { lastName, firstname, address: {city}, country = "UK" } = person;
console.log(city, country);

person.email = "john@gmail.com"; // add properties to object literal directly

// create an array of objects. e.g. an array of to-do tasks.
const todos = [
    {
        id: 1,
        text: "Throw rubbish",
        isCompleted: true
    },
    {
        id: 2,
        text: "Doctors Appt",
        isCompleted: true
    },
    {
        id: 3,
        text: "Driving Lesson",
        isCompleted: true
    }
]
console.log(todos[1].text); // Output second task.