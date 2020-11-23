require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const salesProductsController = require('./controllers/salesProductsController');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static('images'));

app.use('/users', usersController);
app.use('/login', loginController);
app.use('/products', productsController);
app.use('/sales', salesController);
app.use('/order-details', salesProductsController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
