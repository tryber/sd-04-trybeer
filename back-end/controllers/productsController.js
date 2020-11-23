const express = require('express');
const productsModel = require('../models/productsModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const products = await productsModel.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
