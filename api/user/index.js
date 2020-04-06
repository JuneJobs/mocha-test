var express = require('express');
var app = express();
var morgan = require('morgan');
app.use(morgan('dev'));

app.get('/users', (req, res) => {
    res.json({id: 1});
})

module.exports = app;