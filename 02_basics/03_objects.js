// singleton
// Object.create

// Create a symbol
const mySymbol = Symbol("key0");
const mySymbol1 = Symbol("key1");

// objects literals
const JsUser = {
    name: "Ajay",
    "full name": "Ajay Bhangay",
    age: 28,
    [mySymbol]:"value1",
    mySymbol1:"value2",
    location: "Hyderabad",
    email: "ajay@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySymbol]);
// console.log(JsUser.mySymbol1);

// updating objects
// JsUser.email = 'Ajay@gmail.com'
// console.log(JsUser.email);

// Freeze the objects
// Object.freeze(JsUser)
// JsUser.email = 'Ajay@chatgpt.com'
// console.log(JsUser.email);

/*
// Create a symbol
const mySymbol = Symbol();

// Add a property to an object using a symbol
const myObject = {};
myObject[mySymbol] = "Hello, world!";

// Get the value of a property using a symbol
const value = myObject[mySymbol];

// Check if an object has a property with a given symbol
const hasProperty = myObject.hasOwnProperty(mySymbol);

// Delete a property from an object using a symbol
delete myObject[mySymbol];
*/

// Function
JsUser.greeting = function() {
    console.log("Hello Js User")
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User ${this["full name"]}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




