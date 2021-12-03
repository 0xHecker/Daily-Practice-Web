document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
})

const input = document.querySelector('input');

//appending elements with js
const newDiv = document.createElement('div');
const h1s = document.createElement('h1');
h1s.textContent = 'This is H1';
newDiv.appendChild(h1s);

document.body.appendChild(newDiv);

input.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code)
})