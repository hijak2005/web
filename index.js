const express = require('express');
const app = express();
const {readFileSync} = require('fs');
const path = require('path');

app.use(express.static('./page'));

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './page/404.html'));
});

app.listen(8080, () => {
    console.log('listening on 8080...');
});