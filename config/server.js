const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.listen(80, function() {
    console.log('Servidor Online! [OK]');
});

module.exports = app;