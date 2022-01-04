const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

let comments = [{
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
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

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    let foundComment = comments.find(c => c.id === id);
    res.render('comments/show', { foundComment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    let foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.render('/comments/edittext', { foundComment });
})

app.post('/comments', (req, res) => {
    let { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments')
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