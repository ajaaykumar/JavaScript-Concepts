//  primitive values
// All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as primitive values.
// All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", so one has to use === null to test for null.

// All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values.

let Name = "Ajay" // String
let Age = 22 // number
let bool = true // boolean true/false
let balance = 2595486666558 // Bigint 

console.log(typeof Name);
console.log(typeof Age);
console.log(typeof bool);


console.log(typeof null) // object
/*
Null type
The Null type is inhabited by exactly one value: null.
*/

console.log(typeof undefined) // undefined
/*
Undefined type
The Undefined type is inhabited by exactly one value: undefined.
*/


