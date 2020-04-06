const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json()); //HTML Body를 Json으로 변경함
app.use(morgan('dev')); //Call에 대한 로그를 남겨주는 미들웨어

app.post('/users', (req, res) => {
    if(req.body.name === 'jack') {
        res.json({id: 1});
    } else {
        res.json({err: true});
    }
})

module.exports = app;