
const express = require('express'); //import express
const app = express(); //set express to a variable to be used

app.use(express.json()); //sets the req bodies to content-type of json

// app.use(express.static('/trainer-card', '../trainerCard'));

app.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.render('../frontpage/index.html');
    next();
});

// app.use(express.static('../frontpage'));

const port = 3000;
app.listen(port, () =>
    console.log(`Server is listening on port ${port}`));
