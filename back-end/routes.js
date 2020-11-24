const router = require('express').Router();

const userMiddlewares = require('./middlewares/userMiddleware');

const userController = require('./controller/UserController');

router.post('/login', userController.userLogin);

router.post('/register', userMiddlewares.isEmailAlreadyExists, userController.userRegister);

module.exports = router;
