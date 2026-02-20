// // ======= Object Literals in JavaScript ========

// let student = {
//     name: "Vivek Gupta",
//     age: 24,
//     marks: 89,
//     city: "Ballia"
// };

// const item = {
//     price: 99.99,
//     discount: 56,
//     color: ["red", "green"]
// };

// // ======= Thread/Twitter Post =======
// // // Create an object literal for the properties of thread/twitter post which include:
// // username, content, likes, reposts, tags
// const post = {
//     username: "@vivekgupta",
//     content: "this ismy @firstPost",
//     likes: 200,
//     reposts: 26,
//     tags: ["@narendramodi", "@microsoft", "@elonmusk"]
// };

// // ========= How to get values of a cobject literals =========
// const post = {
//     username: "@vivekgupta",
//     content: "this ismy @firstPost",
//     likes: 200,
//     reposts: 26,
//     tags: ["@narendraModi", "@microsoft", "@elonmusk"]
// };

// let getValue = post["username"];
// console.log(getValue)

// console.log(post.content);
// console.log(post.likes);
// console.log(post["reposts"]);
// console.log(post["tags"]);
// console.log(post.tags[1]);
// console.log(post.tags[0]);


// let prop = "reposts";
// console.log(post[prop]);

// let prop2 = "content";
// console.log(post[prop2]);

// let prop3 = "tags";
// console.log(post[prop3]);

// // [ JS automatically converts objects keys to strings. ]
// // [ Even if we made the number as a key, the number will be converted to string. ]

// const obj = {
//     1: "a",
//     2: "b",
//     null: "c", // "null" is a string here not a keyword
//     true: "d", // "true" is a string here not a keyword
//     undefined: "e" //"undefined" is a string here not a keyword
// };

// console.log(obj);

// // ======= Add / Update value =======
// // - Chnge the city to "Mumbai"
// // - Add a new prperty, gender: "Male"
// // - Change the marks to "A" 

// const student = {
//     name: "Vivek Gupta",
//     age: 24,
//     marks: 94.5,
//     city: "Delhi"
// }

// // - Chnge the city to "Mumbai"
// student.city = "Mumbai";
// console.log(student);

// // - Add a new prperty, gender: "Male"
// student.gender = "Male";
// student.mail = "vivek@gmail.com";
// console.log(student);

// // - Change the marks to "A" 
// // student.marks = "A";
// student.marks = [98, 89, 78]; // we can store array as well
// console.log(student);

// // === To delete the value of object ===
// delete student.city;
// console.log(student);

// delete student.age;
// console.log(student);


// // ======= Object of Objects =======
// // Storing information of multiple students
// const classInfo = {
//     vivek: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     amit: {
//         grade: "A",
//         city: "Mumbai"
//     },
//     vinay: {
//         grade: "O",
//         city: "Gurugram"
//     } 
// }

// // === Get values ===
// console.log(classInfo.vivek);
// console.log(classInfo.vinay);

// console.log(classInfo.vinay.city);
// console.log(classInfo.vivek.grade);

// classInfo.amit.city = "Chennai";
// console.log(classInfo.amit.city);

// classInfo.vinay.grade = "A+";
// console.log(classInfo.vinay.grade);

// console.log(classInfo);


// // ====== Array of Objects ======
// // String information of multiple Students
// const studentInfo = [
//     {
//         name: "vivek",
//         grade: "A+",
//         marks: 94.5,
//         city: "Delhi"
//     },
//     {
//         name: "vinay",
//         grade: "A",
//         marks: 90.5,
//         city: "Mumbai"
//     },
//     {
//         name: "amit",
//         grade: "O",
//         marks: 98.5,
//         city: "Chennai"
//     },
// ];

// console.log(studentInfo[1]);

// console.log(studentInfo[1].name);
// console.log(studentInfo[2].city);

// studentInfo[1].name = "vishal";
// console.log(studentInfo[1].name);

// studentInfo[2].city = "Pune";
// console.log(studentInfo[2].city);

// studentInfo[0].gender = "Male";
// console.log(studentInfo[0]);


// // ======= Math Object =======
// console.log(Math.PI); // Pi value
// console.log(Math.E); // E value

// // === abs Method ===1
// console.log(Math.abs(12));
// console.log(Math.abs(-12));
// console.log(Math.abs(-10.56));

// // === power Method ===
// console.log(Math.pow(2, 4)) // 2 to the power 4 

// // === floor Method ===  // round of numbers -> nearest smallest integer value
// console.log(Math.floor(5)); // 5
// console.log(Math.floor(5.7)); // 5
// console.log(Math.floor(-5)); // -5
// console.log(Math.floor(-5.5)); // -6

// // === ceil Method === // round of numbers -> nearest larger integer value
// console.log(Math.ceil(5.5)); // 6
// console.log(Math.ceil(-5.3)); // -5

// // === random Method ===
// console.log(Math.random()); // Every time it's generate random values    
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random()); 


// // ======= Random Integer =======
// // from 1 to 10
// // Step 1
// let num = Math.random();
// console.log(num);

// //Step 2
// num = num * 10;
// console.log(num);

// //Step 3
// num = Math.floor(num);
// console.log(num);

// num = Math.ceil(num);
// console.log(num);

// // for printing 10 number
// num = num + 1;
// console.log(num);

// // In one line - random number from 1 to 10
// console.log(Math.floor(Math.random() * 10) + 1);

// // In one line - random number from 1 to 100
// console.log(Math.floor(Math.random() * 100) + 1);

// // In one line - random number from 1 to 1000
// console.log(Math.floor(Math.random() * 1000));

// // Question
// // Generate a random number between 1 and 100.
// let random = Math.floor(Math.random() * 100) + 1;
// console.log(random);

// // Generate a random number between 1 and 5.
// let number = Math.floor(Math.random() * 5) + 1;
// console.log(number);

// // 21 to 25
// let number = Math.floor(Math.random() * 5) + 21;
// console.log(number);

// // Guessing Game
// // User entersa max number & then tries to guess a random generated number between 1 to max.
// // const maxNumber = prompt("enter a number:");

// // let guessNumber = Math.floor(Math.random() * maxNumber) + 1;
// // console.log(guessNumber);
// // console.log(Math.floor(Math.random() * maxNumber) + 1);

// // const maxNumber = prompt("enter a number:");

// // const random = Math.floor(Math.random() * maxNumber) + 1;

// // let guess = prompt("guess the number!");

// // while(true){
// //     if(guess == "quit"){
// //         console.log("user quit.");
// //         break;
// //     } else if(guess == random){
// //         console.log("you are right! congrats!!");
// //         console.log(`the guessing number is ${random}`);
// //         break;
// //     } else if(guess < random){
// //         guess = prompt("hint: your guessing number is small. please try again!");
// //     } else if(guess > random){
// //         guess = prompt("hint: your guessing number is large. please try again!")
// //     }
// // }

// const maxNumber = prompt("enter a number!");

// const random = Math.floor(Math.random() * maxNumber) + 1;

// let guess = prompt("guess the number!");

// while(true){
//     if(guess === "quit"){
//         console.log("user quit!");
//         break;
//     } else if(guess === random){
//         console.log("you are right! congrats!!");
//         break;
//     } else if(guess > random){
//         guess = prompt("hint! your guessing number is large. please try again.");
//     } else if(guess < random){
//         guess = prompt("hint! your guessing number is small, please try again.");
//     }
// }


// // Practice questions
// // Q1- create a program that generates a random number representing a dice roll. [the number should between 1 to 6].
// const number = Math.floor(Math.random() * 6) + 1;
// console.log(number)

// Q2- create an object representing a car that stores the following properties for the car: name, model, color.
// const fortuner = {
//     name: "fortuner",
//     model: "2020",
//     color: "black"
// };
// console.log(fortuner);
// console.log(fortuner.name);

// // Q3- create an object Person with their name, age, and city.
// const Person = {
//     name: "vivek",
//     age: 24,
//     city: "Atlanta"
// };
// console.log(Person);

// let city = Person.city = "New York";
// console.log(Person);

// let country = Person.country = "Unites States";
// console.log(country);
// console.log(Person);
