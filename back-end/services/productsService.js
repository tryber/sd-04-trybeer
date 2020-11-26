const { productsModel } = require('../models');

const listProduct = async () => productsModel.getAllProducts();

const listSales = async () => productsModel.getAllSales();

const newSale = async (payload) => productsModel.insertNewSale(payload);

module.exports = {
  listProduct,
  listSales,
  newSale,
};
