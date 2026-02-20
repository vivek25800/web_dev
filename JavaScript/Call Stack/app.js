// ======== Call Stack in JavaScript ========
// Call means when we call the functions, and Stack is a data structure which is tempararilly 
//  store the function call and when function done its work it is automatically delete from stack.
// Example ->
// function hello() {
//     console.log("inside hello function.")
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello function.")
//     hello();
// }

// console.log("calling demo function.");
// demo();
// console.log("done, bye!");

// Example ->
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();