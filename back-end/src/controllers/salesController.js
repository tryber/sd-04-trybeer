const { salesModel } = require('../models');
const { getCurrentDate } = require('../utils/date');

const getAllSalesController = async (_req, res) => {
  try {
    const data = await salesModel.getAllSales();
    if (!data.length) return new Error('Sales info not found');
    return res.status(200).json({ sales: data });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const insertSale = async (req, res) => {
  try {
    const { userId, totalPrice, deliveryAddr, deliveryNumber } = req.body;
    const result = await salesModel.insertSale2(
      userId,
      totalPrice,
      deliveryAddr,
      deliveryNumber,
      getCurrentDate(),
    );
    // res.status(201).json({ message: 'Sale successfully created' });
    res.status(201).json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await salesModel.getSaleById(id);
    res.status(200).json(sale);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Sale not found' });
  }
};

module.exports = {
  getAllSalesController,
  insertSale,
  getSaleById,
};
