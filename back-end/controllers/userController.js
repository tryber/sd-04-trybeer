const rescue = require('express-rescue');
const userService = require('../services/userService');

const userLogin = rescue(async (req, res) => {
  const { email, password } = req.body;
  console.log(req);
  const user = await userService.findUserByEmail(email, password);

  if (user.err) {
    return res.status(401).json(user.err);
  }

  return res.status(200).json(user);
});

module.exports = {
  userLogin,
};
