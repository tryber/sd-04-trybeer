const auth = require('../auth/createToken');

const userModel = require('../model/userModel');

const validateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findByEmail(email);

    if (user.password !== password) throw new Error();

    const { password: _, ...userSafe } = user;

    req.token = auth.createToken(userSafe);
    req.user = userSafe;

    next();
  } catch (error) {
    return res.status(404).json({ message: 'Email invalido' });
  }
};

module.exports = {
  validateUser,
};
