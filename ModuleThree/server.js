const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/name', (req, res) => {
    res.send('Hi!, What is your name?');
})

app.listen(port, () => {
    console.log(`the application is running on port ${port}`)
})