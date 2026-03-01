//Arrays in JavaScript
// let students = ["Vivek", "Vinay", "Vikash"];
// let numbers = [10,20,30,40,50];

// let num = numbers[2];

// Empty array
// let empArr = [];
// console.log(empArr.length);
// console.log([].length);
// console.log([1,2,3,4].length);

// let arr = ["vivek", 10, 8.5, 'd'];
// console.log(arr[0]); //'vivek'
// console.log(arr[0][3]); //'e'
// console.log(arr[0].length); //5

//Arrays are Mutable
// let fruits = ["Mango", "Apple", "Litchi"];
// fruits[0] = "Banana";
// console.log(fruits); //['Banana', 'Apple', 'Litchi']

//Array Methods
// let cars = ["volvo", "suzuki", "mahindra", "tata"];
// //Push method -> add to end
// cars.push("BMW");

// //Unshift method -> add to start
// cars.unshift("Audi");

// //Pop method -> delete from end and returns it
// cars.pop();

// //shift method -> delete from start and returns it
// cars.shift();
// // console.log(cars);

// let followers = ["a","b","c","d"];
// let blocked = followers.shift();
// console.log(followers); 
// console.log(blocked);

//Practice Qs. -> From the given start state of an array, change it to final form using methods.
//start [january, july, march, august]
//end [july, jun, march, august]
// let months = ["january","july","march","august"];
// months.shift();
// months.shift();
// months.unshift("jun");
// months.unshift("july")
// console.log(months);

//Some more arrays methods 
//Indexof
// let primary = ["red","yellow","blue"];
// primary.indexOf("red");

// Includes
// let primary = ["red","yellow","blue"];
// let ans = primary.includes("blue")
// console.log(ans);

//Concatanation methods
// let primary = ["red","yellow","blue"];
// let secondary = ["green","orange","purple"];
// let num =  primary.concat(secondary);
// console.log(num)


// //Slice methods
// let colors = ["red","yellow","blue","orange","pink","white"];
// let ans = colors.slice(2,5);
// console.log(ans);

//Splice methods
// let colors = ["red","yellow","blue","pink","orange","white"];
// let ans = colors.splice(0,2, "brown","black");
// console.log(ans);
// console.log(colors);

//Sort method
// let days = ["monday","sunday","wednesday","tuesday"];
// days.sort();
// console.log(days);

// let marks = [99,89,67,42,100];
// marks.sort();
// console.log(marks);

//Practice Qs.
// let months = ["january","july","march","august"];
// months.splice(0,2, "july","june");
// console.log(months);

// let language = ["c","c++","html","javascript","python","java","c#","sql"];
// let ans = language.reverse().indexOf("javascript");
// console.log(ans);

//Array Reference
// let ex1 = "name";
// let ex2 = "name";

// if(ex1 === ex2){
//     return true;
// } else {
//     return false;
// }

//Constant Array
// const arr1 = [1,2,3,4];
// arr1 = [1,2,3,4,5]; // throw error
// arr1.push(5); //correct way
// arr1.pop();

//Nested Array
// let nums = [[1,2],[2,3],[3,4],[4,5]];
// console.log(nums.length); // 4
// console.log(nums[0]); // [1,2]
// console.log(nums[0].length); // 2
// console.log(nums[0][1]); // 2

//Practice Qs.
// x | null | 0
//--------------
// null | x | null
//--------------
// 0 | null | x
// let game = [['X',null,'0'],[null,'X',null],['0',null,'X']];
// // console.log(game);
// game[0][1] = 0;
// game[1][0] = 0;
// console.log(game);

//Practice Qs.
//Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

//Ans-
// let arr = [7,9,0,-2];
// let n = 3;
// let result = arr.slice(0,n);
// console.log(result);

//Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

//Ans-
// let arr = [7,9,0,-2];
// let n = 3;
// let result = arr.slice(arr.length - n, arr.length);
// console.log(result);

//Qs3. Write a JavaScript program to check whether a string is blank or not.
//Ans-
// let str = "vivek";
// if(str == ""){
//     console.log("String is blank");
// } else {
//     console.log("String is not blank");
// }

//Qs4. Write a JavaScript program to test whether the character at the given (character)
//index is lower case.
//Ans-
// let str = "MarVelUNiverSe";
// let idx = 3;
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("Character is lowercase");
// } else {
//     console.log("Character is uppercase");
// }

//Qs5. Write a JavaScript program to strip leading and trailing spaces from a string
//Ans-
// let str = prompt("Enter the string")
// console.log(`Original string is = ${str}`);
// console.log(`String without spaces = ${str.trim()}`);

//Qs6. Write a JavaScript program to check if an element exists in an array or not.
//Ans-
// let arr = ["hello",'k',4,5,6];
// let item = 4;

// if(arr.includes(item) == true){
//     console.log("Element exists in the array");
// } else {
//     console.log("Elements not exits in the array");
// }

//forEach in JS
// var arr = [10,20,30,40];
// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

//Map in JS
// let arr = [1,2,3,4];
// let newArr = arr.map(function(val){
//     return val*4;
// })
// console.log(newArr);

// let array = [7,9,0,-2];
// let n = 3;
// let ans = array.slice(0, n);
// console.log(ans);


// let array = [7,9,0,-2];
// let n = 3;
// let ans = array.slice(array.length-n, array.length);
// console.log(ans);


// let str = "";
// if(str == ""){
//     console.log("String are empty");
// } else {
//     console.log("String are not empty");
// }


// let str = "bsdfGjhgggJGHGF";
// let idx = 0
// if(str[idx] == str[idx].toLowerCase()){
//     console.log("Charcter is lowercase");
// } else {
//     console.log("character is not lowercase");
// }

//Creating an array using array constructor
//Synatax = let array_Name = new Array();
//Example - 
// let names = new Array("Vivek","Vinay","Vikash","Vishal","Vipin");
// console.log(names);

// //Access last element of Array
// let lastName =  names[names.length - 1];
// console.log(`Last name is ${lastName}`)


//  Increase and Decrease the Array Length
// let courses = ["HTML", "CSS", "Javascript", "React", "Node.js"];
// // Increase the array length to 7
// courses.length = 7;
// console.log(`Array After Increase the Length ${courses}`);

// // Decrease the array length to 2
// courses.length = 2;
// console.log(`Array After Decrease the Length: ${courses}`);