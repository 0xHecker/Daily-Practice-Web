// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log("All done with request!!!")
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price)
// }

// req.onerror = function() {
//     console.log("Error!!")
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd');
// req.send()

// fetch('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log("Response waiting to parse", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('Data Parsed')
//         console.log(data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Oh noo..", err)
//     })

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price)
//     } catch (error) {
//         console.log(error)
//     }
// }

// axios.get('https://api.cryptonator.com/api/full/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Error!", err)
//     })

// const fetchBitcoinPrice = async() => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/full/btc-usd');
//         console.log(res.data.ticker.price)
//     } catch (error) {
//         console.log('Error!!', error)
//     }
// }

const jokes = document.querySelector('#jokes');

const clickListner = document.querySelector('#joke-btn');

const addNewJoke = async() => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async() => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch (err) {
        return 'Sorry No Jokes Available!!! :('
    }

}


clickListner.addEventListener('click', addNewJoke)