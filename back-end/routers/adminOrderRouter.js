const express = require('express');
const adminOrderController = require('../controllers/adminOrderController');

const router = express.Router();

router.get('/orders', adminOrderController.getAllOrders);

module.exports = router;
