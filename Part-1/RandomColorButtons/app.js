// let buttons = document.querySelectorAll('button');
// let h1s = document.querySelectorAll('h1');

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         button.style.backgroundColor = makeRandColor();
//     });
// }

// for (let h1 of h1s) {
//     h1.addEventListener('click', function() {
//         h1.style.backgroundColor = makeRandColor();
//     });
// }

// function makeRandColor() {
//     let num1 = Math.floor(Math.random() * 255);
//     let num2 = Math.floor(Math.random() * 255);
//     let num3 = Math.floor(Math.random() * 255);
//     let randColor = `rgb(${num1},${num2},${num3})`;

//     return randColor;
// }

// using 'This' keyword
let buttons = document.querySelectorAll('button');
let h1s = document.querySelectorAll('h1');

for (let button of buttons) {
    button.addEventListener('click', colorize);
}

for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

function makeRandColor() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    let randColor = `rgb(${num1},${num2},${num3})`;

    return randColor;
}