// Change the text of h1 tag
// console.log(document.h1.innerText);


// getElemntByClassName
// let smallImages = document.getElementsByClassName("oldImg");
// for(let i = 0; i < smallImages.length; i++){
//     // console.dir(smallImages[i]);
//     // console.dir(smallImages[i].src);
//     // console.dir(smallImages[i].className);


//     // changed images
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of img no. ${i} is changed.`);
// }

// getElementByTagName
// for paragraph
// console.log(document.getElementsByTagName("p"));
// // console.log(document.getElementsByTagName("p")[1].innerText = "abcdefg");


// // Query Selectors
// // Allows us to use any CSS selector
// // Syntax
// document.querySelector("p");  // Selects first p element
// document.querySelector("#idName");  // Selects first element with id = myId
// document.querySelector(".className");  // Selects first element with class = myClass

// // for all similar selectors
// document.querySelectorAll("p");  // Selects all p elements

// // Example
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("p"));

// console.dir(document.querySelectorAll("img"));


// Change the color of every anchor tag
// let links = document.querySelectorAll(".box a");

// // for(let i=0; i<links.length; i++){
// //     links[i].style.color = "red";
// // }

// for(link of links){
//     link.style.color = "green";
// }








// Practice Qs)
// Add the following elements to the container using only javascript and the DOM methods.
// i) a <p> with red text that says "Hey i'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a <div> with the black border and pink background color with following element inside of it.
//      => another <h1> that says "I'm a div"
//      => a <p> that says "Me Too!"

// i)
// let para1 = document.createElement('p');   // Create a p tag
// para1.innerText = "Hey I'm red!";  // Insert the text inside p tag

// document.querySelector('body').append(para1);  // append on body element

// para1.style.color = 'red';  // provide the color property
// console.dir(para1);  // finally print the output

// // ii)
// let heading = document.createElement('h3');
// heading.innerText = "I'm blue h3!";

// document.querySelector('body').append(heading);

// heading.style.color = 'blue';
// console.dir(heading);

// // iii)
// let division = document.createElement('div')
// division.classList.add('property');
 
// // division.style.border = '2px solid black';
// // division.style.backgroundColor = 'pink';
// // division.style.width = "200px";
// // division.style.height = "200px";

// document.querySelector('body').append(division);

// let h1 = document.createElement('h1')
// h1.innerText = "I'm a div!";

// document.querySelector('div').append(h1);

// let para = document.createElement('p');
// para.innerText = "ME TOO!";

// document.querySelector('div').append(para);


// iii) 
// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para = document.createElement('p');

// h1.innerText = "I'm a div!";
// para.innerText = "ME TOO!";

// h1.append(div);
// para.append(div);
// div.classList.add('property');

// document.querySelector('body').append(div);


// Practice Q.)
// Q1) Create a new input and button element on the page using Javascript only. Set the text of button to "Click me".
// let input = document.createElement('input');
// let btn = document.createElement('button');

// btn.innerText = "Click me";

// document.querySelector('body').append(input);
// document.querySelector('body').append(btn);


// // Q2) Add following attributes to the element:
// //     -> Change placeholder value of the input to "username"
// //     -> Change the id of the button to "btn"
// input.setAttribute('placeholder', 'username');
// btn.setAttribute('id', 'btn');


// // Q3) Access the btn using the querrySelector and button id. Change the button background color to blue and text color to white.
// btn = document.querySelector('button');
// btn.classList.add('button');


// // Q4) Create an h1 element on the page and set its to "DOM Practice" underlined. Change its color purple.
// let h1 = document.createElement('h1');
// h1.innerHTML = "<u>DOM Practice</u>";

// h1.classList.add('h1');
// document.querySelector('body').append(h1);


// // Q5) Create p tag on the page and set its text to "Apna College Dleta Practice", where Delta is blod.
// let para2 = document.createElement('p')
// para2.innerHTML = "Apna College <b>Delta</b> Practice";

// document.querySelector('body').append(para2);






