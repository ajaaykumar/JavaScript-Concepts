
const now = new Date()
console.log(now);
// JavaScript, however, understands the date based on a timestamp derived from Unix time, which is a value consisting of the number of milliseconds that have passed since midnight on January 1st, 1970.

// Get the current timestamp
console.log(now.getTime());

const epochTime = new Date(0)
console.log(`epochTime: ${epochTime}`);

// Initialize a new birthday instance
const birthday = new Date(1995, 6, 31);
console.log(birthday.getDay());
console.log(birthday.getMonth());
console.log(birthday.getFullYear());


