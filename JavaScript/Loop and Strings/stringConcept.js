// Strings are useful for holding data that can be represented in text form
// Syntax
// new String(thing)
// String(thing)

// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;
// console.log(string1);

// Multiple line values
// let name = `Vivek
// Kumar
// Gupta`;
// console.log(name);

// Another way to initialize string
// let firstName = new String("Vivek Gupta");
// console.log(firstName);

// Strings methods
// #1 Concatination
// #2 Substring
// #3 Length
// #4 Uppercase
// #5 Lowercase
// #6 CharAt
// #7 IndexOf
// #8 Includes
// #9 slice
// #10 replace
// #11 Template Literals (Very Important)
// #12 Split

// Concatinate of two strings
// let op1 = "Hello";
// let op2 = "Vivek";
// let ans = op1 + op2;
// // console.log(ans);
// let finalAns = `${op1}  ${op2}`;
// console.log(finalAns);

// Substring of a string
// let text = "Hello vivek";
// console.log(text.substring(3)); // substring from 3rd index
// console.log(text.substring(0)); // substring from  0th index - Hello vivek 
// console.log(text.substring(3, text.length));

// Length of string
// let op1 = "Hello Vivek";
// console.log(op1.length);

// Uppercase and Lowercase
// let op1 = "Hello Vivek";
// let op2 = "Hello Pitter";
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());

// Access Character
// let word = "Javascript";
// console.log(word[0]);
// console.log(word[5]);
// // Another way
// console.log(word.charAt(0));
// console.log(word.charAt(6));

// IndexOf in JS indexOf()
// let text = "I love Javascript";
// console.log(text.indexOf("Java")); // 7
// console.log(text.indexOf(" ")); // 1

// Includes in JS includes()
// let text = "Javascript is fun";
// console.log(text.includes("script")); // true
// console.log(text.includes(" ")); // true

// Slice in JS - slice()
// let text = "Javascript is best";
// console.log(text.slice(0, 4)); // Java
// console.log(text.slice(4, 8)); // scri
// second index to last index
// console.log(text.slice(2, text.length));

// Replace in JS - replace()
// let text = "I like Java";
// console.log(text.replace("Java", "Javascript")); // Java -> Javascript
// console.log(text.replace("like", "love")); // like -> love

// Template literals in JS
// let firstName = "Vivek";
// let age = 25;
// console.log(`My name is ${firstName} and I am ${age} year old.`);

// Split in JS - split()
let str = "Hello Vivek Gupta";
let words = str.split(" ");
console.log(words); // ['Hello', 'Vivek', 'Gupta']


// 🔥 Practice Questions for You

// 1. Count number of characters in a string.
// 2. Reverse a string.
// 3. Check if a string is palindrome.
// 4. Count vowels in a string.
// 5. Count how many times a letter appears.
// 6. Convert first letter to uppercase.
// 7. Remove spaces from a string.
// 8. Find longest word in a sentence.

// 1. Count number of characters in a string.
// let str = "Vivek Gupta";
// console.log(str.length);

// 2. Reverse a string.
// let str = "Vivek Gupta";
// let reverse = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }
// console.log(reverse);

// 3. Check if a string is palindrome.
// let str = "madam";
// let reverse = "";
// for(let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }
// let ans = (str === reverse) ? "Palindrome" : "Not Palindrome";
// console.log(ans);

// 4. Count vowels in a string.
// let str = "Vivek Gupta";
// let count = 0;
// for(let i = 0; i < str.length; i++) {
//     let ch = str[i].toLowerCase();
//     if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ) {
//         count++;
//     }
// }
// console.log("Vowels: ", count);

// 5. Count how many times a letter appears.
// let str = "Vivek Gupta";
// let letter = 'q';
// let count = 0;
// for(let i = 0; i <= str.length; i++) {
//     if(str[i] === letter) {
//         count++;
//     }
// }
// console.log("Letter appear: ", count);

// 6. Convert first letter to uppercase.
// let str = "vivek gupta";
// let newStr = "";
// for(let i = 0; i <= str.length; i++) {
//     if(str[0] === str[0].toLowerCase()){
//         newStr = str[0].toUpperCase();
//     } else if(str[i] === " ") {
//         newStr = str[i+1].toUpperCase();
//     }
// }
// console.log(newStr)

// let str = "vivek gupta";
// let result = str[0].toUpperCase() + str.slice(1);
// console.log(result);

// 7. Remove spaces from a string.
// let str = "Hello Vivek";
// let result = "";
// for(let i = 0; i < str.length; i++) {
//     if(str[i] !== " ") {
//         result += str[i];
//     }
// }
// console.log(result);

// 8. Find longest word in a sentence.
// let str = "I love Javascript";
// let word = str.split(" ");
// let longest = "";
// for(let i = 0; i < word.length; i++) {
//     if(word[i].length > longest.length) {
//         longest = word[i];
//     }
// }
// console.log("Longest word: ", longest);


// 🔹 Project: Simple Password Strength Checker

// let password = "Vivekhgjg";
// let hasUpper = false;
// let hasLower = false;
// let hasNumber = false;
// if(password.length >= 8) {
//     for(let i = 0; i <= password.length; i++) {
//         let ch = password[i];
//         if(ch >= 'A' && ch <= 'Z'){
//             hasUpper = true;
//         } else if(ch >= 'a' && ch <= 'z') {
//             hasLower = true;
//         } else if(ch >= 0 && ch <= 9) {
//             hasNumber = true;
//         }
//     }
//     if(hasLower && hasUpper && hasNumber) {
//         console.log("Strong Password");
//     } else {
//         console.log("Weak Password");
//     }
// } else {
//     console.log("Password must have atleast 8 character!");
// }

// 🔥 Build a mini text analyzer project





