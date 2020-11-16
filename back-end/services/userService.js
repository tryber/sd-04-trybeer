const { userModel } = require('../models');

const updateUser = async (name, email) => {
  const user = await userModel.getUserByEmail(email);

  if (user.email !== email) return { message: 'E-mail invalido' };

  await userModel.updateUser(name, email);

  return { name, email };
};

const login = async (email, password) => {
  const user = await userModel.getUserByEmail(email);

  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  const testRegex = emailRegex.test(email);

  if (!testRegex || user.email !== email) return { message: 'E-mail invalido' };

  if (!password) return { message: 'A senha deve digitada' };

  if (password.length < 6) return { message: 'Senha inválida' };

  return { email };
}

module.exports = {
  updateUser,
  login,
};
