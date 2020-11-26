const { productsService } = require('../services');

const fetchProducts = async (_req, res) => {
  try {
    const response = await productsService.listProduct();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const fetchSales = async (_req, res) => {
  try {
    const response = await productsService.listSales();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const newSale = async (req, res) => {
  try {
    console.log(req.body);
    await productsService.newSale(req.body);
    return res.status(200).json({ message: 'Compra realizada com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchProducts,
  fetchSales,
  newSale,
};
