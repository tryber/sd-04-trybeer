const { Router } = require('express');
const { validateJWT } = require('./middlewares/auth');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const saleController = require('./controllers/saleController');
const checkEmailInDatabase = require('./middlewares/checkEmailInDatabase');
const findUserIdByEmail = require('./middlewares/findUserIdByEmail');
const checkoutController = require('./controllers/checkoutController');
//  const getDataTestController = require('./controllers/getDataTestController');

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
routes.get(
  '/products',
  validateJWT,
  productController.findAllProductsController,
);
routes.get('/orders', validateJWT, saleController.findAllSalesController);
routes.get('/orders/:id', validateJWT, saleController.findSalesBySaleId);
routes.post('/checkout', findUserIdByEmail, checkoutController);
<<<<<<< HEAD
=======
//  routes.post('/checkout', getDataTestController);
>>>>>>> 432ab672fbc9009272681f0ed185360c2462ad09

module.exports = routes;
