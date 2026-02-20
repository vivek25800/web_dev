

// Lets create a function which find the maximum value from a array of numbers

// x = findMax(1, 2, 3, 4, 5);

let maxNumber = findMax();
console.log(maxNumber);

function findMax() {
    const arguments = [1, 2, 3, 4, 5];
    let max = Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}