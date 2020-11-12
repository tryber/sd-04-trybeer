const express = require('express');
const loginController = require('../controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', loginValidation.validateLoginInput, loginController.login);

module.exports = router;
