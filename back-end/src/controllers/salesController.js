const { salesModel } = require('../models');
const { getCurrentDate } = require('../utils/date');

const getAllSalesController = async (req, res) => {
  try {
    const data = await salesModel.getAllSales();
    if (!data.length) return new Error('Sales info not found');
    return res.status(200).json({ sales: data });
  } catch (error) {
    return res.status(500).json({ message: 'intern error' });
  }
};

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
  getAllSalesController,
  insertSale,
};
