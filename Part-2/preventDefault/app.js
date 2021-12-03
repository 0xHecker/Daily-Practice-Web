const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // const tweetInput = document.querySelectorAll('#tweetForm')[0].elements.username.value;
    // const usernameInput = document.querySelectorAll('#tweetForm')[1].elements.tweet.value;
    const tweetInput = tweetForm.elements.username;
    const usernameInput = tweetForm.elements.tweet;
    addTweet(tweetInput, usernameInput);
});

function addTweet(tweetInput, usernameInput) {

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(usernameInput.value);
    newTweet.append(bTag);
    newTweet.append(` 
                        - ${tweetInput.value}`);
    tweetsContainer.append(newTweet);
    // const tweetsContainer = document.querySelectorAll('#tweets');
    // tweetsContainer.append(newTweet);
    console.log(newTweet)
    tweetInput.value = '';
    usernameInput.value = '';
}

//event deligation
tweetsContainer.addEventListener('click', function(e) {
    // e.target.remove();
    e.target.nodeName === 'LI' && e.target.remove();
})

// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     });
// }


/// event bubbling happens when one class or id in side of another class or id, we can prevent from bubbling by adding stopPropagating();

// to select the text in the box
//document.querySelectorAll('#tweetForm')[0].elements.tweet.value = 'dogdogdogdogdogdog';
// const usernameInput = document.querySelectorAll('input')[0];
// const tweetInput = document.querySelectorAll('input')[1];

const anotherH1 = document.createElement('h1');
const divElement = document.createElement('div');
const inputField = document.createElement('input');

anotherH1.innerText = 'This is H1';
document.body.append(anotherH1);
inputField.className = 'inputfield';
divElement.append(inputField);
divElement.className = 'divelement';
document.body.append(divElement);

const testInput = document.querySelector('.divelement');

testInput.addEventListener('input', () => {
    anotherH1.innerText = document.querySelector('.inputfield').value;
    //anotherH1.innerText = divElement.elements.inputfield.value;
    // above one only works with 'name'
    console.log('Input given!!');
});