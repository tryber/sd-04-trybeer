const usersController = require('./usersController');
const productsController = require('./productsController');
const salesController = require('./salesController');
const { getProfile } = require('./adminController');

module.exports = {
  usersController,
  productsController,
  salesController,
  getProfile,
};
