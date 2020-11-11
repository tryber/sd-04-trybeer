const UserModel = require('../models/UserModel');

const userService = require('../services/userService');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email, password);

    if (!user) return res.status(400).json({ message: 'user not exists' });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something gone wrong' });
  }
};

const userRegister = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if (!name || !email || !password) return res.status(400).json({ message: 'Invalid entries' });

    const user = await UserModel.registerUser(name, email, password, role);

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ message: 'Something gone wrong...' });
  }
};

module.exports = {
  userLogin,
  userRegister,
};
