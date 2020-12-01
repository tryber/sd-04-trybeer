const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { login } = require('./controllers/login');
const productController = require('./controllers/products');
// const { validateJWT } = require('./middlewares/validateJWT');
const { register } = require('./controllers/register');
const { userUpdate } = require('./controllers/profile');
const { getOrderByUserId } = require('./controllers/sale');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/images', express.static('images'));

app.post('/login', login);
app.get('/products', productController.getAll);

app.post('/register', register);

app.put('/profile', userUpdate);

app.get('/orders', getOrderByUserId)

app.listen(port, () => console.log(`Listening on port ${port}`));
