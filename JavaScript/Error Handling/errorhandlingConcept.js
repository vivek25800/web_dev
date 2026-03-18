
// Types of Error

// 1. Complie-Time Errors (Syntax Errors)
// Errors that occur before the code runs, during parsing.
// Examples - 

// let x = ; // Syntax error
// console.log(10; // Syntax error

// if(true {
//     console.log("Hello Vivek");
// }
// here missing brackets or invalid syntax -> code won't execte at all


// 2. Runtime Errors
// Errors that occur while the code is running
// Syntax is correct, but something does wrong during execution
// Example - 
// console.log(a); // Reference error (a is not define)

// let num = null;
// console.log(num.toUpperCase()); // TypeError



// Error Handling in Javascript

// Error handling is how you detect, manage, and respond to runtime errors so your app does not crash.

// 1. try...catch
// Try block: You place code that may potentially throw an error here.
// Catch block: This block executes if an error occurs in the try block.
// Used to handle error safely.
// Example - 
// try {
//     console.log("Try blocks starts here");
//     // error -> reference error
//     console.log(num);
//     console.log("try block ends here");

// } catch (error) {
//     // define karte hai error ke sath aap kya karna chahte ho.
//     // retry logic
//     // fallback machanism
//     // logging
//     // custom error
//     console.log("I am inside catch block");
//     console.log("your error is here: ", error);
// }

// Used to handle errors safely.
// try {
//     let result = JSON.parse("invalid json");
// } catch (error) {
//     console.log("Error occured: ", error.message);
// }


// 2. finally
// Always runs (whether error happens or not)
// try {
//     console.log("Try block");
// } catch (error) {
//     console.log("Error");
// } finally {
//     console.log("Always runs");
// }


// 3. throw (Custom error)
// You can create your own errors.
// Syntax -> throw new Error("Your message")
// Example: 
// try {
//     // error -> reference error
//     console.log(num);
// } catch (error) {
//     throw new Error("First you need to be declare num and print it");
// }

// function checkAge(age) {
//     if (age < 18) {
//         throw new Error("Not allowed");
//     }
// }

// Error Object
// Common properties:

try {
    x = y; // error
} catch (error) {
    console.log(error.name); // ReferenceError
    console.log(error.message); // y is not defined
}


// 5. Types of Errors
// Type	Example

// ReferenceError	variable not defined
// SyntaxError	invalid code
// TypeError	wrong type usage
// RangeError	invalid range
// Custom Error	created using throw







