const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const middleware = require('./middleware');
const controllers = require('./controllers');
require('dotenv/config');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// caminho da pasta que disponibiliza as imagens
app.use('/images', express.static(path.join(__dirname, 'images')));

app.post(
  '/login',
  middleware.validations.loginValidation,
  controllers.login.userLogin,
);

app.post(
  '/register',
  middleware.validations.registerValidation,
  controllers.user.userRegister,
);

app.get('/products', controllers.products.getAllProducts);

app.put('/profile', controllers.user.userUpdate);

app.get('/orders', controllers.sales.getAllSales);

app.use((err, _req, res, _next) => {
  res.status(405).json({ err: err.message });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
