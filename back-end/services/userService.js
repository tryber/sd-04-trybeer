const { userModel } = require('../models');

const createUser = async ({ userName, emailUser, password, isSeller }) => {
  const emailInDatabase = await userModel.getUserByEmail(emailUser);
  if (emailInDatabase) return { err: { message: 'Email is already registered' } };
  const role = isSeller ? 'administrator' : 'client';
  const newUser = await userModel.registerNewUser(userName, emailUser, password, role);
  return newUser;
};

const updateUser = async (name, email) => {
  const user = await userModel.getUserByEmail(email);

  if (user.email !== email) return { message: 'E-mail invalido' };

  await userModel.updateUser(name, email);

  return { name, email };
};

const login = async ({ email, password }) => {
  const { password: _, ...withoutPassword } = await userModel.getUserByEmail(email, password);
  // const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  // const testRegex = emailRegex.test(email);
  // if (!testRegex || user.email !== email) return { message: 'E-mail invalido' };
  // if (!password) return { message: 'A senha deve digitada' };
  // if (password.length < 6) return { message: 'Senha inválida' };
  // return { email };
  return withoutPassword;
};

module.exports = {
  createUser,
  login,
  updateUser,
};
