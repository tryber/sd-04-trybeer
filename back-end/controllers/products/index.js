// controller products
const { getAll } = require('../../models/products');

const readProducts = async (req, res) => {
  const products = await getAll();
  if (products) return res.status(200).json(products);
  return res.status(500).json({ products: [] });
};

module.exports = { default: readProducts };
