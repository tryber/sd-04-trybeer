const rescue = require('express-rescue');
const salesService = require('../services/salesService');


const getAllSales = rescue(async (req, res) => {
  const { email } =  req.query;
  const sales = await salesService.getSales(email);
  res.json(sales);
});

module.exports = { getAllSales };
