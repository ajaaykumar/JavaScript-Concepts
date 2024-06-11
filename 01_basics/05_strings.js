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

// You can do a similar thing with the use of the addition assignment operator +=:
console.log('assignment operator: ');
console.log(a += ' ');
console.log(a += b);

// If you try to concatenate a number to a string, that number will be coerced to a string value. For example:
console.log('The '+ 3 + ' Musketeers');

// String comparison
// You can compare strings based on their alphabetical order and length using arithmetic comparison operators. The return value is a boolean.
console.log('String comparison: ');
console.log('Berry' < 'Copper'); // true
// because 'B' comes before 'C'

console.log('Berry' < 'Bingo'); // true
// because the first characters are the same and 'e' comes before 'i'

console.log('berry' < 'Copper'); // false
// because the comparison is case-sensitive and capital letters come first

/* The comparison is performed letter by letter, starting from the first one. 
And it is actually based on the Unicode order. 

For the same reason, '$' < '&' evaluates true – $ comes before & in the Unicode table.
*/


let quote = 'All generalizations are dangerous, even this one';
let quoteMark = 'All generalizations are dangerous, even this one!'
console.log(`quoteMark:  ${quote < quoteMark}`); //  quote lacks the final exclamation mark, so quoteMark is greater
console.log(`length ${quote.length < quoteMark.length}`);

// But template literals provide a feature called string interpolation, that simplifies the readability and makes the code more fluid.
// In short, you assemble the string by substituting the content of placeholders, ${}

const dog1 = 'Bach'
const dog2 = 'Bingo'
console.log(`My Two dogs are called ${dog1} and ${dog2}`);

// concat() method
let con1 = 'When candles are out,'
let con2 = 'all cats are grey.'
let con3 = con1.concat(' ',con2)
console.log(con3);

// toLowerCase() & toUpperCase() methods
let sentence1 = 'Always look on the bright side of life'
console.log(`toLowerCase: ${sentence.toLowerCase()}`);
console.log(`toUpperCase: ${sentence.toUpperCase()}`);

// includes() method






