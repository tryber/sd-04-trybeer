const rescue = require('express-rescue');
const { userService } = require('../services');

const registerUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
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
