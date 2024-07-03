// const tinderUser = new Object() // singleton 
const tinderUser = {}

tinderUser.id = 101
tinderUser.name = 'Ramesh'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Ramesh@chatgpt.com",
    userdetails: {
        userFullDetails:{
        firstName:"Ramesh",
        lastName:'Pakiya',
        fullname: "Ramesh Pakiya"
    }
}
}
// accessing objects 
console.log(regularUser.userdetails.userFullDetails.firstName);


// Combining objects

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}

// const obj3 = Object.assign({}, obj1, obj2)
// Insted use spread operater
const obj3 = {...obj1,...obj2}
console.log(obj3);


const users = [
    {
        userName:"Ajay"
    },
    {
        userName:"Ramesh"
    },
    {
        userName:"Pakiya"
    }
]
console.log(users[0].userName);
console.log(Object.keys(regularUser));
console.log(Object.keys(regularUser.userdetails.userFullDetails));
console.log(Object.values(regularUser.userdetails.userFullDetails));
// console.log(Object.entries(regularUser.userdetails.userFullDetails));

// Check if key exists in objects
console.log(regularUser.hasOwnProperty('email'));



// Another way to exteact data from objects
const course = {
    courseName:"javaScript for beginners",
    coursePrice: 999
}

// 1 usual way to get the data from objects
console.log(`1 way: ${course.courseName}`);

// 2 another way destructuring
const {courseName} = course
console.log(`2 way: ${courseName}`);

// you can also add alise
const {courseName: Name} = course
console.log(`alise name: ${Name}`);


// JSON
{
    "name":"Ajay",
    "age":"28"
}
