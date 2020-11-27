const productsModel = require('../models/productsModel');
const orderModel = require('../models/orderModel');

const readProducts = async (_, res) => {
  const products = await productsModel.read();

  res.status(200).json(products);
};

const readOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await orderModel.readOrder(id);

  res.status(200).json(orders);
};

module.exports = {
  readProducts,
  readOrders,
};
