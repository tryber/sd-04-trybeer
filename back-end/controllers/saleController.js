const saleService = require('../services/saleService');

const findAllSalesController = async (_req, res) => {
  try {
    const allSales = await saleService.findAllSalesService();
    return res.status(200).json(allSales);
  } catch (_e) {
    return res.status(500).json({ message: 'internal error ' });
  }
};

const findSalesBySaleId = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await saleService.findSalesBySaleId(id);
    return res.status(200).json(sales);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: 'No sale found' });
  }
};

const findOrderByUseridController = async (req, res) => {
  try {
    const { id } = req.user;
    const order = await saleService.findOrderByUserIdService(id);
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: 'No Orders Found' });
  }
};

module.exports = {
  findAllSalesController,
  findSalesBySaleId,
  findOrderByUseridController,
};
