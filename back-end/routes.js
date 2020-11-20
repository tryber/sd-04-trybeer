const { Router } = require('express');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const salesController = require('./controllers/findSalesBySaleId');
const checkEmailInDatabase = require('./middlewares/checkEmailInDatabase');
const { validateJWT } = require('./middlewares/auth');

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
routes.get('/orders/:id', validateJWT, salesController.findSalesBySaleId);

module.exports = routes;
