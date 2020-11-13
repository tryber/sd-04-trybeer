const { userModel } = require('../models');

const createUserController = async (req, res) => {
  try {
    const data = req.body;
    const result = await userModel.getUserByEmail(data.email);
    if (result) {
      if (result.email === data.email) {
        return res.status(403).json({ message: 'E-mail already in database.' });
      }
    }
    await userModel.createUser(data);
    return res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (err) {
    console.error('createUserController', err.message);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const showAllEmails = async (req, res) => {
  const emails = await userModel.getAllEmail();
  return res.status(200).json(emails);
};

module.exports = {
  createUserController,
  showAllEmails,
};
