const orderModel = require('../models/orderModel');

const createOrders = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { order } = req.body;
    console.log(order);
    const fullOrder = { ...order, userId };
    const saleId = await orderModel.create(fullOrder);

    res.status(200).json({ saleId });
  } catch (e) {
    console.log(e.message);
  }
};

const getById = async (req, res) => {
  const orderId = req.params.id;
  const order = await orderModel.readById(orderId);

  res.status(200).json(order);
};

const updateOrder = async (req, res) => {
  const { id, status } = req.body;

  const result = await orderModel.orderUpdate(id, status);

  console.log(result);

  res.status(200).json({ result });
};

module.exports = {
  createOrders,
  getById,
  updateOrder,
};
