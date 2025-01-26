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
/*
DESTRUCTURING: 
- unpack object/ iterable(e.g. arrays) properties into variables
- does not change the original object
- can use it to set default values (e.g. country = "UK" below)
- used to extract multiple values from an obj/iterable in one go.
*/
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
        isCompleted: false
    },
    {
        id: 3,
        text: "Driving Lesson",
        isCompleted: true
    }
];
console.log(todos[1].text); // Output second task.

/*
JSON
- data format, often used in full-stack development when using APIs and sending data to a server.
*/
const todoJSON =  JSON.stringify(todos); //convert js to a JSON string.
console.log(todoJSON);

/* NOTE: const and let are both block scoped,
with let, you can change the value of it after it has been initially assigned
with const, its a constant value which cannot be reassigned (unless within an object/iterable) unless redefined */

/*
LOOPS: use 'let' instead of const as its mutable.
*/

// for
for(let i=0; i<10; i++){
    console.log(`For loop iteration: ${i}`);
};

// while
let i=0;
while (i<10){
    console.log(`While loop iteration: ${i}`);
    i++;
};

// for-of
for(let todo of todos){
    console.log(todo.text);
};

/* high order array methods: best way to iterate through arrays.
for-each: loops through as normal
map: create a new array from array
filter: create a new array based on a condition
***these methods take a FUNCTION in as a parameter
CALLBACK FUNCTION = function passed as an argument to another function (allows function to call another function). callback function runs after other function finished.
"The callback function is helpful when you have to wait for a result that takes time. For example, the data coming from a server because it takes time for data to arrive."
This is because it will wait for the first function to execute before running the second one.
*/
// loops through each text value in todo array.
todos.forEach(function(todo){
    console.log(todo.text);
});

// return an array of only the text values.
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// Return a new array with the square root of all element values:
const nums = [4, 9, 16, 25];
const newArr = nums.map(Math.sqrt);
console.log(newArr);

// Return array of completed tasks only
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true; // returns a boolean value
}).map(function(todo){
    return todo.text; // just return the text part of the todo object literal.
})
console.log(todoCompleted);

/*
CONDITIONALS:
== double equals: performs type conversion (loose comparison). i.e. ('10' == 10) returns true
=== triple equals: NO type conversion occurs. if the types differ, returns false.
Object.is(): determines if two values are equal (i.e. value is same or for reference types, that they point to the the same reference).
- for == and ===, (-0 == +0) returns true and non-number(NaN) values are NOT equal.
- for Object.is(), (-0 == +0) returns false and non-number(NaN) values are equal.

&& AND
|| OR

*/
const a = 20;
if(a === 10) {
    console.log('a is 10');
}else if (a>10){
    console.log('a is greater than 10');
}else{
    console.log('a is less than 10');
};


console.log(Object.is('foo', 'foo')); // Output: true
console.log(Object.is({}, {})); // Output: false (different object references)

console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(+0, -0)); // Output: false

// TERNARY OPERATOR = condition? if true: if false
const j=10;
const colour = j>10 ? 'red':'blue';
console.log(colour); // Outputs blue because ternary statement returns false.

// SWITCH STATEMENT
switch(colour){
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is not red or blue');
        break;
}

/*
FUNCTIONS
*/

// num1 has a default value that can be overridden by passing an argument for that parameter on invocation.
function addNums(num2, num1 = 1){
    return (num1 + num2)
}
console.log(addNums(5));

// ARROW FUNCTIONS: assign to a constant variable and add an arrow
// addNums1 and 2 do the same thing, addNums 3 is similar but with 1 variable only and outputs different value.
const addNums1 = (num2, num1 = 1)=>{
    return (num1 + num2)
}
console.log(addNums1(5));

const addNums2 = (num2, num1 = 1)=> (num1 + num2);
console.log(addNums2(5));

const addNums3 = (num1 = 1) => num1 + 5;
console.log(addNums3(5));

todos.forEach((todo)=>console.log(todo));

/*
OBJECT ORIENTED PROGRAMMING
1 - CONSTRUCTOR FUNCTIONS AND PROTOTYPES
2 - ES6 CLASSES
*/
// 1

// constructor function
function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // uses date constructor to turn string date into a date object
    // add methods to this object - this is not the best way to do it, use prototypes.
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}

// use prototypes when you dont want to attatch a function to every object created by default
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
// instantiate object
const person1 = new Person ('John', 'Doe', '4-3-1990');
const person2 = new Person ('Marie', 'Anne', '4-3-1980');
console.log(person1.dob.getFullYear()); // and because dob is a date object we can apply date functions to it.
console.log(person1);
console.log(person1.getFullName());

// same as above but using ES6 classes - tidier way to create classes.
class PersonX {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const person3 = new PersonX ('John', 'Doe', '4-3-1990');
const person4 = new PersonX ('Marie', 'Anne', '4-3-1980');
console.log(person4.getBirthYear() , person4.getFullName());
console.log(person3);
