// async function hello() {
//     return 'Hey! there'
// }

// const sing = async() => {
//     // throw new Error('Pakkakelu')
//     return 'paadu gajala!! padu!'
// }

// sing()
//     .then((data) => {
//         console.log("Promise resolved", data)
//     })
//     .catch((err) => {
//         console.log('error undamma', err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'blue'];

async function rainbow() {
    for (const color of colors) {
        await delayedColorChange(color, 1000)
    }
}

async function printRainbow() {
    await rainbow();
    console.log('End of rainbow')
}