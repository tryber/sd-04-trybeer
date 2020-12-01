const orderModel = require('../models/orderModel');

const createOrders = (req, res) => {
  const { id: userId } = req.user;
  const { order } = req.body;
  const fullOrder = { ...order, userId };

  orderModel.create(fullOrder);

  console.log(fullOrder);
  res.send('ok');
};

module.exports = {
  createOrders,
};
