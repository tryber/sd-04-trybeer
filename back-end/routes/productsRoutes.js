const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.fetchProducts);

module.exports = router;
