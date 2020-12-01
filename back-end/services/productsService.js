const { productsModel } = require('../models');

const listProduct = async () => productsModel.getAllProducts();

const listSales = async () => productsModel.getAllSales();

const newSale = async (payload) => productsModel.insertNewSale(payload);

const getSaleById = async (saleId) => {
  const { date: oldDate, ...restOfSale } = await productsModel.getSaleById(saleId);
  const settedDate = new Date(new Date().setDate(oldDate.getDate() + 1));
  // console.log(settedDate.getUTCMonth());
  const date = `${settedDate.getUTCDate()}/${settedDate.getUTCMonth() + 1}`;
  return { ...restOfSale, date };
  // return await productsModel.getSaleById(saleId);
};

const getSaleProducts = async (id) => productsModel.getSaleProducts(id);

module.exports = {
  listProduct,
  listSales,
  newSale,
  getSaleById,
  getSaleProducts,
};
