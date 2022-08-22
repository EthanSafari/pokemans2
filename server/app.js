const express = require('express'); //import express
const app = express(); //set express to a variable to be used

app.use(express.json()); //sets the req bodies to content-type of json

app.get('/', (req, res) => {

});


const port = 5000;
app.listen(port, () =>
    console.log(`Server is listening on port ${port}`));
