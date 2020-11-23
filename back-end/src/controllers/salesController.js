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
    const {
      userId,
      totalPrice,
      deliveryAddr,
      deliveryNumber,
      productId,
      quantity,
    } = req.body;
    const saleInserted = await salesModel.insertSale(
      userId,
      totalPrice,
      deliveryAddr,
      deliveryNumber,
      getCurrentDate(),
    );

    for (let i = 0; i < productId.length; i++) {
      salesModel.insertSalesProducts(saleInserted, productId[i], quantity[i]);
    }

    res.status(201).json({ message: 'Sale successfully created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { saleId } = req.query;

    if (saleId) {
      const orderDetails = await salesModel.getSaleById(saleId);
      return res.status(200).json(orderDetails);
    }
    return res.status(404).json({ message: 'Not Found' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllSalesController,
  getSaleById,
  insertSale,
  getSaleById,
};
