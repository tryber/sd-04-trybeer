const salesModel = require('../models/salesModel');
const { getCurrentDate } = require('../utils/date');

const insertSale = async (req, res) => {
  try {
    const { userId, totalPrice, deliveryAddr, deliveryNumber } = req.body;
    await salesModel.insertSale(
      userId,
      totalPrice,
      deliveryAddr,
      deliveryNumber,
      getCurrentDate(),
    );
    res.status(201).json({ message: 'Sale successfully created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  insertSale,
};
