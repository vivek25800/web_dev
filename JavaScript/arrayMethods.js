
// ======== Array Methods ========
// ===============================
// 1: forEach
// 2: map
// 3: filter
// 4: some
// 5: every
// 6: reduce

// === forEach ===
// arr.forEach( some function definition or name )

// let arr = [1,2,3,4,5];

// let print = function(el) {
//     console.log(el);
// }
// arr.forEach(print);

// // Another way
// console.log("Another way!")
// arr.forEach( function(el) {
//     console.log(el);
// })

// // Some performance
// arr.forEach( function(val) {
//     console.log(val*4);
// })

// // Using arrow function
// arr.forEach( (val) => {
//     console.log(val - 1);
// }) 

// With array object
// let arr2 = [
//     {
//         name: "vivek",
//         marks: 95,
//         age: 24
//     },
//     {
//         name: "vinay",
//         marks: 92,
//         age: 20
//     },
//     {
//         name: "amit",
//         marks: 88,
//         age: 25
//     },
//     {
//         name: "abhishek",
//         marks: 98,
//         age: 22
//     }
// ];

// arr2.forEach( (student) => {
//     console.log(student.name);
//     console.log(student.marks);101
//     console.log(student.age);
// })

// ==== Map function ====
// let newArr = arr.map( some function definition or name ).
// Example ->
// let num = [10,20,30,40,50];

// let double = num.map( function(val) {
//     return val * 2;
// })
// console.log(double);

// let students = [
//     {
//         name: "vivek",
//         marks: 95
//     },
//     {
//         name: "vinay",
//         marks: 94.4
//     },
//     {
//         name: "amit",
//         marks: 98
//     }
// ];

// let cgpa = students.map( (val) => {
//     return val.marks / 10;
// })
// console.log(cgpa);

// let num = [1,2,3,4,5];
// let double = num.map( (val) => {} );
// console.log(double);


// ==== Filter function ====
// let newArr = arr.filter( some function definition or name ) 
// Example -> 
// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// let even = nums.filter( (val) => {
//     // return val % 2 == 0;  // even -> true, odd -> false
//     // return val % 2 != 0;  // odd -> true, even -> false
//     return val < 9; // elements less than 9
// })
// console.log(even);


// ==== Every function ====
// Returns true if every element of array gives true for some function, else returns false. same as AND operator
// arr.every( some functio definition or name );
// Example ->
// let num = [2,4,6,8];
// let ans = num.every( (val) => val % 2 == 0 );
// console.log(ans);

// let ans2 = num.every( (val) => val % 2 != 0 );
// console.log(ans2);   


// ==== Some function =====
// Returns true if some elements of array give true for some function. Else returns false. same as OR operator
// arr.some( some function definition or name )
// Example ->
// let nums = [1,2,3,4,5,6];
// let ans1 = nums.some( (val) => val % 2 == 0 );
// console.log(ans1);

// let nums1 = [1,3,5,7];
// let ans3 = nums1.some( (val) => val % 2 == 0 );
// console.log(ans3);


// ==== Reduce function ====
// Reduces the array to a single value
// arr.reduce( reducer function with two variables for (accumalator, element));
// let nums = [1, 2, 3, 4, 5];
// let finalVal = nums.reduce( (res, val) => {
//     console.log(res);
//     return res + val;
// } );
// console.log(finalVal);

// Practice Q.) Find the maximum element in an array
// let arr = [10,20,30,90,40,50,70];
// let max = arr.reduce( (max, val) => {
//     if(max < val){
//         return val;
//     } else {
//         return max;
//     }
// });

// console.log(max);

// // Practice Q.) Check if all numbers in our array are multiples 10 or not.
// let num = [10, 20, 30, 40, 50, 4];

// let ans = num.every( (val) => val % 10 == 0 );
// console.log(ans);

// Practice Q) Create a function to find the min number in an array.
// let arr2 = [10, 20, 16, 21, 5, 23, 30];

// function getMin(arr2) {
//     let min = arr2.reduce( (min, val) => {
//         if(min < val){
//             return min;
//         } else {
//             return val;
//         }
//     })
//     return min;
// }

// console.log(getMin(arr2));


// ====== Default Parameter ======
// ===============================
// Giving a default to the arguments
// Syntax => function func(a, b = 2) { // do something }
// Example ->
// function sum(a, b = 2){
//     return a + b;
// }
// console.log(sum(5));

// // In case first parameter has default value, b is always undefined because the passing value in the function will always assign to the first parameter
// function sum2(a = 4, b){
//     return a + b;
// }
// console.log(sum2(4));  // a= 1, b = undefined


// ====== Spread Method ======
// ===========================
// Expands an iterable into multiple values
// Syntax ->  function func(...arr){ // do something }
// Example ->
// let arr = [1,2,3,4,1,3,4,2,0,-1,-20];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));
// console.log(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10]));  // It's showing correct answer but it's wrong way

// let str = "apnacollege";
// console.log(...str);

// console.log(..."vivekkumargupta");

// // Spread with array literals
// // Example ->
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);

// newArr.push(5,6,7);
// console.log(newArr);  // 1,2,3,4,5,5,6,7
// console.log(arr); // 1,2,3,4,5

// let chars = [..."hello"];
// console.log(chars);

// let odd = [1, 3, 5, 7 ,9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];
// console.log(nums);


// Spread with object literals
// Example ->

// let data = {
//     email: "vivek@gmail.com",
//     password: 1234,
// }

// let dataCopy = {...data, id: 564, country: "India"};
// console.log(dataCopy);

// // Convert a array to object
// let arr = [1, 2, 3, 4, 5, 6];
// let obj1 = {...arr};
// console.log(obj1);


// ====== Rest Method ======
// =========================
// Allows a function to take an infinite number of arguments and bundle them in an array.
// Syntax ->  function sum(...args) { return args.reduce((add, el) => add, el); }
// Example ->

// function sum(...args) {
//     for(let i = 0; i < args.length; i++){
//         console.log("you gave us: ", args[i]);
//     }
// }
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// function sum2(a, b, c, d){
//     console.log(arguments);
// }
// console.log(sum2(1, 2, 3, 4));

// function sum(...args) {
//     return args.reduce((sum, val) => sum + val);
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

// // find minimum number in an array
// function min(...args){
//     return args.reduce((min, val) => {
//         if(min > val){
//             return val;
//         } else {
//             return min;
//         }
//     });
// }
// console.log(min(1, 2, 3, 4, 0, -23));

// // find minimum number in an array with more parameter
// function min(msg, ...args){
//     console.log(msg);
//     return args.reduce((min, val) => {
//         if(min > val){
//             return val;
//         } else {
//             return min;
//         }
//     });
// }
// console.log(min("hello", 1, 2, 3, 4, 0, -23));


// ===== Destructuring Method =====
// ================================
// Stroring values of array into multiple variables
// Example ->

// let names = ["vivek", "tony", "peter", "bruce", "steave"];
// // Normal way
// // let winner = names[0];
// // let runnerup = names[1];
// // let secondRunnerup = names[2];

// // let [winner, runnerup, secondRunnerup] = names; 
// let [winner, runnerup, ...others] = names

// ===== Distructuring with Objects ======
// Example ->
// const student = {
//     name: "Vivek",
//     class: 12,
//     age: 22,
//     subjects: ["hindi", "english", "math", "science", "social-studies"],
//     username: "vivek123",
//     password: 1234,
//     city: 'Pune', // Higher prefrence
// };

// const { username: user, password: pass, city = "Mumbai" } = student;
// console.log(user); 
// console.log(pass);


// Practice Questions
// Q1) Square and sum the array elements using the arrow function and then find the average of the array.
// let arr = [10, 12, 11, 4, 22, 20];
// let square = [];
// let sum = 0;
// let average = 0;

// for(let i=0; i<arr.length; i++){
//     square.push(arr[i]*arr[i]);
//     sum += arr[i];

// }
// average = sum/arr.length;
// console.log(square);
// console.log(sum);
// console.log(average);

// const square = 



// Q2) Create a new array using the map function whose each element is equal to the original elements plus 5.
// let arr2 = [10, 20, 30, 40, 50, 60];
// const newArr2 = arr2.map((val) => {
//     return val + 5;
// });
// console.log(newArr2);

// // Q3) Create a new array whose elements are in uppercase of words presents in the original array.
// let str1 = ["mango", "apple", "graps", "orange", "banana"];

// let str2 = str1.map( (str) => {
//     return str.toUpperCase();
// })
// console.log(str2);

// Q4) Write a function called doubleAndReturnArgs which acepts an array and a variable number of arguments. The function should
//     return a new array with the original values and all of the additional argument doubled.
const doubleAndReturnArgs = (arr, ...args) => [ ...arr, ...args.map((v) => v * 2),];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

// Q5) Write a function called mergeCobjects that accepts two objects and returns a new objects which contains all the keys and values of the first object and second object.
const mergeCobjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeCobjects( { a: 1, b:2 }, { c: 3, d: 4 }));