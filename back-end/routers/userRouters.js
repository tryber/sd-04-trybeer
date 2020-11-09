const express = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddlewares');

const router = express.Router();

router.post('/', userMiddleware.validateUser , userController.userLogin);

module.exports = router;
