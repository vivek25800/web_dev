// Default parameters - 
// Default parameters allow you to assign a defalut value to a function parameter if no value (or undefined) is passed when the function is called.
// Basic Syntax - 
// function functionName(parameter = defaultValue) {
//     // code 
// }

// Example1 - Simple default parameter
// function greet(name = "Vivek") {
//     console.log("Hello " + name); // print 'Hello Vivek'
// } 
// greet();
// greet("Rohit"); // print 'Hello Rohit'

// Example2 - Multiple Default Parameters
// function add(num1 = 10, num2 = 20, name = "Vivek") {
//     console.log("Result: ", num1 + num2);
//     console.log("Name is: ", name);
// }
// add(50, 45, "Rohit");

// Default Parameter with Expression
// function multiply(a, b = a * 5) {
//     console.log(a, b);
// }
// multiply(20); // print 20, 100 (20 * 5)

// Default Parameter with Function
// function getValue() {
//     return "Hello Duniya";
// }
// function show(value = getValue()) {
//     console.log(value);
// }
// show();

// Passing Object in Parameter
// function student(value = {age: 20, city: "Noida", state: "UP"}) {
//     console.log(value); 
//     console.log(value.city); // print Noida
// }
// student();

// Passing Array In Parameter
// function solve(arr = [10, 20, 30, 40]) {
//     console.log(arr);
//     console.log(arr[2]); // print 30
// }
// solve();

// // Default parameter with 'null' and 'undefined'
// function example(value = "Vivek") {
//     console.log("Hello", value);
// }
// // passing null value
// example(null); // in this print 'null'
// // passing undefined
// example(undefined); // in this print 'Hello Vivek' (same value)

// // Passing a function in default paramter
// function getAge() {
//     return 25;
// } 
// function utility(name, age = getAge()) {
//     console.log(name, " ", age);
// }
// utility("Vivek");



