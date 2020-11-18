const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { login } = require('./controllers/login');
const productController = require('./controllers/products');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/login', login);
app.get('/products', productController.getAll);

app.listen(port, () => console.log(`Listening on port ${port}`));
