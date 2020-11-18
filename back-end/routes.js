const router = require('express').Router();
const userMiddlewares = require('./middlewares/userMiddleware');
const userController = require('./controller/UserController');
const productsController = require('./controller/productsController');

router.post('/login', userController.userLogin);

router.post('/register', userMiddlewares.isEmailAlreadyExists, userController.userRegister);

router.get('/products', productsController.readProducts);

module.exports = router;
