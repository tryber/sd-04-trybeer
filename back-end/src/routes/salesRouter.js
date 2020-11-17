const { Router } = require('express');
const { salesController } = require('../controllers');

const salesRouter = Router();

salesRouter.get('/', salesController.getAllSalesController);

module.exports = salesRouter;
