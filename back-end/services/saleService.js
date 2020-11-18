const moment = require('moment');
const saleModel = require('../models/saleModel');

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

module.exports = {
  postNewSale,
};
