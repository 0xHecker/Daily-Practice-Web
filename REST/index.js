const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


let comments = [{
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    let { username, comment } = req.body;
    comments.push({ username, comment });
    res.send('It worked!!');
})

app.get('/tacos', (req, res) => {
    res.send('get /tacos request sent');
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`you have ordered ${meat} tacos of quantity ${qty}`)
    res.send('post /tacos responce sent');
})

app.listen(3000, () => {
    console.log('Listening to port 3000!')
})