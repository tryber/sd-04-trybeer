const UserModel = require('../models/UserModel');

const userMiddlewares = require('../middlewares/userMiddleware');

const createJWT = require('../authentication/createJWT');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  try {
    const user = await userMiddlewares.validateUserByEmail(email, password);

    if (!user) return res.status(400).json({ err: 'incorrect user or password' });

    const token = createJWT(user);

    return res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: 'Something gone wrong on Login' });
  }
};

const userRegister = async (req, res) => {
  const { name, email, password, role } = req.body;

  // const userAlreadyExists = await UserModel.searchUserByEmail(email);
  try {
    if (!name || !email || !password) return res.status(400).json({ err: 'Invalid entries' });

    // if (userAlreadyExists.email === email) {
    //   return res.status(200).json({ err: 'E-mail already in database.' });
    // }

    const user = await UserModel.registerUser(name, email, password, role);

    return res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: 'Something gone wrong on register user' });
  }
};

module.exports = {
  userLogin,
  userRegister,
};
