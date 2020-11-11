const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const loginController = require('./controllers/loginController');

require('dotenv/config');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(
  '/login',
  middleware.validations.loginValidation,
  loginController.userLogin,
);

app.use((err, _req, res, _next) => {
  res.status(404).send({ err });
});

app.listen(port, () => console.log('Example app listening on port port!'));
