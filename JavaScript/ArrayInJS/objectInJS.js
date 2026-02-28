// Object - An object is a collection of key-value pairs. It is a fundamental data structure in JavaScript that allows you to store and organize data in a structured way. Objects can contain properties (key-value pairs) and methods (functions that operate on the object). They are used to represent real-world entities, such as people, cars, or any other objects, and can be created using object literals, constructors, or classes.

// Creating an object using an object literal
// const personDetails = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida"
// }
// console.log(personDetails);

// Accessing object properties
// Dot notation
// console.log(personDetails.name); // print "Vivek"
// console.log(personDetails.age); // print 25
// console.log(personDetails.city); // print "Noida"

// // Bracket notation 
// console.log(personDetails["name"]);
// console.log(personDetails["age"]);
// console.log(personDetails["city"]);

// Adding new properties 
// personDetails.country = "India";
// console.log(personDetails.country); // print "India"
// console.log(personDetails["country"]); // print India

// // Updating properties
// personDetails.age = 26;
// personDetails.city = "Delhi";
// console.log(personDetails.age);
// console.log(personDetails.city);

// // Deleting properties
// delete personDetails.city;
// console.log(personDetails.city); // print undefined
// console.log(personDetails); 

// Checking if a property exists
// console.log("name" in personDetails); // print true
// console.log("country" in personDetails); // print false

// Object with Function (method)
// let student = {
//     name: "Vivek",
//     age: 25,
//     greet: function() {                 // this refers to current object
//         console.log(`Hello, my name is ${this.name} and i am ${this.age} years old.`)
//     },
// }
// console.log(student.greet());

// let sumOfTwoNumbers = {
//     num1: 10,
//     num2: 20,
//     sum: function() {
//         // console.log(this.num1 + this.num2);
//         return this.num1 + this.num2;
//     },
// }
// console.log("Sum of num1 and num2 is: ", sumOfTwoNumbers.sum());

// Nested Object
// let employee = {
//     name: "Vivek",
//     address: {
//         city: "Noida",
//         pincode: 12542
//     }
// };
// console.log(employee.address);
// console.log(employee.address.city); // print "Noida"
// console.log(employee.address.pincode); // print 12542

// Object.keys(), Object.values(), object.entries()
// let car = {
//     brand: "Toyota",
//     model: "Fortuner",
//     year: 2024
// };
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));
// // 1st entries = ["brand", "Toyota"], 2nd entries = ["model", "Fortuner"], 3rd entries = ["year", 2024]

// Why objects are important in Javascript?
// ✅ Used in APIs
// ✅ Used in React
// ✅ Used in databases
// ✅ Used everywhere in real projects
// ✅ Most asked in interviews


// Practice Questions
// 1. Create an object for a student with name, age, marks.
// 2. Add a method to calculate grade.
// 3. Count number of properties in object.
// 4. Convert object to array.
// 5. Merge two objects.
// 6. Check if property exists in object.
// 7. Find highest value property in object.


// 1. Create an object for a student with name, age, marks.
// let student  = {
//     name: "Vivek",
//     age: 25,
//     marsk: 98
// }
// console.log(student);

// 2. Add a method to calculate grade.
// let student = {
//     myNmae: "Vivek",
//     age: 25,
//     marks: 72,
//     calculateGrade: function() {
//         if(this.marks >= 90) {
//             console.log("Grade A");
//         } else if(this.marks >= 75 && this.marks < 90) {
//             console.log("Grade B");
//         } else {
//             console.log("Grade C");
//         }
//     }
// }
// console.log(student);
// console.log(student.calculateGrade());

// 3. Count number of properties in object.
// let student = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida",
//     country: "India"
// }
// let count = Object.keys(student).length;
// console.log("Number of properties: ", count);

// Using for in loop
// let student = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida",
//     country: "India"
// }
// let count = 0;
// for(let key in student) {
//     count++;
// }
// console.log("Number of properties: ", count);

// Using Object.entries()
// let student = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida"
// };
// console.log(Object.entries(student).length);

// 4. Convert object to array.
// let student = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida"
// };

// let keyArray = Object.keys(student);
// console.log(keyArray); // print ["name", "age", "city"]

// let valueArray = Object.values(student);
// console.log(valueArray); // print ["Vivek", 25, "Noida"]

// let entriesArray = Object.entries(student);
// console.log(entriesArray); // print [["name", "Vivek"], ["age", 25], ["city", "Noida"]]


// 5. Merge two objects.
// let obj1 = {
//     name: "Vivek",
//     age: 25
// };
// let obj2 = {
//     city: "Noida",
//     country: "India"
// };
// let mergedObj = {...obj1, ...obj2};
// console.log(mergedObj);

// 6. Check if property exists in object.
// let student = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida"
// }
// console.log("name" in student);
// console.log("country" in student);

// 7. Find highest value property in object.
// let marks = {
//     math: 85,
//     science: 90,
//     english: 92
// };
// let highestMarks = 0;
// let subjectWithHighestMarks = "";
// for(let subject in marks) {
//     if(marks[subject] > highestMarks) {
//         highestMarks = marks[subject];
//         subjectWithHighestMarks = subject;
//     }
// }
// console.log("Subject with highest marks: ", subjectWithHighestMarks);
// console.log("Highest marks: ", highestMarks);







