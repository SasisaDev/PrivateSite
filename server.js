const express = require('express');
const path = require('path');
const html = require('html');

let app = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile("dist/index.html", { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});