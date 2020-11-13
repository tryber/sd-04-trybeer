const rescue = require('express-rescue');
const { userService } = require('../services');

const registerUser = async (req, res) => {
  console.log(req);
  const { userName, emailUser, password, isSeller } = req.body;
  // if (sellerCheckbox.value === true)

  // const user = await registerUser(name, email, password, role);

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
