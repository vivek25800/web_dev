/* Function are one of the fundamental building blocks in Javascript.
A function in JavaScript is similar to a proceure - a set of statements that
performs a task or calculates a CSSMathValue. */

// function definition
// function sayMyName() {
//     console.log("My name is Vivek Gupta");
// }
// // function use - function call
// sayMyName();

// Print count 1 to 100
// function printCounting() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// printCounting();

// // here num is a parameter
// function printNumber(num) {
//     console.log("Printing number: ", num);
//     for(let i = 1; i <= num; i++) {
//         console.log(i);
//     }
// }
// // here 5 is an argument
// printNumber(5);

// Default parameter
// function greetMyName(myName = "Vivek") {
//     console.log(`Hello ${myName}`);
// }
// greetMyName(); // Hello Vivek
// greetMyName("Vivek Gupta"); // Hello Gupta

// Find average of two number
// function findAverage(num1, num2, num3) {
//     let avg = (num1 + num2 + num3) / 3;
//     console.log("Average: ", avg);
// }
// findAverage(3,100,40);

// Return type function
// function findAverage(num1, num2, num3) {
//     let avg = (num1 + num2 + num3) / 3;
//     return avg;

//     //unreachable code
//     console.log("This will not be printed");
// }
// let average = findAverage(20,30,40);
// console.log("Average; ", average);

// Return String form function
// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }
// let myName = getMyName("Vivek", "Gupta");
// console.log("My name is: ", myName);

// Function Expression
// const getMultiplication = function(num1, num2) {
//     return num1 * num2;
// }
// console.log(getMultiplication(20, 10));

// const sayMyName = function(myName) {
//     return `Hello ${myName}`;
// }
// console.log(sayMyName("Vivek"));

// 1 - Basic decalaration of function
// function getExp(x, y) {
//     return x ** y;
// }
// console.log(getExp(2, 5));

// 2 - Function expression
// const getExp2 = function(x, y) {
//     return x ** y;
// }
// console.log(getExp2(4, 2));

// 3 - Arrow function 
// const getExp3 = (x, y) => {
//     return x ** y;
// }
// console.log(getExp3(2, 3));

// 4 - Short hand Arrow function
// const getExp4 = (x, y) => x ** y;
// console.log(getExp4(3, 3));


// 🔥 Practice Questions for You

// Write a function to find factorial.
// Write a function to check prime number.
// Write a function to reverse a string.
// Write a function to find maximum of three numbers.
// Write a function to count vowels in string.
// Write a function that converts Celsius to Fahrenheit.
// Write a function to check palindrome.
// Write a function to generate Fibonacci series.
// Write a function to return the sum of 1 to n.

// 1_ Write a function to find factorial.
// function findFactorial(num) {
//     let fact = 1;
//     for(let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     console.log(`Factorail of ${num} is: ${fact}`);
// }
// findFactorial(5);

// Using Arrow function
// const findFactorial = (num) => {
//     let fact = 1;
//     for(let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     console.log(`Factorial of ${num} is : ${fact}`);
// }
// findFactorial(6);

// 2_ Write a function to check prime number.
// const isPrime = (num) => {
//     if(num <= 1) {
//         console.log(`${num} is not a prime nnumber`);
//         return
//     } else {
//         for(let i = 1; i <= num; i++) {
//             if(num % i === 0) {
//                 console.log(`${num} is not a prime number`);
//                 return;
//             }
//         }
//     }
//     console.log(`${num} is a prime nnumber`);
// }
// isPrime(7);

// 3_ Write a function to reverse a string.
// const reverseString = (str) => {
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     console.log(`Reversed stringof ${str} is ${reversed}`);
// }
// reverseString("Vivek");

// 4_ Write a function to find maximum of three numbers.
// const findMax = (num1, num2, num3) => {
//     if(num1 > num2 && num1 > num2) {
//         console.log(`${num1} is maximum numbers`);
//     } else if(num2 > num1 && num2 > num3) {
//         console.log(`${num2} is maximum number`);
//     } else {
//         console.log(`${num3} is maximum number`);
//     }
// }
// findMax(10, 20, 13);

// 5_ Write a function to count vowels in string.
// const countVowels = (str) => {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         let ch = str[i].toLowerCase();
//         if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(`Vowels in string; ${countVowels("Vivek Gupta")}`);

// 6_ Write a function that converts Celsius to Fahrenheit.
// const celciusToFahrenheit = (celcius) => {
//     let fahrenheit = (celcius * 9/5) + 32;
//     return fahrenheit;
// }
// console.log(`Fahrenheit: ${celciusToFahrenheit(20)}`);

// 7_ Write a function to check palindrome.
// function checkPalindrome(str) {
//     let reverse = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         reverse += str[i];
//     }
//     (str === reverse) ? console.log(`${str} is a plindrome`) : console.log(`${str} is not a palidrome`);
// }
// checkPalindrome("vivek");

// 8_ Write a function to generate Fibonacci series.
// const  generateFibonacci = (num) => {
//     let a = 0, b = 1, next;
//     console.log(a);
//     if(num <= 0) {
//         console.log("Please enter a positive number");
//     }
//     if(num > 1) {
//         console.log(b);
//     }
//     for(let i = 3; i <= num; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }
// generateFibonacci(20);

// 9_ Write a function to return the sum of 1 to n.
// function returnSum(num) {
//     let sum = 0;
//     for(let i = 1; i <= num; i++) {
//         sum  += i;
//     }
//     return sum;
// }
// console.log(`Sum of 1 to ${15} is: ${returnSum(15)}`);

// // Create a Function that returns the concatenation of all strings in an array.
// const cncatenateStrings = () => {
//     let arr = ["Hello", " ", "World", "!"]
//     let result = "";
//     for(let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(cncatenateStrings());

// Lexical Scope -> A variable defined outside a function can be accesible inside another function defined after the variable declaration.
// function outerFunction() {
//     let x = 10;
//     let y = 20;
//     function innerFunction() {
//         console.log(`Sum of x and y: ${x + y}`);
//     }
//     innerFunction();
// }
// outerFunction();

// function outerFunction() {
//     function innerFunction() {
//         console.log(`Sum of num1 and num2: ${num1 + num2}`);
//     }
//     let num1 = 10, num2 = 20;
//     innerFunction();
// }
// outerFunction();

// Higher order function -> A function that takes another function as argument or returns a function is called higher order function.
// Example - 
// function greetMyName(func, name) {
//     console.log(`${func()} ${name}`);
// }

// const greet = function() {
//     console.log("Hello");
// }

// greetMyName(greet, "Vivek");
// // greetMyName(() => "Hello", "Vivek");








