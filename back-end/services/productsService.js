const { productsModel } = require('../models');

const listProduct = async () => productsModel.getAllProducts();

const listSales = async () => productsModel.getAllSales();

module.exports = {
  listProduct,
  listSales,
};
