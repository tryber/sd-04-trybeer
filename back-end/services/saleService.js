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

const findSaleByIdService = async (saleId) => {
  const sale = await saleModel.findSaleById(saleId);
  return sale;
}

module.exports = {
  registerSaleService,
  findAllSalesService,
  findSaleByIdService,
}