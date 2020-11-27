const router = require('express').Router();
const userMiddlewares = require('./middlewares/userMiddleware');
const userController = require('./controller/UserController');
const productsController = require('./controller/productsController');
const userProfile = require('./controller/userProfile');
const auth = require('./authentication/tokenValidator');

router.post('/login', userController.userLogin);

router.post('/register', userMiddlewares.isEmailAlreadyExists, userController.userRegister);

router.get('/products', auth, productsController.readProducts);

router.put('/profile', userProfile.userUpdate);

module.exports = router;
