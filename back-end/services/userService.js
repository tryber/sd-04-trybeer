const { createToken } = require('../middlewares/auth');
const userModel = require('../models/userModel');

const findUserByEmail = async (email, password) => {
  const user = await userModel.findUserByEmail(email);
  if (!user || user.password !== password) {
    return { err: { message: 'Incorrect username or password' } };
  }
  return { token: createToken(user), user };
};

module.exports = {
  findUserByEmail,
};
