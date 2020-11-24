const { getAllProductMod } = require('../models');

const getAllProductsCont = async (_req, res) => {
  const products = await getAllProductMod();
  res.status(200).json(products);
};

module.exports = {
  getAllProductsCont,
};
