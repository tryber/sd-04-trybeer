const router = require('express').Router();

const userMiddlewares = require('./middlewares/userMiddleware');

const userController = require('./controller/UserController');

const productController = require('./controller/ProductController');

const auth = require('./authentication/tokenValidator');

router.post('/login', userController.userLogin);

router.post('/register', userMiddlewares.isEmailAlreadyExists, userController.userRegister);

router.get('/products', productController.showProducts);

module.exports = router;
