// Classes are atempleate for creating objects.
// Classes in JS are built on prototypes but also have some syntax and semantics that are uniques to classes.
// Instead of creating many similar objects manually, we use a class to define their structure once.

// Example - 

class Human {
    //Properties
    age = 25;
    // make it private
    #weight = 80;
    height = 180;

    // Behaviour 
    walking() {
        console.log("I am walking");
        console.log(this.#weight); // print 80
    }

    running() {
        console.log("I am running");
    }
}
// Creating object 
const obj = new Human();
console.log(obj.age);
console.log(obj.height);
obj.walking();
console.log(obj.weight); // print 'undefined'












