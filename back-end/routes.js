const router = require('express').Router();

const userController = require('./controller/UserController');

router.post('/login', userController.userLogin);

router.post('/register', userController.userRegister);

module.exports = router;
