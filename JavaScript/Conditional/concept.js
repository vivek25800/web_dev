//Conditional statements in JavaScript:

// If-else statement

// // Qs. A "good string" is string that starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.
// let str = "amfh";
// if (str[0] === 'a' && str.length > 3 ) {
//     console.log("Good string");
// } else {
//     console.log("Not good string");
// }

// let num = 12;
// if ((num%3 === 0) && ((num+1 === 14) || (num-1 === 12))) {
//     console.log('Right answer');
// } else {
//     console.log("Wrong answer");
// }


// else if statement
// let size = "L";
// if(size === "XL") {
//     console.log("Price is 250");
// } else if(size === "L") {
//     console.log("Price is 200");
// } else if(size === "M") {
//     console.log("Price is 150");
// } else {
//     console.log("Price is 100");
// }


// Switch statement
// let color = "green";
// switch(color) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken light");
// }



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =========================================================



// Level 1: Very Basic Questions (if / else)

// 1- Check if a number is positive or negative.
// 2- Check if a number is even or odd.
// 3- Check if a person is eligible to vote (18+).
// 4- Compare two numbers and print the greater number.
// 5- Check if a number is divisible by 5.
// 6- Check if a year is a leap year (basic logic version).
// 7- Check if a character is a vowel or consonant.
// 8- Check if a number is greater than 100.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ========================================================



// 1 =
// let num = -10;
// if(num < 0) {
//     console.log("Negative number");
// } else if(num == 0) {
//     console.log("Zero Number");
// } else  {
//     console.log("Psotive number");
// }

// 2 = 
// let num = prompt("Enter a number");
// if(num % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// 3 = 
// let age = prompt("Enter your age: ");
// if(age >= 18) {
//     console.log("You are eliggible for vote");
// } else {
//     console.log("You are not eligible for vote");
// }

// 4 = 
// let num1 = prompt("Enter first number: ");
// let num2 = prompt("Enter second number: ");
// if(num1 > num2) {
//     console.log(num1 + " is greater than " + num2);
// } else if(num1 < num2) {
//     console.log(num2 + " is greater than " + num1);
// } else {
//     console.log("Both numbers are equal");
// }

// 5 =
// let num = prompt("Enter a number: ");
// if(num % 5 === 0) {
//     console.log("this number is divisible by 5");
// } else {
//     console.log("this number is not divisible by 5");
// }

// 6 =
// let year = prompt("Enter ayear: ");
// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year");
// } else {
//     console.log(year + " is not a leap year");
// }

// 7 =
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let char = prompt("Enter acharacter: ").toLowerCase();
// if(vowels.includes(char)) {
//     console.log(char + " is a vowel");
// } else {
//     console.log(char + " is a consonant");
// }

// 8 = 
// let num = 100;
// // let num = prompt("Enter a number: ");
// if(num > 100) {
//     console.log(num + " is greater than 100");
// } else if(num === 100) {
//     console.log(num + " is equal to 100");
// } else {
//     console.log(num + " is not greater than 100");
// }




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =========================================================



// Level 2: Using else if

// Create a grade system:
// 90+ → A
// 80–89 → B
// 70–79 → C
// Below 70 → Fail

// let marks = 96;
// if(marks >= 90) {
//     console.log("Grade A");
// } else if(marks >= 80 && marks <= 89) {
//     console.log("Gade B");
// } else if(marks >= 70 && marks <= 79) {
//     console.log("Grade C");
// } else { 
//     console.log("Fail");
// }


// Check if a number is:
// Positive
// Negative
// Zero

// let num = -10;
// if(num === 0) {
//     console.log("Zero number");
// } else if(num < 0) {
//     console.log("Negative number");
// } else {
//     console.log("Psitive number");
// }


// Build a simple login system:
// If username & password correct → Login successful
// Else → Invalid credentials

const username = "admin";
const password = "admin123";
if(username === "admin" && password === "admin123" ) {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// Check age group:
// 0–12 → Child
// 13–19 → Teen
// 20–59 → Adult
// 60+ → Senior

// 🔹 Level 3: Using Logical Operators (&&, ||)

// Check if a number is between 10 and 50.

// Check if a person can get a loan:
// Age > 21
// Salary > 25,000

// Check if a student passed:
// Marks ≥ 35 in all subjects

// Check if a number is divisible by 3 and 5 both.

// 🔹 Level 4: Using switch

// Create a calculator:
// +, -, *, /

// Print day of the week based on number (1–7).

// Create a traffic light system:
// Red → Stop
// Yellow → Ready
// Green → Go

// 🔹 Level 5: Ternary Operator Practice

// Check if number is even or odd using ternary.
// Check if age ≥ 18 → "Adult" else "Minor".
// Find greater between two numbers using ternary.
// Check if temperature > 30 → "Hot" else "Normal".

// 🔹 Small Mini Challenges (Fun Practice)

// Check if a number is multiple of 7 or 11.
// Check if a password length is at least 8 characters.
// Check if a number is a three-digit number.
// Create a simple discount system:
// If amount > 1000 → 10% discount
// Else → No discount



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==========================================================









































