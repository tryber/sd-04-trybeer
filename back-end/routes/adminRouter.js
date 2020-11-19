const { Router } = require('express');
const { salesController } = require('../controllers');
const adminController = require('../controllers');
const middleware = require('../middlewares');

const adminRouter = Router();

adminRouter
  .get('/', middleware.authJWT, adminController.getProfile)
  .get('/:id')
  .put(
    '/',
    middleware.authJWT,
    middleware.validateUpdateStatusSales,
    salesController.updateStatusCont,
  );

module.exports = { adminRouter };
