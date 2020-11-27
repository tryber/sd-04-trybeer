const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/login', userController.loginUser);

router.post('/register', userController.registerUser);

router.put('/updateUser', userController.updateUser);

router.get('/admin/orders', (req, res) => console.log('ROUTES', req.body), userController.getUserOrders);

module.exports = router;
