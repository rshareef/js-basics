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
*/
const numbers = new Array(1,2,3,4,5); // array using a constructor.
const fruits = ['apples', 'oranges', 10, true]; // array starting with [] brackets.
console.log(fruits[1]);