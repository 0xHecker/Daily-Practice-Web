const button = document.querySelector('button');
const head = document.querySelector('h1');

button.addEventListener('click', () => {
    let randColor = makeRandColor();
    head.innerText = randColor;
    document.body.style.backgroundColor = randColor;
});

function makeRandColor() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    let randColor = `rgb(${num1},${num2},${num3})`;

    return randColor;
}