const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/register', router.userRouter)
app.use('/login', router.loginRoute);

module.exports = app;
