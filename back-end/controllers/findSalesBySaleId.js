const salesService = require('../services/findSalesBySaleId');

const findSalesBySaleId = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await salesService.findSalesBySaleId(id);
    return res.status(200).json(sales);
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: 'No sale found' });
  }
}

module.exports = {
  findSalesBySaleId,
};
