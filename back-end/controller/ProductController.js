const ProductModel = require('../models/ProductModel');

const showProducts = async (_req, res) => {
  try {
    const products = await ProductModel.getAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  showProducts,
};
