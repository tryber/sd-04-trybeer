const genericModel = require('../models/genericModel');
const userModel = require('../models/userModel');
const { createToken } = require('./createToken');

const userRegister = async (name, email, pass, role) => {
  const userEmail = await genericModel.findUserBy(email, 'email');
  if (userEmail) throw new Error('E-mail already in database.');
  const user = await userModel.registerNewUser(name, email, pass, role);
  const { password, ...userData } = user;
  const token = createToken(userData);
  return { token, userData };
};

const userUpdate = async (name, email) => {
  const { id } = await genericModel.findUserBy(email, 'email');
  try {
    await userModel.updateUser(id, name);
    return { message: 'Atualização concluída com sucesso' };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { userRegister, userUpdate };
