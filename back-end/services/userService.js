const userModel = require('../models/userModel');

const findUserByEmail = async (email, password) => {
  const user = await userModel.findUserByEmail(email);
  if (!user || user.password !== password) {
    return { err: { message: 'Incorrect username or password' } };
  }
  return user;
};

module.exports = {
  findUserByEmail,
};
