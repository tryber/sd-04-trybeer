const Schema = require('@mysql/xdevapi/lib/DevAPI/Schema');
const { Router } = require('express');
const { salesController } = require('../controllers');
const middleware = require('../middlewares');

const salesRouter = Router();

salesRouter
  .post('/', middleware.authJWT, middleware.validateFinishSales, salesController.finishSales)
  // .put('/', middleware.authJWT, middleware.validateUpdateStatusSales, salesController.updateStatusCont)
  .get('/', middleware.authJWT, salesController.allSales);

module.exports = { salesRouter };
