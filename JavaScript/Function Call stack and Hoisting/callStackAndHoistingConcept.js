// Call Stack and Hoisting in Javascript

// Hoisting in Javascript - 
// Hoisting is the process of where interpreter appears to moves 
// the declaration of functions, varaibles and classes to the top of 
// their containing scope during compilation phase, before the code is executed.
// Important - JavaScript only hoists declarations, NOT initializations.

// Function Declaration Hoisting
// Function declarations are hoisted with both their name and the function body. 
// This means the function can be called before its definition in the code.
// Example - 

// Function call before declaration
// {
//     sayMyName("Vivek Gupta");

//     function sayMyName(myName) {
//         console.log(myName);
//     };
// }

// But Hoisting does not work with function expression
// Example - 
// In this case its giving reference error

// sayHello(); // giving error

// let sayHello = function() {
//     console.log("hello this is Vivek Gupta");
// }

// =====================================================================================

// In variable case -
// In variable case only variable declaration (var age) move to top not complete
// varaible initialize with value
// Example -
// console.log(age);  // Its print "undefined"
// var age = 25;

// JavaScript internally sees it like this:
// var age; // hoisted
// console.log(age); // undefined
// age = 25;


// =====================================================================================

// Hoisting with Class -
// In Class case hositing works same as function expression it does not
// work its giving reference error "You cannot access "Class_Name" before innitialization
// Example -

// const object1 = new Person(); // cereating object of class
// class Person {

// }

// ======================================================================================

// Function Call Satck in Javascript - 
// It keeps track of function calls in the order they are executed.
// It determine which function is currently running and what runs next.
// The call stack works based on the last-in-first-out (LIFO) priciple.
// Example - 

// function add(num1, num2) {
//     return num1 + num2;
// }

// function average(num1, num2) {
//     return add(num1, num2) / 2;
// }

// let result = average(10, 20);
// console.log("Average is : ", result);

// Functions - First class citizens
// Functions are treated like any other varaible.
// That means functions can:
// 1. Be assigned to a variable
// 2. Be passed as an argument to another function
// 3. Be returned from another function
// 4. Be stored inside objects or arrays

// Function Assigned to a Variable
// Example -
// const greet = function() {
//     console.log("Hello World");
// }
// greet();

// Function Passed as Argument (Callback)
// Example - 
// function sayHello() {
//     console.log("Hello");
// }
// function executeFunction(fnc) {
//     fnc();
// }
// executeFunction(sayHello);

// Function Returned From Another Function
//Example - 
function outer() {
    return function inner() {
        console.log("Inside inner function!");
    };
}
let result = outer();
result();

// Function Stored in Object
// Example - 
// const person = {
//     name: "Vivek",
//     age: 25,
//     greet: function() {
//         console.log("Hello Duniya");
//     }
// }
// person.greet(); // Print - Hello Duniya

// Functions with Data Structures (Array)
// Example - 
let arr = [
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    },
    function(a, b) {
        return a * b;
    }
];

let first = arr[0];
let ans = first(10, 10); // print 20
console.log(ans);

let second = arr[1];
let ans2 = second(20, 12);
console.log(ans2);

let third = arr[2];
let ans3 = third(4, 5);
console.log(ans3);






