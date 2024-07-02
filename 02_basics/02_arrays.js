
let marvel_heros = ['Spiderman','Thor','Caption America','Iron Man']
let dc_heros = ['Superman','batman','flash','green lantern']

console.log(`marvel_heros: ${marvel_heros}`)
// Push 
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// concate
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

//spread
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// Nested Arrays handling (flat method)
const another_array = [1,2,3,[4,5],[6,7,[4,9]]]
const flat_another_array = another_array.flat(Infinity)
// console.log(flat_another_array);


// Convert to Array
console.log(Array.isArray("Ajay"));
// Converts the objects to array
console.log(Array.from("Ajay"));
console.log(Array.from({"name":"Ajay"})); // intresting if not matching returns empty array 


// Array.of converts the multiole elements to array
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));






