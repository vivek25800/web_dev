
// Dynamic Nature of Object - 
// Dynamic nature means you can chnage the state and definition of an object during run time.
// Example: 
// let obj = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida"
// };
// console.log(obj);

// // Now update or change in obj
// obj.address = "Noida Sec 66";

// console.log(obj);

// Object Cloaning - 
// Object cloning means creating a copy of an object instead of referencing the same memory.
// Important: Javascript objects are reference types, not value types.
// Cloaning Example: Shallow Copy
// Using Spread operator
// let src = {
//     name: "Vivek",
//     age: 25,
//     city: "Noida"
// };
// let dest = {...src}; // Spread opereator used
// // here's maming changes in src main object
// src.address = "Noida sec 66";
// // here's update only src object not chneges in dest obj
// console.log("src: ", src);
// console.log("Dest: ", dest);


// Using Assign method --> dest = Object.assign({}, src)
let obj = {
    name: "Vivek",
    age: 25,
    city: "Noida"
};
let dest2 = Object.assign({}, obj); // using Object.assign method
// changes in obj main object
obj.address = "Noida Sector 66";
// changes in dest object
dest2.age = 30;
console.log("Obj: ", obj);
console.log("Dest: ", dest2);


// Methods for Deep Cloning
// #JSON Method (simple but limited)
// let obj = {
//     name: "Vivek",
//     age: 25
// };
// let clone = JSON.parse(JSON.stringify(obj)); 
// console.log(clone);






