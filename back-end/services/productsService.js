const { productsModel } = require('../models');

const listProduct = async () => productsModel.getAllProducts();

const listSales = async () => productsModel.getAllSales();

const newSale = async (payload) => productsModel.insertNewSale(payload);

const getSaleById = async (saleId) => productsModel.getSaleById(saleId);

const getSaleProducts = async (id) => productsModel.getSaleProducts(id);

module.exports = {
  listProduct,
  listSales,
  newSale,
  getSaleById,
  getSaleProducts,
};
