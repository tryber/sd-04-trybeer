const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { login } = require('./controllers/login');
const productController = require('./controllers/products');
// const { validateJWT } = require('./middlewares/validateJWT');
const { register } = require('./controllers/register');
const { checkout } = require('./controllers/checkout');
const { userUpdate } = require('./controllers/profile');
const { getOrderByUserId, getAllSales } = require('./controllers/sale');
const getDetailController = require('./controllers/details');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('images'));

app.post('/login', login);
app.get('/products', productController.getAll);

app.post('/register', register);

app.post('/sales', checkout);
app.put('/profile', userUpdate);

app.get('/orders', getOrderByUserId);
app.get('/admin/orders', getAllSales);
app.get('/orders/:numeroDoPedido', getDetailController);
// app.post('/admin/orders')

app.listen(port, () => console.log(`Listening on port ${port}`));
