
// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
// }

// // declaration
// addTwoNumbers

// // function execution
// addTwoNumbers(55 + 66)

function addTwoNumbers(number1,number2) {
    return number1 + number2
}

// function execution
const result = addTwoNumbers(55, 66)
console.log("Result ", result);
 

function loginUserMessage(username){
    console.log("username: ",username)
    if (!username) {
        console.log("Please Enter UserName");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());
console.log(loginUserMessage("Ajay"));


// -----------------------------
// function calculateCartPrice(amount) {
//     return amount
// }

// console.log(calculateCartPrice(200));

// rest, spread operater
function calculateCartPrice(...amount) {
    return amount // returns array
}

console.log(calculateCartPrice(200,690,598));

// Function Scopes




