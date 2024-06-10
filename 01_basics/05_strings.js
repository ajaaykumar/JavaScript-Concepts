// string interpolation
let name  = "Ajay"
let repoCount = 50
// console.log(`My Name is ${name} and i have ${repoCount} repos`)

// In JavaScript you can create strings using 3 Ways
// A String created using single quotes
let string1 = 'I am a very cool string!'

// A String created using double quotes
let string2 = "I am a very cool string!"

// A String created using backticks, also known as template literal
let string3 = `I am a very cool string!`

// Strings created in this way, as in the example above, are treated equally.

console.log(string1 === string2)
console.log(string1 === string3)
console.log(string2 === string3)

/* A string created using single quotes, double quotes, or backticks is generated as a primitive value, similar to numbers and boolean values.
 Primitive data are immutable, which means they cannot be changed. Also, they do not have any methods or properties. */


// The String() constructor generates a string as an object (when called with new).
let str1 = new String('What am I?')
console.log(`type of str1 with new: ${typeof str1}`);

let str2 = String('What am I?')
console.log(`type of str2 without new: ${typeof str2}`);

let str3 = 'What am I?'
console.log(`type of str3: ${typeof str3}`);

console.log(str1 === str2);
console.log(str1 === str3);
console.log(str2 === str3);


// *********** String indexing ***************
let str = 'larch'
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

//
console.log(str.charAt(2))


// You cannot mutate a string
let strMut = 'larchan'
console.log(typeof strMut);
strMut[0] = 'M' //This could throw an error if you are in strict mode
console.log(strMut);  // The value of our str variable is still 'larchan'


// length Property
let sentence = 'Always look on the bright side of the life'
console.log(`length Property: ${sentence.length}`);

// String concatenation
let a = 'when candles are out,'
let b = 'all cats are grey.'
let c = a + ' ' + b
console.log(c);






