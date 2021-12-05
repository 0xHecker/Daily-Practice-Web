const fakeRequest = (url) => {

    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here');
            }
            reject('Request Rejected')
        }, 1000)
    })

}

fakeRequest('/dogs/1')
    .then((succ) => {
        console.log('Done with request', ':', succ)
    })
    .catch((err) => {
        console.log("oh no!", err)
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('pink', 2000)
    .then(() => delayedColorChange('red', 1500))
    .then(() => delayedColorChange('yellow', 1500))
    .then(() => delayedColorChange('orange', 1500))
    .then(() => delayedColorChange('violet', 1500))