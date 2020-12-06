const productsModel = require('../models/productsModel');
const orderModel = require('../models/orderModel');

const createSalesProducts = async (req, res) => {
  const { salesPdts } = req.body;

  await productsModel.createSalesProducts(salesPdts);

  res
    .status(200)
    .json({ msg: 'Quantidade de produtos vendidos criada com sucesso' });
};

const getSalesProducts = async (req, res) => {
  const saleId = req.params.id;
  const sales = await productsModel.readSalesProducts(saleId);

  res.status(200).json(sales);
};

const readProducts = async (_, res) => {
  const products = await productsModel.read();

  res.status(200).json(products);
};

const readOrders = async (req, res) => {
  const { id } = req.user;
  const orders = await orderModel.readOrder(id);

  orders.map(
    (date) =>
      date.saleDate = date.saleDate
        .toLocaleDateString('pt-BR')
        .replace('/2020', ''),
  );
  orders.map(
    (price) =>
      price.totalPrice = price.totalPrice.toFixed(2).replace('.', ','));

  res.status(200).json(orders);
};

module.exports = {
  createSalesProducts,
  getSalesProducts,
  readProducts,
  readOrders,
};
