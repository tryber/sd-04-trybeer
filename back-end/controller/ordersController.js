const orderModel = require('../models/orderModel');

const createOrders = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { order } = req.body;
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

  console.log(order)

  res.status(200).json(order);
};

module.exports = {
  createOrders,
  getById,
};
