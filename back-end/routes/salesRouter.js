const { Router } = require('express');
const { salesController } = require('../controllers');
const middleware = require('../middlewares');

const salesRouter = Router();

salesRouter
  .post('/', middleware.authJWT, middleware.validateFinishSales, salesController.finishSales)
  .get('/', middleware.authJWT, salesController.allSales);

module.exports = { salesRouter };
