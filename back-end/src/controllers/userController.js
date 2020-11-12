const { userModel } = require('../models');

const createUserController = async(req, res) => {
  try {
    const data = req.body;
    await userModel.createUser(data);
    return res.status(201).json({message: "Usuário criado com sucesso"});
  }catch(err) {
    console.error('createUserController');
    return res.status(500).json({message: "Erro interno"})  }
}

module.exports = {
  createUserController,
};
