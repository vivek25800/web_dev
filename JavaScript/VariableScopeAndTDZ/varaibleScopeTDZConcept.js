// Variable Scope in Javascript
// 1: Global Scope
// 2: Function Scope
// 3: Block Scope

// Global scope - 
// Variables declared Globally (outside any block or function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Example - 

// let age = 25;

// // In a scope
// {
//     console.log(age); // print 25
// }

// // In condition block
// if(true) {
//     console.log(age); // print 25
// }

// // In loop function block
// for(let i = 0; i < 2; i++) {
//     console.log(age); // print 25 two times
// }

// // In a function 
// function sayHello() {
//     console.log("Hello ", age); // Hello 25
// }
// sayHello();

// ====================================================================

// Function Scope in JS -
// Variable declared inside a function are accessible only inside that function.
// Exmaple - 

// function myTest() {
//     let age = 25;
//     console.log("Age: ", age); // print Age: 25
// }
// myTest();

// // but in case we access this 'age' variable outside function its giving error.
// console.log(age); // its giving reference eror 'age' is not defined

// ===================================================================================================

// Block Scope in Javascript (Very Important)
// Block scope means variables declared inside {} are accessible only inside that block.
// Block scope works with: 'let' and 'const'
// Example - 
// {
//     let x = 10;
//     const y = 20;
// }
// console.log(x); // its giving error
// console.log(y); // its giving error

// but in 'var' case
// {
//     var age = 25;
// }
// console.log(age); // print 25

// =============================================================================

// Temporal Dead Zone (TDZ) in JS
// The Temporal Dead Zone is the time between when a variable is hoisted and when it is initialized.
 









