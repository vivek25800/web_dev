// Default parameters - 
// Default parameters allow you to assign a defalut value to a function parameter if no value (or undefined) is passed when the function is called.
// Basic Syntax - 
// function functionName(parameter = defaultValue) {
//     // code 
// }

// Example1 - Simple default parameter
function greet(name = "Vivek") {
    console.log("Hello " + name);
} 
greet();
greet("Rohit");

// Example2 - Multiple Default Parameters
function add(num1 = 10, num2 = 20) {
    return num1 + num2;
}
console.log(add());

// Default Parameter with Expression
function multiply(a, b = a * 5) {
    console.log(a, b);
}
multiply(20); // print 20, 100 (20 * 5)

// Default Parameter with Function
function getValue() {
    return "Hello Duniya";
}
function show(value = getValue()) {
    console.log(value);
}
show();









