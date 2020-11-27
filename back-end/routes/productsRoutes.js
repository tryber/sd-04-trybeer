const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.fetchProducts);

router.get('/checkout', productsController.fetchProducts);

router.post('/checkout', productsController.newSale);

router.get('/orders', productsController.fetchSales);

// router.get('/orders/:id', productsController.fetchSales);

module.exports = router;
