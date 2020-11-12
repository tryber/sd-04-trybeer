const router = require('express').Router();

const userController = require('./controller/UserController');
// console.log(userController.userRegister());
router.post('/login', userController.userLogin);

router.post('/register', userController.userRegister);

module.exports = router;
