const { userModel } = require('../models');

const updateUserController = async (req, res) => {
  try {
    const { name, email } = req.body;

    console.log('Controller Data:', name, email);
  
    await userModel.updateUser(name, email);
    return res.status(200).json({ up: 'Update realizado' });
  } catch (err) {
    console.log('Erro inesperado');
    console.log(err);
  }
};

module.exports = {
  updateUserController,
};
