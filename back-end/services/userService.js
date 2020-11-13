const { userModel } = require('../models');

const createUser = async (userName, emailUser, password, isSeller) => {
  const user = await userModel.getUserByEmail(email);

  if (user.email !== email) return { message: 'E-mail invalido' };

  await userModel.updateUser(name, email);
}


const updateUser = async (name, email) => {
  const user = await userModel.getUserByEmail(email);

  if (user.email !== email) return { message: 'E-mail invalido' };

  await userModel.updateUser(name, email);

  return { name, email };
};

module.exports = {
  updateUser,
};
