// Array
/*In JavaScript, an array is an ordered collection of elements that can hold different 
data types. You can define an empty array using square brackets `[]`.  */

const myArr = [1,2,3,4,5]
// console.log(myArr);

/* Array indices:
Array objects cannot use arbitrary strings as element indexes (as in an associative array) 
but must use nonnegative integers (or their respective string form) 
*/

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const newArray = new Array(1,2,3,4,5,6,7)
// console.log(newArray[0])
// Array Methods

// newArray.push(9)
// newArray.pop()

// newArray.unshift(9)
// newArray.shift()

// console.log(newArray.includes(3))
// console.log(newArray.indexOf(1))

const newArr = newArray.join()

// console.log(newArray)
// console.log(`${typeof newArr} ${newArr}`)

// slice, splice : 
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log('A ', fruits);
const myBest = fruits.slice(1, 3);
console.log(myBest);
console.log('B ', fruits);

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
const otherBest = fruits.splice(1, 3);
console.log('C ', fruits); // overwrites the original array.


