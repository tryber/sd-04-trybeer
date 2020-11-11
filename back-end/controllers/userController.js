const rescue = require('express-rescue');
const userService = require('../services/userService');

const userRegister = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await userService.userRegister(name, email, password, role);
  res.status(200).json(newUser);
});

module.exports = { userRegister };
