const UserModel = require('../models/UserModel');

const validateUserByEmail = async (email, password) => {
  const user = await UserModel.searchUserByEmail(email);

  if (!user || user.password !== password) return { err: 'incorrect user or password' };

  return user;
};

const isEmailAlreadyExists = async (req, res, next) => {
  const { email } = req.body;

  const userExists = await UserModel.searchUserByEmail(email);
  if (userExists) {
    return res.status(200).json({ err: 'E-mail already in database.' });
  }

  next();
};

module.exports = {
  validateUserByEmail,
  isEmailAlreadyExists,
};
