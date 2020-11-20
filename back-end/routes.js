const { Router } = require('express');
const { validateJWT } = require('./middlewares/auth');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const salesController = require('./controllers/findSalesBySaleId');
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
<<<<<<< HEAD
routes.get('/orders/:id', validateJWT, salesController.findSalesBySaleId);
=======
routes.post(
  '/checkout',
  findUserIdByEmail,
  checkoutController,
);
>>>>>>> 934ee15344f0ee7f2c1bb04acc6ecf4a2f557488

module.exports = routes;
