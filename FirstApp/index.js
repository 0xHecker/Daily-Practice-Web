const express = require('express');
const app = express();

const path = require('path');

//responds to every request
// app.use((req, res) => {
//     console.log(req);
//     console.log("We got a new request");
//     res.send({ color: 'green' });
// })

// app.get('/r/:subreddit/:postID', (req, res) => {
//     const { subreddit, postID } = req.params;
//     res.send(`
//     Viewing post ${postID}.
//     <h1>Browsing the ${subreddit} subreddit.</h1>`)
// })


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/search', (req, res) => {
    const { q, f } = req.query;
    res.send(`<h1>you sreached for: ${q} and ${f}</h1>`);
})

app.listen(3000, () => {
    console.log('Server is running')
})