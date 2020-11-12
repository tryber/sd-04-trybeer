const UserModel = require('../models/UserModel');

const validateUserByEmail = async (email, password) => {
  const user = await UserModel.searchUserByEmail(email);

  if (!user || user.password !== password) return { err: 'incorrect user or password' };

  return user;
};

module.exports = {
  validateUserByEmail,
};
