const express = require('express');
const app = express();

const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render('randomNum.ejs', { num });
})

app.get('/r/:subreddit', (req, res) => {
    let { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit.ejs', {...data });
    } else {
        res.send(`Are you lost baby boi? ${subreddit} doesn't exist`)
    }
})

app.get('/cats', (req, res) => {
    const cats = ['blue', 'monty', 'python', 'sudo', 'apes', 'winston'];
    res.render('cats.ejs', { cats });
})

app.get('/search', (req, res) => {
    const { q, f } = req.query;
    res.send(`<h1>you sreached for: ${q} and ${f}</h1>`);
})

app.listen(3000, () => {
    console.log('Server is running')
})

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