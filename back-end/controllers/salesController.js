const rescue = require('express-rescue');
const { salesServices } = require('../services');
const { salesProductsModel } = require('../models');

const allSales = rescue(async (_req, res) => {
  const sales = await salesServices.allSalesSev();

  res.status(200).json(sales);
});

const finishSales = rescue(async (req, res) => {
  const { email, total, address, number, date, products } = req.body;

  const newSale = await salesServices.finishSalesServ(email, total, address, number, date);

  for (let i = 0; i < products.length; i += 1) {
    const { productId, quantity } = products[i];

    await salesProductsModel.postRegisterSalesProductsMod(newSale.saleId, productId, quantity);
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
