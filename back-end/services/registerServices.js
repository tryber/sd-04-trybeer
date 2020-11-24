const { usersModel } = require('../models');
const createToken = require('./createToken');

const registerUsersServ = async (name, email, passwordInp, role) => {
  const user = await usersModel.registerUsersMod(name, email, passwordInp, role);

  const { password, ...data } = user;

  const token = createToken(data);

  return { token, data };
};

module.exports = { registerUsersServ };
