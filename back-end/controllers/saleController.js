const saleService = require('../services/saleService');

const findAllSalesController = async (_req, res) => {
  try {
    const allSales = await saleService.findAllSalesService();
    return res.status(200).json(allSales);
  } catch (_e) {
    return res.status(500).json({ message: 'internal error ' });
  }
};

const findSaleByIdController = async (req, res) => {
  try {
    const { saleId } = req.body;
    const sale = await saleService.findSaleByIdService(saleId);

    return res.status(200).json(sale);
  } catch (_e) {
    return res.status(500).json({ message: 'internal error' });
  }
};

module.exports = {
  findAllSalesController,
  findSaleByIdController,
};
