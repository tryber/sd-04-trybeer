const salesService = require("../services/saleService");

const getDetailsSales = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.orderDetail(id);
  res.status(200).json(result);
};

module.exports = { getDetailsSales };
