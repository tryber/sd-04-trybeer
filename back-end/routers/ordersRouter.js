const express = require('express');

const productController = require('../controllers/productController');
const validateToken = require('../auth/validateToken');

const router = express.Router();

router.post('/', validateToken, productController.getOrderByUserIdController );

//router.put('/', userController.editProfile);

module.exports = router;
