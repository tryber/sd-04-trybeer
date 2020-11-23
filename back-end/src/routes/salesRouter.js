const { Router } = require('express');
const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.get('/', salesController.getAllSalesController);
salesRouter.post('/', salesController.insertSale);

salesRouter.get('/details', salesController.getSaleById);

module.exports = salesRouter;
