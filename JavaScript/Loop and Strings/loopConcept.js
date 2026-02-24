
// There are different types of loops in JavaScript, but we will focus on the most common ones: for loop, while loop, and do-while loop.


// ======================================================================================================
// 🔹 For Loop
// Syntax: for (initialization; condition; increment/decrement) { // code to be executed }

// For loop is used when you know in advance how many times you want to execute a block of code. It consists of three parts: initialization, condition, and increment/decrement.

// // Print numbers from 1 to 10 using for loop.
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // Decrementing loop: Print numbers from 10 to 1.
// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// for(let i = 1; i <= 5; i++) {
//     console.log("Vivek Gupta");
// }

// ==============================================================================
// Break in Loop: Stop the loop when a certain condition is met ( or Iteration).
// ==============================================================================

// loop break example: Print numbers from 1 to 10, but stop when you reach 5.
// for(let i = 1; i <= 10; i++) {
//     if(i === 6) {
//         break;
//     } else {
//         console.log(i);
//     }
// }

// ============================================================================
// Continue in Loop: Skip the current iteration and continue with the next one.
// ============================================================================

// loop continue example: Print numbers from 1 to 10, but skip 5.
// for(let i = 1; i <= 10; i++) {
//     if(i === 5) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// ==================================================================================================

// ==================================================================================================

// 🔹 While Loop
// Syntax:
// Initialization 
// while(condition) 
// { 
// code to be executed 
// increment/decrement
// }

// While loop is used when you don't know in advance how many times you want to execute a block of code. It continues executing the block of code as long as the condition is true.

// // Print numbers from 1 to 10 using while loop.
// let i = 1;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

// // Decrementing while loop: Print numbers from 10 to 1.
// let i = 10;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

// Break and Continue in While Loop
// // Break example: Print numbers from 1 to 10, but stop when you reach 5.
// let i = 1;
// while(i <= 10) {
//     if(i == 5) {
//         break;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// // Continue example: Print numbers from 1 to 10, but skip 5.
// let i = 1;
// while(i <= 10) {
//     if(i === 5) {
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// 🔹 Do While loop 
/*
Initialization
do {
    Loop body statements
    Updation // i++
} while(condition)
*/

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 10)

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while(i >= 1)



// ==================================================================================================

// ==================================================================================================

// 🔹 Level 1: Basic Loop Practice (for loop) Questions

// Print numbers from 1 to 10.
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print numbers from 10 to 1 (reverse).
// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Print all even numbers from 1 to 20.
// for(let i = 1; i <= 30; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// Print all odd numbers from 1 to 20.
// for(let i = 1; i <= 20; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

// Print the multiplication table of 5.
// for(let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${i*5}`);
// }

// Print the square of numbers from 1 to 10.
// for(let i = 1; i <= 10; i++) {
//     console.log(`Number ${i} = Square ${i*i}`);
// }

// Print numbers from 1 to 50 that are divisible by 3.
// for(let i = 1; i <= 50; i++) {
//     if(i % 3 === 0) {
//         console.log(i);
//     }
// }

// 🔹 Level 2: Using while loop

// Print numbers from 1 to 20 using while.
// let i = 1;
// while(i <= 20) {
//     console.log(i);
//     i++;
// }

// Print numbers until the value becomes 100 (increase by 10 each time).
// let i = 0;
// while(i <= 100) {
//     console.log(i);
//     i += 10;
// }

// Print all numbers from 1 to 30 except multiples of 4.
// let i = 1;
// while(i <= 30) {
//     if(i % 4 !== 0) {
//         console.log(i);
//     }
//     i++;
// }

// let i = 1;
// while(i <= 30) {
//     if(i % 4 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }


// Print numbers between 50 and 70.
// let i = 50;
// while(i <= 70) {
//     console.log(i);
//     i++;
// }


// 🔹 Level 3: Loop + Conditions

// Count how many numbers between 1 and 50 are even.
// let even = 0, odd = 0;
// for(let i = 1; i <= 50; i++) {
//     if(i % 2 === 0) {
//         even++;
//     } else if(i % 2 !== 0) {
//         odd++;
//     }
// }
// console.log(`Total even number is: ${even}`);
// console.log(`Total odd number is: ${odd}`);

// Find the sum of numbers from 1 to 100.
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(`Sum of number from 1 to 100 are: ${sum}`);

// Find the factorial of a number.
// let num = 6
// let factorial = 1;
// for(let i = 1; i <= num; i++) {
//     factorial *= i;
// }
// console.log(`Factorial of ${num} is ${factorial}`);

// Using function (Better Practice)
// function findFactoria(n) {
//     let fact = 1;

//     for(let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(`Factoral of ${5} is ${findFactoria(5)}`);


// Reverse a number (Example: 123 → 321).
// let num = 1234;
// let reversed = 0;
// while(num > 0) {
//     let digit = num % 10; // get last digit
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// } 
// console.log("Reversed: " + reversed);

// Check if a number is prime.
// let num = 20;
// let isPrime = true;
// if(num <= 1) {
//     isPrime = false;
// } else {
//     for(let i = 2; i < num; i++){
//         if(num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime ? "Prime": "Not Prime");

// Print all prime numbers between 1 and 50.
// for(let num = 1; num <= 50; num++) {
//     let isPrime = true;

//     for(let i = 2; i < num; i++) {
//         if(num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime) {
//         console.log(num);
//     }
// }


// 🔹 Level 4: Loop with Strings

// Count the number of vowels in a string.
// let str = "Vivek Gupta";
// let count = 0;
// for(let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();
//     if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         count++;
//     }
// }
// console.log("Total vowels: ", count);

// Reverse a string.
// let str = "Vivek Gupta";
// let reverse = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }
// console.log(reverse);

// Count how many times a letter appears in a word.
// let str = "vivek gupta";
// let letter = 'v';
// let count = 0;
// for(let i = 0; i <= str.length; i++){
//     if(str[i] === letter){
//         count++;
//     }
// }
// console.log("letter appear: ", count);


// Check if a string is a palindrome.
let str = "vivek";
let reverse = "";
for(let i = str.length - 1; i >= 0; i--){
    reverse += str[i];
}
let ans = (str === reverse) ? "Palindrome" : "Not Palindrome";
console.log(ans);


// 🔹 Level 5: Nested Loop Practice

// Print this pattern:

// *
// **
// ***
// ****
// *****

// Print this pattern:

// *****
// ****
// ***
// **
// *

// Print a number pattern:

// 1
// 12
// 123
// 1234
// 12345
// 🔥 Mini Challenges

// Find the largest number in an array.

// Count how many positive and negative numbers are in an array.

// Remove duplicate numbers from an array.

// Print Fibonacci series up to 10 terms.





