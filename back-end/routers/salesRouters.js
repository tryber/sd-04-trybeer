const express = require('express');

const orderController = require('../controllers/orderController');
const userMiddlewares = require('../middlewares/userMiddlewares');

const router = express.Router();

router.post('/', orderController.generateOrder);

module.exports = router;
