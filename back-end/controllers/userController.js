const rescue = require('express-rescue');
const { userService } = require('../services');

const registerUser = async (req, res) => {
  const { userName, emailUser, password, isSeller } = req.body;
  try {
    const newUser = await userService.createUser(userName, emailUser, password, isSeller);
    return res.status(201).json(newUser);
  } catch (_err) {
    return res.status(401).json({ message: 'BAD REQUEST' });
  }
};


const updateUser = rescue(async (req, res, next) => {
  const { name, email } = req.body;
  const updated = await userService.updateUser(name, email);

  if (updated.message) {
    return next(updated);
  }

  res.status(200).json(updated);
});

module.exports = {
  updateUser,
  registerUser,
};
