const accountId = 12345
let accoutnName = "Vivek Gupta"
var accountEmail = "vivek@hello.com"
accountCity = "Ballia"
let accountState;

// console.table([accountId, accoutnName, accountEmail, accountCity])

//accountId = 45689
accoutnName = "Vinay Gupta"
accountEmail = "vinay@hello.in"
accountCity = "Varanasi"

/*
Prefer not use var because an issue in block scope and functional scope
*/

console.table([accountId, accoutnName, accountEmail, accountCity, accountState])

function sum(a, b) {
    return a + b;
}

console.log(sum(4,5));

