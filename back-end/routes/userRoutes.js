const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/register', userController.registerUser);
router.post('/register', userController.registerUser);

module.exports = router;
