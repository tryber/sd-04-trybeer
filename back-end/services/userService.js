const UserModel = require('../models/UserModel');

const findUserByEmail = async (email, password) => {
  const user = await UserModel.findUserByEmail(email);

  if (!user || user.password !== password) return { err: 'incorrect user or password' };

  return user;
};

module.exports = {
  findUserByEmail,
};
