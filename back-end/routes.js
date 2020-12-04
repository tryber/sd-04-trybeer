const router = require('express').Router();
const userMiddlewares = require('./middlewares/userMiddleware');
const userController = require('./controller/UserController');
const productsController = require('./controller/productsController');
const ordersController = require('./controller/ordersController');
const userProfile = require('./controller/userProfile');
const auth = require('./authentication/tokenValidator');

router.post('/login', userController.userLogin);

router.post('/register', userMiddlewares.isEmailAlreadyExists, userController.userRegister);

router.get('/products', auth, productsController.readProducts);

router.post('/products', auth, productsController.createSalesProducts);

router.get('/sales/:id', auth, productsController.getSalesProducts);

router.put('/profile', userProfile.userUpdate);

router.get('/orders', auth, productsController.readOrders);

router.post('/orders', auth, ordersController.createOrders);

router.get('/orders/:id', auth, ordersController.getById);

module.exports = router;
