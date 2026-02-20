
// ===== onclick method =====
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Button was clicked!");
//     alert("Button was clicked!");
// }

// // ->
// function sayHello() {
//     console.log("Hello!");
// }
// btn.onclick = sayHello;

// for multiple buttons
// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//    btn.onclick = sayHello
// }

// function sayHello() {
//     alert(`Hello!`);
// }; 


// ==== onmouseenter method ====
// let btns = document.querySelectorAll("button");
// console.log(btns);

// for(btn of btns){
//     btn.onmouseenter = sayHello;
//     btn.onmouseenter = function () {
//         alert("Hello!");
//     }
// }

// function sayHello() {
//     console.log("Hello!");
// }


// ====== Event Listener ======

// ====== addEventListener ======
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
// }

// function sayHello() {
//     console.log("Hello!");
// }

// function sayName(){
//     console.log("Vivek Gupta");
// }

// dobule click event
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener("mouseenter", function() {
//         console.log("you double clicked me!");
//     })
// }

// ====== this in Event Listener =======
// When 'this' is used in a callback of event handler of something, it refers to that something

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log(this);
//     console.log(this.innerText);
//     console.log(this.innerHTML);
//     this.style.backgroundColor = "red";
// });

// => 'this' keyword for multiple elements
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);


// till now we leared about mouse event now,
// ===== Keyboard Event ====== 

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log("key was pressed");
// })

// inp.addEventListener("keyup", function(event) {
//     console.log(event);
//     console.log("key was pressed");
// });

// 'key' and 'code' event properties
// inp.addEventListener("keydown", function(event) {
//     console.log("Key = ", event.key);
//     console.log("Code = ", event.code);
//     console.log("key was pressed");
// })

// character move in every directions
// inp.addEventListener("keydown", function(event) {
//     console.log("Code = ", event.code);
//     if(event.code == "ArrowUp"){
//         console.log("character moved up");
//     } else if(event.code == "ArrowDown"){
//         console.log("character moved down");
//     } else if(event.code == "ArrowLeft"){
//         console.log("character moved left");
//     } else if(event.code == "ArrowRight"){
//         console.log("character moved right"); 
//     }
// })


// ====== Form Event =======
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log("form submitted");
// })

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.dir(form);

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

//     let user = this.elements[0];  // form.elements
//     let pass = this.elements[1];  // form.elements

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hii ${user.value} your password is set to ${pass.value}.`);

// });

// ==== More Events ====
// === Change event ===
// The change event occurs when the value of an element has been changed (only on <input>, <select>, and <textarea> elements).
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("input changed");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function() {
//     console.log("input changed");
//     console.log("final value = ", this.value);
// });

// Activity => whatever which we type, that is store in a paragraph.
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText = inp.value;
// })

// Activity 2 => change div color
// let inp = document.querySelector("#text");
// let div = document.querySelector(".color-div");
// let p = document.querySelector("p");

// inp.addEventListener("change", function() {
//     div.style.backgroundColor = inp.value;
//     p.innerText = inp.value;
// })

// ==== Practice Questions ====
// Q1) Try out the following events in Event Listener on your own:
// - mouuseout
// let test = document.getElementById("test");

// test.addEventListener("mouseout", (event) => {
//     event.target.style.color = "purple";

//     setTimeout(() => {
//         event.target.style.color = "";
//     }, 1000);
// }, false, );

// test.addEventListener("mouseout", (event) => {
//     event.target.style.color = "yellow";

//     setTimeout(() => {
//         event.target.style.color = "";
//     }, 500);
// }, false, );

// - KeyPress
// let p = document.getElementById("para");
// let inp = document.getElementById("sample");

// inp.addEventListener("keypress", function(event) {
//     p.textContent += `${event.code}`;
// });

// Q2) Create a button on the page using javascript. Add an event listener to the button that changes the button's color to green when it is clicked.
// let btn = document.createElement("button");
// btn.innerText = "Click me";
// document.querySelector("body").append(btn);

// btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "green";
// })

// // Q3) Create input and h1. When you enter yur name in input box, then h1 text will be change to your name.
// let h1 = document.createElement("h1");
// let input = document.createElement("input"); 

// input.setAttribute('type', 'text');
// input.setAttribute('placeholder', 'Enter your name')

// document.querySelector("body").append(h1, input);

// input.addEventListener("change", function() {
//     h1.innerText = input.value;
// })


// ===== Event Bubbling =====
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function(event) {
//     event.stopPropagation();  // for stopping event bubbling
//     console.log("div was clicked!");
// })

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked!");
// })

// for(lis of li){
//     lis.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked!");
//     })
// }


// // Activity => Todo App
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    console.log(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    input.value = "";
});

ul.addEventListener("click", function(event) {
    // console.dir(event.target.nodeName);
    // console.log("button clicked");

    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

// // let delBtns = document.querySelectorAll(".delete");
// // for(delBtn of delBtns){
// //     delBtn.addEventListener("click", function() {
// //         let parent = this.parentElement;
// //         console.log(parent);

// //         parent.remove();
// //     })
// // }

