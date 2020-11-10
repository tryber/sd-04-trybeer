const jwt = require('jsonwebtoken');

const headers = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const secret = require('./secret');

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, headers);

  return token;
};

module.exports = {
  createToken,
};
