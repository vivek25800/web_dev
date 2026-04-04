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

// For removing an event listener
// element.removeEventListener(type, listener, options)
// element.removeEventListener(type, listener, useCapture)

// Example: Removing the click event listener from the button
// btn2.removeEventListener('click', changeText); // This will not chnage the text when button is clicked


// Phases in Javascript Events
// 1. Capturing Phase: The event starts from the window and goes down to the target element.
// 2. Target Phase: The event reaches the target element and triggers any event listeners attached to it.
// 3. Bubbling Phase: After the target phase, the event bubbles back up from the target element to the window, triggering any event listeners attached to the ancestors of the target element.

let outer = document.getElementById('outer');
let middle = document.getElementById('middle');
let inner = document.getElementById('inner');

// Adding event listeners to the divs
outer.addEventListener('click', function() {
    console.log('Capturing Phase: Outer div');
}, true); // true for capturing phase

middle.addEventListener('click', function() {
    console.log('Capturing Phase: Middle div');
}, true); // true for capturing phase

inner.addEventListener('click', function() {
    console.log('Target Phase: Inner div');
});

outer.addEventListener('click', function() {
    console.log('Bubbling Phase: Outer div');
});

middle.addEventListener('click', function() {
    console.log('Bubbling Phase: Middle div');
});

inner.addEventListener('click', function() {
    console.log('Bubbling Phase: Inner div');
});





