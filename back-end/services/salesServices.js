const { salesModel } = require('../models');

const allSalesSev = async () => {
  const sales = await salesModel.getAllSalesMod();

  return sales;
};

const finishSalesServ = async (id, total, address, number) => {
  const totalToInsert = total.replace(',', '.');

  const dateNow = new Date();
  const date = `${dateNow.getFullYear()}-${
    dateNow.getMonth() + 1
  }-${dateNow.getDate()} - ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;

  const checkout = await salesModel.postFinishSalesMod(id, totalToInsert, address, number, date);
  const sales = await salesModel.getAllSalesMod();

  const newSale = await sales.filter((elem) => elem.userId === id);

  const saleResponse = {
    ...checkout,
    saleId: newSale[newSale.length - 1].id,
  };

  return saleResponse;
};

const updateStatusServ = async (id) => {
  await salesModel.updateStatusMod(id, 'Entregue');

  return { message: 'Entregue' };
};

module.exports = {
  allSalesSev,
  finishSalesServ,
  updateStatusServ,
};
