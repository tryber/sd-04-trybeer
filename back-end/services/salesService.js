const salesModel = require("../models/salesModel");

const orderDetail = async (orderId) => {
  // chamada da consulta do Vitao para retornar ID, DATE, PRICE
  const products = await salesModel.getDetailsSale(orderId);
  return products;
};

module.exports = { orderDetail };
