const { Router } = require('express');
const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.post('/', salesController.insertSale);

module.exports = salesRouter;
