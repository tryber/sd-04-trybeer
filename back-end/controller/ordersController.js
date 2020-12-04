const ordersModel = require('../models/ordersModel');

const setOrder = async (req, res) => {
  const { id, total, num, street, date } = req.body;
  await ordersModel.setOrder(id, total, num, street, date);
  res.status(200).json('Ordered');
};

const getOrders = async (_, res) => {
  const orders = await ordersModel.getOrders();
  res.status(200).json(orders);
}

module.exports = {
  setOrder,
  getOrders,
};
