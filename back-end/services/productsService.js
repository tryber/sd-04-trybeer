const { productsModel } = require('../models');

const listProduct = async () => productsModel.getAllPrdoucts();

module.exports = {
  listProduct,
};
