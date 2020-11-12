const { response } = require('express');
const productModel = require('../model/productModel');

const getBeer = async (req, res) => {
  try {
    const beer = await productModel.getAllProducts();

    res.status(200).json(beer);
  } catch (error) {
    res.status(404),json({ error: "Nenhum producto foi encontrado"});
  }
}

module.exports = {
  getBeer,
}
