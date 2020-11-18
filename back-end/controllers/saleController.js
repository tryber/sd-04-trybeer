const rescue = require('express-rescue');
const saleService = require('../services/saleService');
const saleModel = require('../models/saleModel');

const getAllUserSales = rescue(async (req, res) => {
  const { email } = req.query;
  const sales = await saleService.getSalesId(email);
  res.json(sales);
});

const saleRegister = async (req, res) => {
  const { nameAdress, numberAdress, cart, user, totalPrice } = req.body;

  const { id } = user;

  const sale = await saleService.postNewSale(id, nameAdress, numberAdress, cart, totalPrice);

  return res.status(200).json(sale);
};

const getSales = async (_req, res) => {
  const sales = await saleModel.getSales();

  const allSales = sales.map(([id, userId, totalPrice, nameAdress, numberAdress, date, status]) => (
    { id, userId, totalPrice, nameAdress, numberAdress, date, status }
  ));

  return res.status(200).json(allSales);
};

module.exports = {
  saleRegister,
  getSales,
  getAllUserSales,
};
