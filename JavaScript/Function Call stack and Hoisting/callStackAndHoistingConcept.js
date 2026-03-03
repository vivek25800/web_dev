// Call Stack and Hoisting in Javascript

// Hoisting in Javascript - 
// Hoisting is the process of where interpreter appears to moves 
// the declaration of functions, varaibles and classes to the top of 
// their containing scope during compilation phase, before the code is executed.

// Function Declaration Hoisting
// Function declarations are hoisted with both their name and the function body. 
// This means the function can be called before its definition in the code.
// Example - 

function sayMyName(myName) {
    console.log(myName);
};

sayMyName("Vivek Gupta");


