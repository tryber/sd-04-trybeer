const router = require('express').Router();
const userController = require('./controller/UserController');
const productsController = require('./controller/productsController');

router.get('/', (_, res) => res.send('ok'));

router.post('/login', userController.userLogin);

router.post('/register', userController.userRegister);

router.get('/products', productsController.readProducts);

module.exports = router;
