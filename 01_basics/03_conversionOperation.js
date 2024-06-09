
let score = undefined
// let score = "1abc"
// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// converting to Number
//  "1" => 33
//  "1abc" => NaN
//  true => 1; false => 0
//  ""  => 0; "Ajay" => NaN
//  null => 0
//  undefined => NaN

// converting to Boolean
let isLoggedIn = "Ajay"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


let someValue = 33
let stringConverson = String(someValue)
// console.log(typeof stringConverson);
// console.log(stringConverson);

// ****************OPERATERS******************
let num1 = 33
let num2 = 45

// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1**num2)
// console.log(num1/num2)
// console.log(num1%num2)

// Increnetals

// postfix (x++, x--)
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.
let x = 3
let y = x++
//let Z = 3++ //Invalid left-hand side expression in postfix operation
// let Z = ++3  Invalid left-hand side expression in prefix operation
console.log(`x: ${x}`);
console.log(`y: ${y}`);


// prefix (++x, --x)
// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing. 
let a = 9
let b = ++a
console.log(`a: ${a}`);
console.log(`b: ${b}`);









