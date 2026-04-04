// Syntax for adding an event listener
// element.addEventListener(type, listener)
// element.addEventListener(type, listener, options)
// element.addEventListener(type, listener, useCapture)

// Example: Adding a click event listener to a button
// Get the button element
let button = document.getElementById('buttonClick');

// Add an event Listener to the button
button.addEventListener('click', function() {
    document.getElementById('myName').textContent = 'My name is Vivek Gupta';
    console.log('Button was clicked!');
});

// Change the text of a Paragraph
let btn2 = document.getElementById('anotherButton');

function changeText() {
    document.getElementById('myText').textContent = "Now i am becoming the destroyer of the world";
}
btn2.addEventListener('click', changeText);