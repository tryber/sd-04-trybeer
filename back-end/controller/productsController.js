const productsModel = require('../models/productsModel');

const readProducts = async (_, res) => {
  const products = await productsModel.read();

  res.status(200).json(products);
};

module.exports = {
  readProducts,
};
