// console.log("Hello JavaScript")
// console.log("Hii Vivek this side!")

// let pencilPrice = 10;
// let erasorPrice = 5;

// let output = "The total price is: " + (pencilPrice + erasorPrice) + " Rs.";
// let output = `The total price is: ${pencilPrice+erasorPrice} Rs.`;
// console.log(`The total price is: ${pencilPrice+erasorPrice} Rs.`);

// console.log("Before if statement");
// let age = 20;
// if(age >= 18) {
//     console.log("You can vote!");
//     console.log("You can be a drive");
// }

// console.log("After if statement");
// let firstName = "Vivek"
// if(firstName == "Vivek"){
//     console.log(`Welcome ${firstName}`);
// }

// Create traffic light system that shows what to do based on the color
// let color = "red";
// if(color === "red"){
//     console.log("Stop! light color is red");
// } else if(color === "yellow"){
//     console.log("Slow Down! light color is yellow");
// } else if(color === "green"){
//     console.log("Go. light color is green");
// }

// Else-if condition
// let age = 15;
// if(age >= 18){
//     console.log("You can vote.")
// } else if(age > 18){
//     console.log("You cannot vote")
// } else if(age <= 18){
//     console.log("You cannot vote2.")
// }

// Grading system based on the marks
// let marks = 28;
// if(marks > 80){
//     console.log("Grade A+");
// } else if(marks >= 60 && marks <= 80){
//     console.log("Grade A");
// } else if(marks >= 33 && marks <= 60){
//     console.log("Grade B");
// } else if(marks < 33){
//     console.log("Fail");
// }

// Create a system to create to calculate popcorn prices based on the size customer asked for:
// let size = 'S';
// if(size === 'XL'){
//     console.log("Price Rs 250");
// } else if(size === 'L'){
//     console.log("Price Rs 200");
// } else if(size === 'M'){
//     console.log("Price Rs 100");
// } else {
//     console.log("Price Rs 50");
// }

// Nested if-else condition
// let marks = 45;
// if(marks >= 33){
//     console.log("Pass. ")
//     if(marks >= 80){
//         console.log("Grade O");
//     } else {
//         console.log("Grade A");
//     }
// } else {
//     console.log("better luck next time!");
// }

// Logical Operators
// let marks = 90;
// AND operator
// if(marks >= 33 && marks <= 80){
//     console.log("Pass");
//     console.log("A+");
// }

// OR operator
// if(marks >= 33 || marks >= 80){
//     console.log("Pass");
//     console.log("A+");
// }

// NOT operator
// if(!(marks < 33)){
//     console.log("Pass");
//     console.log("A+");
// }

// Qs. A "good string" is string that starts with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.
// let str = "am";
// if(str[0] === 'a' && str.length > 3){
//     console.log("Good string");
// } else {
//     console.log("Not good string");
// }

// Qs. Predict the output of following code.
// let num = 12;
// if((num%3 === 0) && ((num+1 === 15) || (num-1 === 11))){
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }

// Truthy and Falsy in JS
// if(""){
//     console.log("it has true value");
// } else {
//     console.log("it has false value");
// }

// let string = "";
// if(string){
//     console.log("string is not empty");
// } else {
//     console.log("string is empty");
// }

// let num = 10;
// if(num){
//     console.log("num is not equal to 0");
// } else {
//     console.log("num is equal to 0");
// }

// Switch statement
// let color = "blue";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Broken light");
// }

// Use switch statement to print the day of the week using number variable "day" with values 1 and 7.
// let day = 10;
// switch(day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid enter");
// }

// Alert and Prompt in JS
// alert("Somthing is wrong");

// console.log("this is the log");
// console.error("this is a error message");
// console.warn("this is a warning msg");

// prompt("enter your name");
// let firstName = prompt("enter your name");
// console.log(firstName);

// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// // console.log("Welcome ", firstName, lastName, "!");

// let msg = "Welcome " + firstName +" "+ lastName + "!";
// alert(msg);

// Qs.
// let num = 89;
// if(num%10 === 0){
//     console.log("good");
// } else {
//     console.log("bad");
// }

// Qs.
// let name = prompt("enter your name");
// let age = prompt("enter your age");

// let msg = `${name} is ${age} year old`;
// alert(msg);

// Qs.
// let quarter = 4;
// switch(quarter){
//     case 1:
//         console.log("january, february, march");
//         break;
//     case 2:
//         console.log("april, may, jun");
//         break;
//     case 3:
//         console.log("july, august, september");
//         break;
//     case 4:
//         console.log("october, november, december");
//         break;
//     default:
//         console.log("invalid enter");
// }

// Qs.
// let str = "ajtks";
// if((str[0] === 'A' || str[0] === 'a') && (str.length > 5)){
//     console.log("golden word");
// } else {
//     console.log("not a golden word");
// }

// Qs.
// function findLargest(num1, num2, num3){
//     if(num1 >= num2 && num1>= num3){
//         return num1;
//     } else if(num2 >= num1 && num2 >= num3){
//         return num2;
//     } else {
//         return num3;
//     }
// }
// let largestNum = findLargest(10, 9, 12);
// console.log(`Largest number is ${largestNum}`);

// const num1 = parseFloat(prompt("Enter first number"));
// const num2 = parseFloat(prompt("enter second number"));
// const num3 = parseFloat(prompt("enter three number"));
// let largest;
// if(num1 >= num2 && num1 >= num3){
//     largest = num1; 
// } else if(num2 >= num1 && num2 >= num3){
//     largest = num2;
// } else {
//     largest = num3;
// }
// console.log("larget number is " + largest);

// Qs.
// let num1 = 5671;
// let num2 = 8948;
// let result1 = num1 % 10;
// let result2 = num2 % 10;
// if(result1 == result2){
//     console.log(`${num1} and ${num2} have same last digit.`);
// } else {
//     console.log(`${num1} and ${num2} have different last digit.`);
// }

// const num1 = prompt("enter first number");
// const num2 = prompt("enter second number");
// const num3 = prompt("enter third number");

// const result1 = num1 % 10;
// const result2 = num2 % 10;
// const result3 = num3 % 10;

// if(result1 === result2 && result1 === result3){
//     console.log(`${num1}, ${num2} and ${num3} have same last digit`);
// } else {
//     console.log(`${num1}, ${num2} and ${num3} have different last digit`);
// }

// Strning Methods in JS
// Trim methods
// let msg = "    vivek    ";
// msg.trim()
// console.log(msg);

// let password = prompt("Set your password");
// console.log(password.trim());

// Uppercase and Lowercase
// let str = "Vivek Kumar Gupta"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// String methods with arguments
// let str1 = "ILoveCoding";
// str1.indexOf("Love");
// str1.indexOf("I");
// str1.indexOf("Cod");

// Method Chaining
// let msg = "   vivek   ";
// let newMsg = msg.trim();
// console.log(newMsg);
// newMsg = newMsg.toUpperCase();
// console.log(newMsg);
// using chaining method
// newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// Replace in JS
// let msg = "ILoveCoding";
// let str = msg.replace("Love", "Do");
// console.log(str);

// Repeat in JS
// let str = "Mango";
// let newStr = str.repeat(6);
// console.log(newStr)


// // Practice Qs.

// // trim & uppercase
// let msg = "hello!     ";
// let newMsg = msg.toUpperCase().trim();
// console.log(newMsg);

// let str = "ApnaCollege";
// let str1 = str.slice(4,9);
// let str2 = str.indexOf("na");
// let str3 = str.replace("Apna","Our");
// console.log(str1);
// console.log(str2);
// console.log(str3);