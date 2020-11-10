const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');

const router = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, '/images')));

app.use('/products', router.productsRouter);

module.exports = app;
