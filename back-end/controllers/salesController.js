const salesModel = require('../model/salesModel');

const getDetails = async (req, res) => {
  try {
    const { id } = req.params;
  
    const result = await salesModel.getSalesById(id);
    res.status(200).json(result);    
  } catch (error) {
    res.status(404).json({ message: 'id da venda nao encontrado' })
  }
};

module.exports = {
  getDetails,
};
