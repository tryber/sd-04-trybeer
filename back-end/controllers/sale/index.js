const { findOrderByUserId } = require('../../models/sales');

const getOrderByUserId = async (req, res) => {
  try {
    const { userId } = req.body;
    const order = await findOrderByUserId(userId);
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: 'No Orders Found' });
  }
};

module.exports = { getOrderByUserId };
