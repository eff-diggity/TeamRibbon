const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const res = require("express/lib/response");

app.get('/', (req, res) => {
    res.send('Ribbon');
});

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`server is running on ${PORT}`));