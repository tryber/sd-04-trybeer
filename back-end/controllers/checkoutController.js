const saleService = require('../services/saleService');
const salesProductsSerivce = require('../services/salesProductsService');

const checkoutController = async (req, res) => {
  const { total, adress, number, date } = req.body;
  const { productId, quantity } = req.body.product;
  const { id } = req.user;
  try {
    const registeredSale = await saleService.registerSaleService(
      id,
      total,
      adress,
      number,
      date,
    );
    await salesProductsSerivce.registerSalesProductsService(
      registeredSale.saleId,
      productId,
      quantity,
    );

    return res.status(201).json({ message: 'Compra realizada com sucesso!' });
  } catch (_err) {
    return res.status(401).json({ message: 'BAD REQUEST' });
  }
};

module.exports = checkoutController
