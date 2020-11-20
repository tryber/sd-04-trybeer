const salesModel = require('../models/salesModel');

const findSalesBySaleId = async (id) => {
  const sales = await salesModel.findSalesBySaleId(id);
  return sales;
};

module.exports = {
  findSalesBySaleId,
};
