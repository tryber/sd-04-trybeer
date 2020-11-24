const orderModel = require('../model/orderModel');
const userModel = require('../model/userModel');
// https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
const generateOrder = async (req, res) => {
  try {
    const { email, total, address, number } = req.body;
    const user = await userModel.findByEmail(email);
    const date = new Date().toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    await orderModel.createOrder(user.id, total, address, number, date);
    res.status(200).json({ message: 'Pedido registrado' });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: 'erro' });
  }
};

module.exports = {
  generateOrder,
};
