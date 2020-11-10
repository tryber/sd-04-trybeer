const loginModel = require('../models/loginModel');
const { createToken } = require('./createToken');

const userLogin = async (emailParam, passwordParam) => {
  const user = await loginModel.findUserByEmail(emailParam);
  const { password, ...userData } = user;
  if (user || passwordParam === password) {
    const token = createToken(userData);
    return { token, userData };
  }
};

module.exports = { userLogin };
