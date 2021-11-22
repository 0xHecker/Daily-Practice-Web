// let input = prompt('what would you like to do');

// let arr = ['Collect eggs', 'check food'];

// while (input !== 'quit') {
//     input = prompt('what would you like to do');

//     if (input === 'list') {
//         console.log('*********');
//         for (let i = 0; i < arr.length; i++)
//             console.log(`${i}: ${arr[i]}`);
//         console.log('displayed!!');
//         console.log('*********');
//     } else if (input === 'new') {
//         console.log('adding!!');
//         const newtodo = prompt('Ok, What is the new todo?');
//         arr.push(newtodo);
//         console.log(`added ${newtodo} successfully!`);
//     } else if (input === 'delete') {
//         let ele = prompt('Enter an index to delete');
//         parseInt(ele);
//         let deleted = arr.splice(ele, 1);
//         console.log(`deleted ${deleted}`);
//     }
// }



// console.log('okay quitting the app');


// function helpMe() {
//     let heros = ['batman', 'superman', 'black panther', 'Wonder Women'];

//     function cryForHelp() {
//         for (hero of heros) {
//             console.log(`${hero} help me!!`);
//         }
//     }
//     cryForHelp();
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

//methods
// const myMath = {
//     PI: 3.14159,
//     square: function(num) {
//         return num * num;
//     },
//     cube: function(num) {
//         return num ** 3;
//     },
//     sqrareRoot(num) {
//         return Math.sqrt(num);
//     }
// }

// const cat = {
//     name: 'Blue cat',
//     color: 'Grey',
//     breed: 'orange',
//     meow() {

//         console.log(this);
//     }
// }

// let cat2 = cat.meow;

// console.log(cat2());

// forEach
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function(el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// });

// console.log('');

// function print(element) {
//     console.log(element)
// }

//Map
// const texts = ['rofl', 'omg', 'ttyl'];
// const caps = texts.map(function(t) {
//     return t.toUpperCase();
// });

// console.log(caps);

///Arrow function

// const texts = ['rofl', 'omg', 'ttyl'];

// const caps = texts.map((t) => {
//     return t.toUpperCase();
// });

//Implicit return with arrow functions

// const rollDie = () => (Math.floor(Math.random() * 6) + 1)

// console.log('Statement 1');
// setTimeout(() => {
//     console.log('Print this statement')
// }, 3000);

// setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// let numbers = [1, 23, 5, 4, 65, 7, 63, 4, 54, 53, 3, , 4345, 45, 35, 4, 65, 4, 45, 3, 44, 34, 3, 45, 4, 665, 65, 7, 67, , 5, 45, 54];

// let elements = numbers.filter(n => (n > 50));

//Reduce

// numbers = [23, 5, 4, 65, 7, 63, 4, 54, 53, 3, 33, 42, 45, 35, 4, 65, 4, 45, 3, 44, 34, 3, 45, 4, 66, 65, 7, 67, 5, 45, 54];

// const sumNums = numbers.reduce((sum, nums) => sum + nums);

// const maxNum = numbers.reduce((max, num) => {
//     if (num < max) {
//         return num;
//     }
//     return max;
// })

// this keyword with arro function

// const person = {
//     firstName: 'Sai',
//     lastName: 'Shanmukh',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName());
//         }, 3000)
//     }
// }

///Spread

// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs];

// let a = 'Hello';

// b = [...a]

const dataForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123',
    username: 'tfunkei'
}

const newUSer = {...dataForm, id: 2345, isAdmin: false }