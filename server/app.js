const express = require('express'); //import express
const app = express(); //set express to a variable to be used

app.use(express.json()); //sets the req bodies to content-type of json

app.use(express.static('../frontend'))

app.get('/', (req, res) => {
    res.json({
        "Setting up": "the server",
        "Please": "Work...",
        "Good": "its Working"
    });
});


const port = 3000;
app.listen(port, () =>
    console.log(`Server is listening on port ${port}`));
