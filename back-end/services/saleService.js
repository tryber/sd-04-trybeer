const saleModel = require('../models/saleModel');

const registerSaleService = async (userId, totalPrice, deliveryAdress,
  deliveryNumber, saleDate) => {
  const newSale = await saleModel.registerSale(userId, totalPrice, deliveryAdress,
    deliveryNumber, saleDate);
  return newSale;
};

const findAllSalesService = async () => {
  const allSales = await saleModel.findAllSales();
  return allSales;
};

const findSalesBySaleId = async (id) => {
  const sales = await saleModel.findOrderBySaleId(id);
  return sales;
};

const findOrderByUserIdService = async (userId) => {
  const order = await saleModel.findOrderByUserId(userId);
  return order;
};

module.exports = {
  registerSaleService,
  findAllSalesService,
  findSalesBySaleId,
  findOrderByUserIdService,
};
