// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//Print all odd numbers from 1 to 15
// for(let i=1; i<=15; i++){
//     if(i%2 != 0){
//         console.log(`The odd number is ${i}`)
//     }
// }
// for(let i=1; i<=15; i=i+2){
//     console.log(i)
// }

// console.log("Backwards");
// for(i=15; i>=1; i=i-2){
//     console.log(i);
// }

//Print all even numbers from 2to 10
// for(let i=2; i<=10; i=i+2){
//     console.log(i)
// }

// console.log("Backwards");
// for(let i=10; i>=2; i=i-2){
//     console.log(i)
// }

//Print multiplication of 5
// for(let i=1; i<=10; i++){ // for(let i=1; i<=5*10; i=i+5) another way 
//     console.log(5*i);
// }

// let n = prompt("enter your number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

//Nested loops
// for(let i=1; i<=5; i++){
//     console.log(`outer loop for ${i}`);
//     for(let j=1; j<=5; j++){
//         console.log(j)
//     }
// }

// for(let i=1; i<=5; i++){
//     console.log(`outer loop for ${i}`);
//     for(let j=1; j<=5; j++){
//          console.log(`inner one loop for ${j}`)
//          for(let k=1; k<=5; k++){
//             console.log(k);
//          } 
//     }
// }

//While loops
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// Program for guess the favourite movie
// const favMovie = "Batman";

// let guess = prompt("guess my favourite movie");

// while( (guess != favMovie)){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("Wrong guess! please try again!");
// }

// if(guess == favMovie){
//     console.log("Congrat's");
// }


//Loops with Arrays
// let fruits = ["Mango","Apple","Banana","Litchi","Orange"];
// fruits.push("pineapple");
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]); 
// }

// console.log("backwards");
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

//Nested loops with Nested Arrays
// let heroes = [
//     ["iron-man","spiderman","thor"], 
//     ["Batman", "superman","flash"] 
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j} ${heroes[i][j]}`);
//     }
// }

// let students = [
//     ["vivek", 98], 
//     ["vinay", 99], 
//     ["vijay", 100]
// ];

// for(let i=0; i<students.length; i++){
//     console.log(`Info of student ${i+1}`);
//     for(j=0; j<students[i].length; j++){
//         console.log(students[i][j]);
//     }
// }

//for of loops
// let fruits = ["mango","banana","apple","litchi","orange"];

// for(i of fruits){
//     console.log(i);
// }

// for(char of "vivekkumargupta"){
//     console.log(char)
// }


//Nested for of loop
// let heroes = [
//     ["iron-man","spiderman","thor"], 
//     ["Batman", "superman","flash"] 
// ];

// for(list of heroes){
//     // console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }


//Building todo app
// let todo = [];

// let req = prompt("please enter your request");

// while(true){
//     if(req === "quit"){
//         console.log("quiting app");
//         break;
//     } else if(req === "list"){
//         console.log("Here are the lists!");
//         console.log("----------------------");
//         for(task of todo){
//             console.log(task);
//         }
//         console.log("----------------------");
//     } else if(req === "add"){
//         let task = prompt("please enter your task you want to add");
//         todo.push(task);
//         console.log("task added");
//     } else if(req === "delete"){
//         let delTask = prompt("enter your task which you want to delete");
//         for(let i=0; i<todo.length; i++){
//             if(delTask === todo[i]){
//                 todo.splice(i, 1);
//                 console.log("task deleted!");
//             }
//         }
//     }

//     req = prompt("please enter your request");
// }


// let todo = [];

// let req = prompt("please enter your request!");

// while(true){
//     if(req == "quit"){
//         console.log("quiting app!");
//         break;
//     } else if(req == "list"){
//         console.log("here are the lists!");
//         console.log("----------------------");
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         if(todo.length === 0){
//             console.log("list is empty! please add some tasks.");
//         }
//         console.log("----------------------");
//     } else if(req == "add"){
//         let task = prompt("please enter your task which you want to add!")
//         todo.push(task);
//         console.log("task added!");
//     } else if(req == "delete"){
//         if(todo.length == 0){
//             console.log("nothing is available in the list for delete!");
//             break;
//         }
//         let delTask = prompt("enter the task which you want delete!");
//         if(delTask == "all"){
//             todo.splice(0, todo.length);
//             console.log("all tasks deleted successfully!");
//             break;
//         } 
//         for(let i=0; i<todo.length; i++){
//             if(delTask !== todo[i]){
//                 let validTask = prompt("task is not in the list, please enter the valid task!");
//                 if(validTask == todo[i]){
//                     todo.splice(i, 1);
//                     console.log("task deleted Succesfully!");
//                 }
//             } else if(delTask == todo[i]){
//                 todo.splice(i, 1);
//                 console.log("task deleted!");
//                 break;
//             }
//         } 
//     } 
//     if(req !== "quit" && req !== "add" && req !== "list" && req !== "delete"){
//         req = prompt("please enter the correct request!"); 
//     }

//     req = prompt("please enter your request!");
// }



// Triangle pattern
// let num = prompt("enter the number");

// for(let i=1; i<=num.length; i++){
//     for(let j=i; j<=i; j++){
//         console.log(`${j} `);
//     }
// }

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = "* ";
//     console.log(str.repeat(i));
// }


// Questions ->

//Q1) 
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

//Q2) count the digit of a number
// let number = 287152895642;
// let count = 0;

// let copy = number;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);


//Q3) sum the all digit of number
// let number = 2871525678894556;
// let sum = 0;

// let copy = number;

// while(copy > 0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

//Q4) find the factorial
// let num = prompt("enter the number!");
// let fact = 1;

// for(let i=1; i<=num; i++){123
 
//     fact *= i;
// }
// console.log(fact);

//Q5) find the largest number in an array
let arr = [10,23,110,45,65,87,12,0,100];
let largest = 0;

for(let i=0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(`largest number is: ${largest}`);