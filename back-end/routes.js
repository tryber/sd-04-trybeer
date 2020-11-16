const { Router } = require('express');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const checkEmailInDatabase = require('./middlewares/checkEmailInDatabase');

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
routes.get('/products', productController.findAllProductsController);

module.exports = routes;
