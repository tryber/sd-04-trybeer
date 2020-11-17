const { postNewSale } = require('../services/saleService');

const saleRegister = async (req, res) => {
  const { nameAdress, numberAdress, cart, user, totalPrice } = req.body;

  const { id } = user;

  const sale = await postNewSale(id, nameAdress, numberAdress, cart, totalPrice);

  return res.status(200).json(sale);
};

module.exports = {
  saleRegister,
};