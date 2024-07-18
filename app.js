const express = require('express')
const app = express()
var path = require('path');
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/html/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/html/signup.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})