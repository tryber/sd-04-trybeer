const rescue = require('express-rescue');
const userServ = require('../services');
const { usersModel } = require('../models');

const loginUsersCont = rescue(async (req, res) => {
  const { email, password } = req.body;

  const result = await userServ.userLoginServ(email, password);
  return res.status(200).json(result);
});

const registerUsersCont = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;

  const { id } = await usersModel.getUserByEmailMod(email);
  if (id) throw new Error('E-mail already exist.');

  const newUser = await userServ.registerUsersServ(name, email, password, role);

  return res.status(200).json(newUser);
});

const updateUsersNameCont = rescue(async (req, res) => {
  const { name, email } = req.body;

  const updateUser = await userServ.updateUserServ(name, email);

  res.status(200).json(updateUser);
});

module.exports = {
  loginUsersCont,
  registerUsersCont,
  updateUsersNameCont,
};
