const adminOrderModel = require('../model/adminOrderModel')

const getAllOrders = async (_req, res) => {
  try {
    const orders = await adminOrderModel.getAllSales();

    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ error: 'Nenhuma venda encontrada' });
  }
};

module.exports = {
  getAllOrders,
};
