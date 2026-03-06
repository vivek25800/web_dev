// Classes are a templeate for creating objects.
// Classes in JS are built on prototypes but also have some syntax and semantics that are uniques to classes.
// Instead of creating many similar objects manually, we use a class to define their structure once.

// Example - 
// class Human {
//     //Properties
//     age = 25;
//     // make it private using #
//     #weight = 80;
//     height = 180;

//     // Behaviour 
//     walking() {
//         console.log("I am walking");
//         console.log(this.#weight); // print 80
//     }

//     running() {
//         console.log("I am running");
//     }
// }
// // Creating object 
// const obj = new Human();
// console.log(obj.age);
// console.log(obj.height);
// obj.walking();
// console.log(obj.weight); // print 'undefined' because its private

// Constructor - Special method used to initialize object values.
// Example 2 - 
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hello my name is", this.name);
//         console.log("I am ", this.age, " years old");
//     }
// }
// const obj1 = new Person("Vivek", 25);
// obj1.greet();

// Class with multiple Methods
// Example - 
// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     start() {
//         console.log("Car is started");
//     }   
    
//     stop() {
//         console.log("Car is stop");
//     }

// }
// const car1 = new Car("BMW", "X7");
// car1.start();
// car1.stop();

// Getter and Setter in Class
// These mathods use for access the private data to outside the class.
// Example - 
// class Student {
//     age = 25;
//     #weight = 80;
//     height = 180;

//     // Getter function to get data
//     get fetchWeight() {
//         return this.#weight;
//     }

//     // Setter function to update the data
//     set modifyHeight(value) {
//         this.height = value;
//     }
// }
// const obj1 = new Student();
// // Use get method
// let age2 = obj1.fetchWeight;
// console.log("My age: ", age2);

// Contructor method - 
// A constructor is a special method inside a class that runs automatically when a new object is created.
// It is mainly used to set initial values for object properties.
// Syntax of Contructor - 
// class ClassName {
//     constructor(parameters) {
//         // initialize properties
//     }
// }

// Example - Basic constructor
// class Person {
//     name;
//     age;
//     // Creating Constructor
//     constructor(newName, newAge) {
//         this.name = newName;
//         this.age = newAge;
//     }
// }
// const obj = new Person("Vivek", 25);
// console.log("My name is", obj.name);
// console.log("My age", obj.age);

// Constructor + Method
// Example - 
// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }

//     carStart() {
//         console.log(this.brand + " car started");
//     }

//     carStop() {
//         console.log(this.brand + " car stoped");
//     }
// }
// const object = new Car("BMW", "X7");
// object.carStart();
// object.carStop();


















