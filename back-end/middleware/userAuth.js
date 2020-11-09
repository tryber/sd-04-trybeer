const jwt = require('jsonwebtoken');

const secret = 'grup1';

const authenticar = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) throw 'missing token';
  const data = jwt.verify(token, secret);
  req.user = data;
  next();
};

module.exports = { authenticar };
