

//       =========================================
//       ======== Functions in JavaScript ========
//       =========================================

// function hello() {
//     console.log("Hello! Welcome to the Narnia group.");
// }

// hello();
// hello();
// hello();
 
// function studentDetail(){
//     const name = prompt("enter your name.");
//     const rollNo = prompt("enter your roll no.");
//     const address = prompt("enter your address");

//     console.log(`you name is: ${name}`);
//     console.log(`you roll no is: ${rollNo}`);
//     console.log(`you address is: ${address}`);
// }

// studentDetail();

// function factorial() {
//     let num = prompt("enter a number!");
//     let fact = 1;

//     for(let i=1; i<=num; i++){
//         fact *= i;
//     }

//     console.log(`the factorial is: ${fact}`);
// }

// factorial();

// Create a function that prints a poem.
// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("How i wonder what you are");
// }                 
// printPoem();


// Create a function to roll a dice & always display the value of dice (1 to 6).
// function rollDice() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`after rolling the dice no is: ${roll}`);
// }
// rollDice();


// ======== Functions with Arguments ========
// ==========================================
// Synatx -> 
// function funcName(arg1, arg2, ....){
//    - do something
// }

// function printName(name1, name2){
//     console.log(name1, name2);
// }
// // printName("vivek","rajat");

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("vivek"); // vivek's age is undefined.

// function sum(number) {
//     let sum = 0;
//     for(let i=1; i<=number; i++){
//         sum += i;
//     }
    
//     console.log(sum);
// }

// const number = prompt("enter a number!");
// sum(number);


//Create a Function that gives us the average of 3 numbers.
// function findAverage(num1, num2, num3){
//     let avg = (num1 + num2 + num3) / 3;
//     console.log(`the average is: ${avg}`);
// }
// findAverage(89, 56, 45);

//Create a Function that prints the multiplication table of a number.
// function printTable(num) {
//     for(let i=1; i<=10; i++){
//         console.log(num*i);
//     }
// }
// printTable(12);


// ======= Return Keyword =======
// ==============================

// function sum(num1, num2) {
//     console.log("hello1");
//     return num1 + num2;
//     //console.log("hello2"); // after return keyword any statement's are not executable.
// }
// let addition = sum(45, 89);
// console.log(`the sum is: ${addition}`);

// console.log(sum(sum(23, 10), 89));

// function isAdult(age){
//     if(age >= 18) {
//         return "adult";
//     } else {
//         return "not adult";
//     }
// }
// console.log(isAdult(25));

// Create a Functions that returns the sum of numbers form 1 to n.
// function sumOf1toN(num) {
//     let sum = 0;
//     for(let i=1; i<=num; i++){
//         sum += i;
//     }

//     return sum;
// }
// console.log(`the sum is: ${sumOf1toN(10)}`);


// Create a Function that returns the concatenation of all strings in an array.
// let str = ["hi", "hello", "bye", "!"];
// function concatStr(str){
//     let result = "";
    
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }

//     return result;
// }
// console.log(concatStr(str));


// ======== Scope in JavaScript ========
// =====================================

// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// => Function
// => Block
// => Lexical

// Function Scope
// -> Variables defined inside a function are not accessible (visible) from outside the function.
// Example ->
// let sum = 54; // Global Scope

// function calSum(a, b){
//     let sum = a+b; // Function Scope
//     console.log(sum);
// }

// calSum(5, 10);


// // Block Scope
// // -> Varibles declared inside a {} block cannot be accessed from outside the block.
// // Example ->

// for(let i=1; i<=5; i++){
//     console.log(i); // Block Scope
// }
// // console.log(i); // throw error: i is not defined

// let age = 25;
// if(age >= 18){
//     let str = "adult"; // Block Scope
// }
// console.log(str);


// Lexical Scope
// -> A variable defined outside a function can be accessible inside another function defined after the variable declaration.
// -> The opposite is NOT true.
// Example - 

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc();

// function outerFunc(){
//     function innerFunc(){
//         console.log(x);  // this happen by Hoisting concept.
//         console.log(y);
//     }

//     let x = 5;
//     let y = 6;

//     innerFunc();
// }
// outerFunc();

// Practice Qs.
// What will be the output
// let greet = "hello";   // Global Scope

// function changeGreet(){
//     let greet = "namaste";  // Function Scope
//     console.log(greet);

//     function innerFunc(){
//         console.log(greet);  // Lexical Scope
//     }
//     innerFunc();
// }
// console.log(greet);
// changeGreet();  


// ======= Function Expressions =========
// ======================================
// const varaible = function(arg1, arg2,...){
//     do or return something
// }

// const sum = function(a, b){
//     return a + b;
// }
// console.log(sum(2, 3));

// let hello = function(){
//     console.log("hello!");
// }
// hello();

// hello = function(){  // Change the value
//     console.log("Namaste!");
// }
// hello();


// ====== Higher Order Functions =======
// =====================================
//Afunctin that does one or both
// -> takes one or multiple function as arguments.

// function multipleGreet(func, n){  // Higher Order function 
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello!");
// }

// multipleGreet(greet, 4);  // One way
// multipleGreet(function() { console.log("namaste!") }, 5);  // Another way

// -> returns a function

// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n) {
//             if(n%2 !== 0){
//                 console.log("Odd number!");
//             } else {
//                 console.log("Not odd number!");
//             }
//         }
//     } else if(request == "even"){
//         return function(n){
//             if(n%2 === 0){
//                 console.log("Even number!");
//             } else {
//                 console.log("Not even number!");
//             }
//         }
//     } else {
//         console.log("Wrong input!");
//     }
// }

// let num = prompt("enter your choice!");
// let func = oddEvenTest(num);

// let odd = function(n){
//     console.log(!(n%2 == 0));
// }
// odd(11);

// let even = function(n){
//     console.log(n%2 == 0);
// }
// even(11);


// ======= Methods ========
// ========================
// Actions that can be performed on an object

// const calculator = {
//     num: 55,
//     add: function(a, b){
//         return a + b;
//     },
//     sub: function(a, b){
//         return a - b;
//     },
//     mul: function(a, b){
//         return a * b;
//     }
// };
// console.log(calculator.num);  // print 55
// console.log(calculator.add(4, 5));  // print 9
// console.log(calculator.sub(10, 8));  // print 2
// console.log(calculator.mul(12, 10));  // print 120

// // Shorthand Method
// const calculator2 = {
//     add(a, b){
//         return a + b;
//     },
//     sub(a, b){
//         return a - b;
//     },
//     mul(a, b){
//         return a * b;
//     }
// };
// console.log(calculator2.add(44, 23)); // print 67
// console.log(calculator2.sub(44, 20)); // print 24
// console.log(calculator2.mul(10, 20)); // print 200


// ========= Practice Questions =========
// ======================================

// Q1) Write a JS function that returns array elemets larger than a number
// let arr = [10,56,23,78,89];
// let number = 55;

// function largeElements(arr, number){
//     let largeArr = [];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > number){
//             largeArr.push(arr[i]);
//         }
//     }
//     console.log(largeArr);
// } 

// largeElements(arr, number);

// Q2) Write a Js function to extract unique characters from a string.
// Ex - str = "abcdabcdefgggh"
//      ans = "abcdefgh"

// let str1 = "abcdabcdefgggh";

// function extractString(str){
//     let ans = "";

//     for(let i=0; i<str1.length; i++){
//        let currChar = str[i];
//        if(ans.indexOf(currChar) == -1){
//         ans += currChar;
//        }
//     }

//     return ans;
// }

// console.log(`The unique characters is: ${extractString(str1)}`);

// // Q3) Return the longest country name as output.
// let country = ["Australlia", "Germany", "United States of America", "India"];

// function getLargeName(country) {
//     let largeStr = "";

//     for(let i=0; i<country.length; i++){
//        if(country[i].length > largeStr.length){
//         largeStr = country[i];
//        } 
//     }

//     return largeStr;
// }

// console.log(`The longest country size is: ${getLargeName(country)}`);

// // Q4) Write the Js function to count the number of vowels in a String argument.
// let str = "oppenheimeraeiou";
// let vowels = "aeiou";

// function countVowels(str, vowels){
//     let count = 0;

//     for(let i=0; i<str.length; i++){
//         for(let k=0; k<vowels.length; k++){
//             if(str[i] === vowels[k]){
//                 count++;
//             }
//         }
//     }

//     return count;
// }

// console.log(`The count of vowels is: ${countVowels(str, vowels)}`);

// // Q5) Write a Js function to generate a random number within a range (start, end).
// let start  = 20, end = 30;

// function randomNumber(start, end){
//     let diff = end - start;

//     return Math.floor((Math.random() * diff) + start);
// }

// console.log(`the random number b/w ${start} from ${end} is: ${randomNumber(start, end)}`);


// ========= this keyword in JS =========
// ======================================
// Example - 
// const student = {
//     name: "vivek",
//     age: 24,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getValue() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg);
//         console.log(`${this.name} is ${this.age} years old.`)
//     }
// };

// student.getValue();
// console.log(student["age"]);

// function getValue() {
//     console.log(this);
// }
// getValue();


// ========= try and catch =========
// =================================
// The try statement allows you to define a block of code to be tested    for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try bock.

// console.log("hello");
// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch(err) {
//     console.log("caught an error: a is not defined");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// ======== Miscelleneous Topics ========
// ======================================

// #1) Arrow Functions
// const func = (arg1, arg2...) => { // function definition }
// Example ->
// const sum = (a, b, c) => {
//     console.log(a + b + c);
// }
// sum(10, 23, 20);

// const cube = n => {  // single parameter without paranthesis
//     console.log(n * n * n);
// }
// cube(5);

// const hello = () => {  // empty arrow function without any parameter
//     console.log("Hello World!");
// }
// hello();

// Trick question
// let a=10;
// let b=10;
// let c=1;
// if(a==b==c) {
//     console.log("hello");
// } else {
//     console.log("welocome");
// }

// Implicit return (Arrow function)
// const func = (arg1, arg2...) => ( value )
// Example - 
// const mul = (a, b) => (
//     a * b
// )    
// console.log(mul(4, 6));

// // Addition
// const add = (a, b, c) => ( a + b + c );
// console.log(add(10, 20, 30));

// // Subtraction
// const sub = (a, b) => ( a - b);
// console.log(sub(20, 10));


// == Set Timeout function ==
// Syntax -> setTimeout ( function, timeout );
// Example -
// console.log("Hii there");

// setTimeout( () => {
//     console.log("Narnia Group");
// }, 3000);

// console.log("Welcome to");


// let num = prompt("print birthday wishes many times!")
// setTimeout( () => {
//     for(let i=1; i<=num; i++){
//         console.log("Happy Birthday!");
//     }
// }, 3000);


// == Set Interval function ==
// Syntax -> let id = setInterval(function, timeout) // execution will continous till infinite
//           clearInterval(id) // execution will stop
// Example ->
// let id = setInterval( () => {
//     console.log("Hello World");
// }, 2000);

// console.log(1);  // print id is 1

// clearInterval(id); // it will stop the execution 

// let id2 = setInterval( () => {
//     for(let i=1; i<=10; i++){
//         console.log("Hello World")
//     }
// }, 3000);
// console.log(id2);  // print id2 is 2

// clearInterval(id2);  // it will stop the execution


// == this keyword Arrow function ==
// for normal function -> this keyword object will be the same object (obj name - student, getInfo)
// for arrow function -> this keyword object will be the parent'object which is window (obj name-> window)
// Example ->

// const student = {
//     name: "vivek",
//     marks: 95,
//     prop: this,  // Global Scope
//     getName: function() {
//         console.log(this);  
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);  // parent's scope -> window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout( () => { // yha par arrow function ke liye uska 'this' uske parent ka hai jo normal function hai eska parent
//             console.log(this); // student object
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout( function() { // ab yha pe normal function ka 'this' jisne usko call lagayi hai, to yha par seTimeout ne function ko call lagayi hai jiska this window hota hai esliye yha par window print ho rha hai.
//             console.log(this); // window object
//         }, 2000);
//     }
// }
// console.log(student.getName());
// console.log(student.getMarks());
// console.log(student.getInfo1());
// console.log(student.getInfo2());


// Practice Questions
// Q1) Write an arrow function that returns the square of a number 'n'.
// const square = (n) => (n*n);
// console.log(square(6));

// // Q2) Write a function that prints "Hello World" 5 times at intervals of 2sec each.
// let id = setInterval( () => {
//     console.log("Hello World!");
// }, 2000);

// setTimeout( () => {
//     clearInterval(id)
//     console.log("clear interval ran");
// }, 10000); // 10sec / 2sec => 5sec


// ==== Practice Questions ====
// Q1) Write an arrow function named arrayAverage that accepts an array of numbers and returns
//     the average of those numbers.
// let arr = [10,20,30,40,50,60,70];
// const getAvg = (arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg;
// };
// console.log(`the average is: ${getAvg(arr)}`);

// // Q2) Write an arrow function named isEven() that takes an single number as argument and returns if it is even or not.
// let num = prompt("enter a number!");
// const isEven = () => {
//     if(num%2 === 0){
//         console.log("Even number");
//     } else {
//         console.log("Odd number");
//     }
// }
// console.log(isEven());

// Q3) What will be output of folloeing code:
// const object = {
//     message: "Hello World!",
//     logMessage() {
//         console.log(this.message);
//     }
// };
// console.log(setTimeout(object.logMessage, 1000));

// Q4) What is the output of the following code:
// let length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// }
// object.method(callback, 1, 2);




