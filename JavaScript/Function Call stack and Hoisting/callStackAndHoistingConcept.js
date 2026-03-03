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



