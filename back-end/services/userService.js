const { userModel } = require('../models');

const createUser = async (userName, emailUser, password, isSeller) => {
  const emailInDatabase = await userModel.getUserByEmail(email);

  if (emailInDatabase) return { err: { message: 'Email is already registered' } };

  const role = isSeller ? 'administrator' : 'client';
  const newUser = await userModel.registerNewUser(userName, emailUser, password, role);
  return newUser;
}


const updateUser = async (name, email) => {
  const user = await userModel.getUserByEmail(email);

  if (user.email !== email) return { message: 'E-mail invalido' };

  await userModel.updateUser(name, email);

  return { name, email };
};

module.exports = {
  updateUser,
  createUser,
};
