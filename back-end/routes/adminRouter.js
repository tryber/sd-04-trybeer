const { Router } = require('express');
const { salesController, adminController } = require('../controllers');
const middleware = require('../middlewares');

const adminRouter = Router();

adminRouter
  .get('/', middleware.authJWT, adminController.getProfile)
  .get('/orders/:id', middleware.authJWT, adminController.getAdminSales)
  .put(
    '/',
    middleware.authJWT,
    middleware.validateUpdateStatusSales,
    salesController.updateStatusCont,
  );

module.exports = { adminRouter };
