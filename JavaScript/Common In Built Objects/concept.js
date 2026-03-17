console.log("Hello Duniya");

// Math function in JS

// Find the value of PI using Math function
// console.log(Math.PI); // Print - 3.141592653589793

// // Find the maximum number
// console.log(Math.max(34, 45, 567, 43, 56, 67)); // print 567

// // Find the minimum number
// console.log(Math.min(56, 34, 58, 20, 48, 3)); // print 3

// // Rounding Functions - 

// // Round to nearest integer
// console.log(Math.round(2.6)); // print 3
// console.log(Math.round(2.4)); // print 2

// // Rounds down.
// console.log(Math.floor(4.5)); // print 4
// console.log(Math.floor(5.9)); // print 5

// // Rounds Up.
// console.log(Math.ceil(2.1)); // print 3
// console.log(Math.ceil(2.9)); // print 3 

// // Removes decimal part
// console.log(Math.trunc(4.8)); // print 4
// console.log(Math.trunc(6.9)); // print 6

// Power and Root Functions

// Power of number
// console.log(Math.pow(4,5)); // print 1024
// console.log(Math.pow(2,3)); // print 8

// // Square root
// console.log(Math.sqrt(16)); // print 4
// console.log(Math.sqrt(100)); // print 10

// // Cube root
// console.log(Math.cbrt(27)); // print 3
// console.log(Math.cbrt(125)); // print 5

// // Absolute and Sign Functions

// // Returns positive value
// console.log(Math.abs(-10)); // print 10
// console.log(Math.abs(-15)); // print 15

// Retirns sign of number
// console.log(Math.sign(-10)); // print -10
// console.log(Math.sign(12)); // print 12

// // Random Number

// // Return random number between 0 and 1.
// console.log(Math.random());
// // Return random number between 0 and 10.
// console.log(Math.random() * 10) + 1;
// console.log(Math.trunc(Math.random() * 10) + 1);

// Real Data and time

let curr = new Date();
console.log(curr);
console.log("Year: " + curr.getFullYear()); // print Year: 2026
console.log("Month: " + (curr.getMonth() + 1)); // print Month: 3
console.log("Date: " + curr.getDate()); // print Date: 17
console.log("Day: " + curr.getDay()); // print Day: 2
console.log("Hours: " + curr.getHours()); // print Hours: 17
console.log("Minutes: " + curr.getMinutes());
console.log("Seconds: " + curr.getSeconds());

// As an argument
let date = new Date("May 25 1999 16:35");
console.log(date);

// As an Parameter
let newDate = new Date(1999, 4, 10, 7)
console.log(newDate);















