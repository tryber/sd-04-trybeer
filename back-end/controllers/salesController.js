const rescue = require('express-rescue');
const { salesServices } = require('../services');
const { salesProductsModel } = require('../models');

const allSales = rescue(async (_req, res) => {
  const sales = await salesServices.allSalesSev();

  res.status(200).json(sales);
});

const finishSales = rescue(async (req, res) => {
  const { id, total, address, number, date, products, status } = req.body;

  const newSale = await salesServices.finishSalesServ(id, total, address, number, date, status);

  for (let i = 0; i < products.length; i += 1) {
    const { productId, quantity } = products[i];

    salesProductsModel.postRegisterSalesProductsMod(newSale.saleId, productId, quantity);
  }

  res.status(200).json(newSale);
});

const updateStatusCont = rescue(async (req, res) => {
  const { id } = req.body;

  const newStatus = await salesServices.updateStatusServ(id);

  res.status(200).json(newStatus);
});

module.exports = {
  allSales,
  finishSales,
  updateStatusCont,
};
