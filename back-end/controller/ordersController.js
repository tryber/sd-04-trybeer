const ordersModel = require('../models/ordersModel');

const setOrder = async (req, res) => {

  const { id, total, num, street, date } = req.body
  await ordersModel.setOrder(id, total, num, street, date);
  const orders = await ordersModel.getOrder();
  res.status(200).json( 'Ordered' );
};

module.exports = {
  setOrder,
};
