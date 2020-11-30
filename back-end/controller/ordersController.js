const orderModel = require('../models/orderModel');

const createOrders = (req, res) => {
  const { id } = req.user.id;

  console.log(id)
  console.log(req.body)
};

module.exports = {
  createOrders,
}
