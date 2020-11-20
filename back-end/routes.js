const { Router } = require('express');
const { validateJWT } = require('./middlewares/auth');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const checkEmailInDatabase = require('./middlewares/checkEmailInDatabase');
const findUserIdByEmail = require('./middlewares/findUserIdByEmail');
const checkoutController = require('./controllers/checkoutController');

const routes = Router();

routes.post('/login', userController.userLogin);

routes.get('/profile/:id', userController.getUserByEmail);
routes.put('/profile', userController.saveEditController);
routes.post(
  '/register',
  checkEmailInDatabase,
  userController.registerUserController,
);
routes.get('/profile', userController.getUserByEmail);
routes.get('/products', validateJWT, productController.findAllProductsController);
routes.post(
  '/checkout',
  findUserIdByEmail,
  checkoutController);

module.exports = routes;
