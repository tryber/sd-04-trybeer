const userModel = require('../models/userModel');

const findUserByEmail = async (email, password) => {
  const user = await userModel.findUserByEmail(email);
  if (!user || user.password !== password) {
    return { err: { message: 'Incorrect username or password' } };
  }
  return user;
};

const registerUserService = async (name, email, password, checkbox) => {

  const isEmailAlreadyRegistered = await userModel.findUserByEmail(email);
  if (isEmailAlreadyRegistered) {
    return { err: { message: 'Email is already registered' } };
  }
  const role = checkbox ? 'administrator' : 'client';
  

  const newUser = await userModel.registerUser(email, password, name, role);
  return newUser;
}

module.exports = {
  findUserByEmail,
  registerUserService,
};
