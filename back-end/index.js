const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { loginUser } = require('./controllers/login');
const { createUser } = require('./controllers/register');
const { readProducts } = require('./controllers/products');
const { updateUser } = require('./controllers/profile');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Single use routes
app.get('/products', readProducts);
app.post('/login', loginUser);
app.post('/register', createUser);
app.put('/profile', updateUser);

app.listen(port, () => console.log(`Listening on port ${port}`));
