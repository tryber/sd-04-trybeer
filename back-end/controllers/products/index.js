// controller products
const productModel = require('../../models/products');

const getAll = async (_req, res) => {
  const products = await productModel.getAllProducts();
  console.log('produtos', products);
  if (products) return res.status(200).json(products);
  return res.status(500).json({ products: [] });
};

module.exports = { getAll };
