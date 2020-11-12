const rescue = require("express-rescue");
const userService = require("../services/userService");

const userLogin = rescue(async (req, res) => {
  const { email, password } = req.body;
  console.log(req);
  const user = await userService.findUserByEmail(email, password);

  if (user.err) {
    return res.status(401).json(user.err);
  }

  return res.status(200).json(user);
});

const getUserByEmail = async (req, res) => {
  const { email, password } = req.user;
  try {
    const selectedUser = await userService.findUserByEmail(email, password);
    if (!selectedUser) {
      return res.status(401).json({ message: 'Invalid entries. Try again' });
    }

    return res.status(200).json(selectedUser);
  } catch (_e) {
    return res.status(401).json({ message: 'Invalid entries. Try again' });
  }
};

const registerUserController = async (req, res) => {
  const { name, email, password, checkbox } = req.body;
  try {

    const newUser = await userService.registerUserService(email, password, name, checkbox);
    return res.status(201).json(newUser);
  } catch (_err) {
    return res.status(401).json({ message: 'BAD REQUEST'});
  }
};

module.exports = {
  userLogin,
  getUserByEmail,
  registerUserController,
};
