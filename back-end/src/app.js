const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', router.userRouter);
app.use('/login', router.loginRouter);

module.exports = app;
