const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

// router.get('/login', userController.loginUser);

router.post('/login', userController.loginUser);

router.post('/register', userController.registerUser);

router.put('/updateUser', userController.updateUser);

module.exports = router;
