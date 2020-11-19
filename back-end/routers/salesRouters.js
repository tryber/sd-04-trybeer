const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/:id', salesController.getDetails);

module.exports = router;
