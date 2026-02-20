

// Primitive datatypes:

// // Number
// let num = 10;
// console.log(num);
// console.log(typeof num);

// // String
// let str = "Hello Vivek";
// console.log(str);
// console.log(typeof str);

// // Boolean 
// let isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

// // Null
// let nullValue = null;
// console.log(nullValue);
// console.log(typeof nullValue); // null is considered as an object in JavaScript, which is a known quirk of the language.

// // undefined
// let a;
// console.log(a);
// console.log(typeof a);




// Non primitive datatypes:

// Object
// Array
// Function




// Type conversion in Javascript:

// let result = "5" + 10; // This will result in "510" because the + operator concatenates the string "5" with the number 10, converting the number to a string in the process.
// result = "5" - 2; // This will result in -5 because the - operator converts the string "5" to a number before performing the subtraction.
// console.log(result);
// console.log(typeof result);

// If you want to explicitly convert the result to a number, you can use the Number() function:
// result = null;
// result = Number(result);
// console.log(result);
// console.log(typeof result);

// // If you want to explicitly convert the result to a string, you can use the String() function:
// result = 5 + 10; // This will result in 15 because the + operator adds the two numbers together.
// result = String(result);
// console.log(result);
// console.log(typeof result);

// result = -10.004;
// result = parseInt(result); // This will result in 10 because parseInt() converts the number to an integer by removing the decimal part.
// console.log(result);
// console.log(typeof result); 



// Operators in JavaScript:

// // Arithmetic operators: +, -, *, /, %, ++, --
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 % 5);
// console.log(10 ** 5);

// Increament and Decrement operators:
// let num = 10;

// // Postfix increment operators:
// console.log(num++);
// console.log(num);
// // Prefix increment operators:
// console.log(++num);
// console.log(num);
// // Postfix decrement operators:
// console.log(num--);
// console.log(num);   
// // Prefix decrement operators:
// console.log(--num);
// console.log(num);

// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
// console.log(10 == 10);
// console.log(10 == "10"); // true because == operator performs type coercion and converts the string "10" to a number before comparing it with the number 10.
// console.log(10 === "10"); // false because === operator does not perform type coercion and compares both the value and the type, so it returns false when comparing a number with a string.
// console.log(10 != 5);
// console.log(10 != "10");    // false because != operator performs type coercion and converts the string "10" to a number before comparing it with the number 10, so it returns false when comparing 10 with "10".
// console.log(10 !== "10");   // true because !== operator does not perform type coercion and compares both the value and the type, so it returns true when comparing a number with a string.
// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 <= 9);

// // Logical operators: &&, ||, !
// console.log(2>3 || 5>3); // true || true => true
// console.log(4>10 || 5>10); // false || false => false
// console.log(4>10 && 5>3); // false && true => false
// console.log(4>10 && 5>10); // false && false => false
// console.log(!(4>10)); // !false => true


//Conditional statements in JavaScript:

// if statement

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


// Alert in JS
// alert("Hello Vivek! Welcome to JavaScript programming.");

// console.log("this is log");
// console.error("this is error");
// console.warn("this is warning");

// prompt("Enter your name:");
// let name = prompt("Enter you name:");
// console.log(name);

// let firstName = prompt("Enter your firstname: ");
// let lastName = prompt("Enter your last name: ");
// console.log("Hello " + firstName + "  " + lastName + "!")





