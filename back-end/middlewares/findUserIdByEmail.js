const userModel = require('../models/userModel');

const findUserIdByEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userModel.findUserByEmail(email);
    user.id = req.user;
    next();
  } catch (e) {
    return res.status(500).json({ message: 'internal error' });
  }
};

module.exports = findUserIdByEmail;
