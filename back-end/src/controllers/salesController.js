const { salesModel } = require('../models');

const getAllSalesController = async (req, res) => {
  try {
    const data = await salesModel.getAllSales();
    if (!data.length) return new Error('Sales info not found');
    return res.status(200).json({ sales: data });
  }  catch (error) {
    return res.status(500).json({ message: "intern error" });
    
  }
};

module.exports = {
  getAllSalesController,
};