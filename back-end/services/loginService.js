const genericModel = require('../models/genericModel');
const { createToken } = require('./createToken');

const userLogin = async (emailParam, passwordParam) => {
  const user = await genericModel.findUserBy(emailParam, 'email');
  if (!user) throw new Error('User not found');
  const { password, ...userData } = user;
  if (user || passwordParam === password) {
    const token = createToken(userData);
    return { token, userData };
  }
};

module.exports = { userLogin };