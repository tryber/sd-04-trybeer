const jwt = require('jsonwebtoken');

const userModel = require('../models/UserModel');

const secret = 'Trybeer';

const tokenValidator = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).jsom({ message: 'missing auth token' });
  try {
    const tokenValid = jwt.verify(token, secret);

    const user = await userModel.findUserByEmail(tokenValid.email);

    if (!user) return res.status(401).json({ message: 'Erro ao procurar usuário' });

    if (!tokenValid) return res.status(401).json({ message: 'Token not valid' });

    req.user = user;

    req.body = { ...req.body, tokenValid };
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = tokenValidator;
