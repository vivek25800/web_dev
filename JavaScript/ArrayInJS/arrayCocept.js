// An array is a data structure that can hold multiple values. 
// It is a collection of items stored at contiguous memory locations. 
// In JavaScript, arrays are dynamic and can hold elements of different types.
// Syntax: const array_name = [item1, item2, item3, ...];
// Cration of an array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof(arr)); // print object

// // Array contructor
// let arr1 = new Array(1, 2, 3, 4, 5);
// console.log(arr1);
// console.log(typeof(arr1)); // print object

// Accessing array elements
// let arr = new Array(10, 20, 30, 40, 50);
// let firstElement = arr[0]; // Accessing the first element
// let secondElement = arr[1]; // Accessing the second element
// let fifthElement = arr[4]; // Accessing the fifth element
// console.log(firstElement); // print 10
// console.log(secondElement); // print 20
// console.log(fifthElement); // print 50

// // Modifying array elements "array are mutable"
// arr[2] = 35; // Modifying the third element
// console.log(arr[2]); // print 35

// Emp array
// let empErr = [];
// console.log(empErr.length);
// console.log([].length);
// console.log([1,2,3,4].length);

// You can also create an empty array, and provide elements later:
// let car = [];
// car[0] = "BMW";
// car[1] = "Audi";
// car[2] = "Toyota";
// console.log(car);

// let  arr = ["Vivek", 10, true, null, undefined, {name: "vivek"}, [1,2,3,4]];
// console.log(arr);
// console.log(arr[5].name); // print "vivek"
// console.log(arr[6][3]); // print 4
// console.log(arr[6][4]); // print undefined

// Some buit-in methods of array
// ======== Array Methods =========

// 1. Push
// 2. Pop
// 3. Shift
// 4. Unshift
// 5. Slice
// 6. Splice
// 7. Map
// 8. Filter
// 9. Reduce
// 10. Sort
// 11. IndexOf
// 12. Includes
// 13. ForEach
// 14. Concat
// 15. Join
// 16. Reverse
// 17. Length
// 18. Fill
// 19. Flat
// 20. FlatMap
// 21. Some
// 22. Every
// 23. Find
// 24. FindIndex
// 25. ToString
// 26. ValueOf
// 27. From
// 28. Of

// =============================================================================================

// Push - adds one or more elements to the end of an array and returns the new length of the array.
// let arr = [1, 2, 3, 4];
// console.log(arr); // print [1, 2, 3, 4]
// arr.push(5);
// console.log("After add new element: ", arr); // print [1, 2, 3, 4, 5]
// arr.push("Vivek", true, 8);
// console.log("After adding multiple elements: ", arr); // print [1, 2, 3, 4, 5, "Vivek", true, 8]
// console.log(arr.length); // print 8

// ===========================================================================================

// Pop - removes the last element from an array and returns that element. This method changes the length of the array.
// let arr = [1, 2, 3, "Vivek", false, 10];
// console.log(arr); // print [1, 2, 3, "Vivek", false, 10]
// arr.pop();
// console.log("After removing last element: ", arr); // print [1, 2, 3, "Vivek", false]

// =========================================================================================

// Shift - removes the first element from an array and returns that removed element. This method changes the length of the array.
// let arr = [1, 2, 3, "Vivek", false, 10];
// console.log(arr);
// arr.shift();
// console.log("After removing first elemet: ", arr); // print [2, 3, "Vivek", false, 10]

// ========================================================================================

// Unshift - adds one or more elements to the beginning of an array and returns the new length of the array.
// let arr = [1, 2, 3, "Vivek", true, 10];
// console.log(arr);
// arr.unshift(10);
// console.log("After adding element at begining: ", arr); // print [10, 1, 2, 3, "Vivek", true, 10]
// arr.unshift("Hello", false);
// console.log("After adding multiple elements at begining: ", arr);

// ====================================================================================

// Slice - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// let arr = [1, 2, 3, "Vivek", true, 10];
// console.log(arr);
// let afterSliced =  arr.slice(2,5);
// console.log("After slicing: ", afterSliced); // print [3, "Vivek", true]
// console.log("Original array after slicing: ", arr); // print [1, 2, 3, "Vivek", true, 10]

// ====================================================================================

// Splice - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
// let arr = [1, 2, 3, "Vivek", false, 10];
// console.log(arr);
// // Removing 2 elements starting form index 2 [3, "Vivek"] and adding "Hello" and true at index 2.
// let removedElements = arr.splice(2, 2, "Hello", true);
// console.log("Removed elements: ", removedElements); // print [3, "Vivek"]
// console.log("After splicing: ", arr); // print [1, 2, "Hello", true, false, 10]

// ====================================================================================

// Map - creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax - array.map(function(currentValue, index, arr), thisValue)
// let arr = [10, 20, 30];
// let ansArray =  arr.map( function(num) {
//     return num * num;
// });
// console.log("After mapping: ", ansArray); // print [100, 400, 900]

// Using arrow function
// let ansArray = arr.map( (num) => {
//     return num * num;
// });
// console.log(ansArray); // print [100, 400, 900]

// // Using implicit return in arrow function
// let ansArray2 = arr.map( num => num * num);
// console.log(ansArray2); // print [100, 400, 900]

// let arr = [10, 20, 30, 40];
// let ansArray = arr.map( (number, index) => {
//     console.log(number + 1);
//     console.log(index);
// });
// console.log(ansArray);

// ==========================================================================

// Filte in Javascript - The filter() method creates a new array filled with elements that pass a test provided by a function.
// Return even numbers in an array
// let arr = [10, 23, 32, 44, 51, 33, 34];
// let ansArray = arr.filter( (num) => {
//     // if(num % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     // short method
//     return num % 2 == 0;
// });
// console.log(ansArray);

// Return odd numbers
// let ansArray2 = arr.filter( (num) => {
//     // if(num % 2 !== 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return num  % 2 !== 0;
// });
// console.log(ansArray2);

// Filter only string type value in an array
// let arr = [10, 20, "Vivek", true, "Gupta", null];
// let strArray = arr.filter( (str) => {
//     if(typeof(str) === 'string') {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(strArray);

// // Filter number values
// let numArray = arr.filter( (num) => {
//     if(typeof(num) === 'number') {
//         return true;
//     } else{
//         return false;
//     }
// });
// console.log(numArray);

// ===============================================================================

// Reduce in JS - reduce() is used to reduce an array to a single value.
// reduce() is used to transform an array into a single value by applying a function on each element and accumulating the result.
// Syntax - array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
// Or 
// array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue);

// Accumulator - Store the result (keeps updating)
// CurrentValue - Current element of array
// InitialValue - Starting value of accumulator

// Example - find sum
// let arr = [10, 20, 30, 40, 50];
// let ans = arr.reduce( (acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(ans);
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100

// Short version
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Find maximum number
// let numbers = [50, 10, 30, 20];
// let max = numbers.reduce( (largest, num) => {
//     return num > largest ? num : largest;
// }, numbers[0]);
// console.log(max);

// =======================================================================

// Sort in JS - The sort() method in JavaScript is used to arrange array elements in a specific order.
// Syntax - array.sort(compareFunction)

// let arr = [23, 19, 34, 50, 40];
// let sortExample = arr.sort();
// console.log("Array sort in ascending order: ", sortExample);

// // Sort in descending order 
// let sortExample2 = arr.sort();
// console.log("Array sort in descending order: ", sortExample2.toReversed());

// ==========================================================================

// IndexOf in JS - The indexOf() method in JavaScript is used to find the position of the first occurrence of a specific value in an array.
// Syntax - arr.indexOf(searchElement, fromIndex);

// let arr = [10, 20, 30, 40];
// console.log("Index of 20 element: ", arr.indexOf(20));
// console.log("Index of 40 element: ", arr.indexOf(40));

// // Check index of a element which not present in array
// console.log("Index of 60 element: ", arr.indexOf(60)); // print -1   If the value is not present, it returns -1.

// ==========================================================================

// Includes in JS - The includes() method in JavaScript is used to check whether an array contains a specific value. It returns a boolean result
// Syntax - arr.includes(searchElement, fromIndex);

// let arr = [10, 20, 30];
// console.log(arr.includes(20)); // print true
// console.log(arr.includes(40)); // print false
// console.log(arr.includes(10)); // print true

// ==========================================================================

// ForeEach in JS array - forEach() is used to loop through an array.
// It executes a function once for each element in the array.
// It does NOT return a new array.
// It does NOT change the original array (unless you manually modify it).
// Syntax - 
// Array.forEach(function(element, index, array) {
//     // code here
// });
// element - current item
// index - current index (optional)
// array - full array (optional)

// Printing elements of an array
// let arr = [10, 20, "Vivek", null, true];
// arr.forEach( function(num) {
//     console.log(num);
// });

// Using arrow function
// arr.forEach( (num) => {
//     console.log(num);
// });
// arr.forEach( num => console.log(num) );

// Using Index
// let arr = [10, 20, "Vivek", null, true];
// arr.forEach( (num, index) => {
//     console.log(index + ": " + num);
// });

// Important things about forEach - 
// It does not return anything
// You cannot break or continue

// let numbers = [10, 20, 30];
// let result = numbers.forEach(num => num * 2);
// console.log(result);

// ====================================================================================

// Array with function 
// Example - 
// let arr = [10, 20, 30, 40, 50];
// let getSum = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// // passing array (arr) in function
// console.log("Sum of array: ", getSum(arr));

// // Using forEach method
// function getSum2(arr) {
//     let sum = 0;
//     arr.forEach((num) => {
//         sum += num;
//     });
//     return sum;
// }
// console.log("Sum of array: ", getSum2(arr));

// For-in and For-of method 
// Example - For-in
// Used to loop over keys(property names)
// let person = {
//     name: "Vivek",
//     age: 25,
//     city: "New York" 
// };
// for(let key in person) {
//     console.log(key);
//     console.log(person[key]);
// }

// Using with Array (Not recommended)
// let arr = [10, 20, 39, 40];
// for(let index in arr) {
//     console.log(index);
//     console.log(arr[index]);
// }

// Example - For-of
// Ex with Array 
// let numbers = [10, 20, 30, 40];
// for(let value of numbers) {
//     console.log(value);
// }
// It directly gives values (clean & recommended)

// Ex with String
// let str = "Vivek Gupta";
// for(let char of str) {
//     console.log(char);
// }

// =============================================================================

// Conacat in JS array - concat()
// Merges two or more arrays
// Does not change original array
// Syntax - first_Array.concat(second_Array)
// Example - 

// let arr1 = [10, 20, 30, 40];
// let arr2 = ["Vivek", null, 50, 60, true];
// let result = arr1.concat(arr2);
// console.log("First array: ", arr1);
// console.log("Second array: ", arr2);
// console.log("After concat two array: ", result);

// ================================================================================

// Join method - join()
// Converts array to string
// You choose separater
// Syntax - join() or join(separator)
// Example - 

// let elements = ["Fire", "Air", "Water"];
// console.log("Original array: ", elements);
// console.log(elements.join());
// console.log(elements.join(" "));
// console.log(elements.join("-"));

// ============================================================================

// Reverse method - reverse()
// Reverse the array 
// Change original array
// Syntax - reverse()
// Example - 

// let arr = [10, 20, "Vivek", null, undefined];
// console.log("Original array: ", arr);
// let reversedArray = arr.reverse();
// console.log("After reverse: ", reversedArray);

// // Careful: reverse is destructive -- it changes the original array.
// console.log("Now original array: ", arr);

// ================================================================================

// Length method - length()
// Returns number of elements
// Syntax - array.length
// Example - 

// let arr = [20, 30, 40, 50];
// console.log(arr.length); // print 4
// arr.unshift("Vivek", "Gupta", false);
// console.log(arr.length); // print 7

// =====================================================================================

// Fill method - fil()
// Fills array with a value
// Modifies original array
// Syntax - 
// array.fill(value)
// array.fill(value, start)
// arrar.fill(value, start, end)
// Example - 

// let arr = [10, 20, 39, 40, 60, 90];
// console.log("Original array: ", arr);
// console.log(arr.fill(100)); // [100, 100, 100, 100, 100, 100]

// // Fill 80 from position 2
// console.log(arr.fill(80, 2)); // [100, 100, 80, 80, 80, 80]

// // Fill with 0 from position 2 untill 4
// console.log(arr.fill(0, 2, 4)); // [100, 100, 0, 0, 80, 80]

// =======================================================================================

// 



















