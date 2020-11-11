const rescue = require('express-rescue');
const { userService }= require('../services')

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
}
