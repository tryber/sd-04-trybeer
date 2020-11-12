const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.userProfile);

router.put('/', userController.editProfile);

module.exports = router;
