const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', router.userRouter)

module.exports = app;
