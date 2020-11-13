const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const middleware = require('./middleware');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const path = require('path');
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
  loginController.userLogin,
);

app.post(
  '/register',
  middleware.validations.registerValidation,
  userController.userRegister,
  loginController.userLogin,
);

app.put('/profile', userController.userUpdate);

app.use((err, _req, res, _next) => {
  res.status(405).json({ err: err.message });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
