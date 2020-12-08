const ordersModel = require('../models/ordersModel');

const setOrder = async (req, res) => {
  const { id, total, num, street, date, details } = req.body;
  const orderCreation = await ordersModel.setOrder(
    id,
    total,
    num,
    street,
    date,
  );
  await details.forEach((elem) => ordersModel.setOrderDetails(orderCreation, elem[0], elem[1]));
  res.status(200).json('Ordered');
};

const getOrders = async (_, res) => {
  const orders = await ordersModel.getOrders();
  res.status(200).json(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await ordersModel.getOrderById(id);
  const saleDetails = await ordersModel.getSaleById(id);

  res.status(200).json([order, ...saleDetails]);
};

module.exports = {
  setOrder,
  getOrders,
  getOrderById,
};
