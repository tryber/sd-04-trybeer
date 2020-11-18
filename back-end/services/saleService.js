const moment = require('moment');
const saleModel = require('../models/saleModel');
const genericModel = require('../models/genericModel');

const postNewSale = async (id, addressName, addressNumber, cart, totalPrice) => {
  const date = moment().format('YYYY/MM/DD h:mm:ss');
  const status = 'Pendente';

  const sale = await saleModel.insertNewSale(
    id,
    totalPrice,
    addressName,
    addressNumber,
    date,
    status,
  );

  cart.forEach(async (productCart) => {
    const { id: productId, quantity } = productCart;
    await saleModel.insertProductSale(sale, productId, quantity);
  });

  return { message: 'Compra realizada com sucesso!' };
};

const getSalesId = async (emailParam) => {
  const user = await genericModel.findUserBy(emailParam, 'email');
  if (!user) throw new Error('usuario nao encontrado');
  const salesUser = await saleModel.getAllSalesBy(user.id, 'user_id', [
    'id',
    'total_price',
    'sale_date',
  ]);
  return salesUser;
};

module.exports = {
  postNewSale,
  getSalesId,
};
