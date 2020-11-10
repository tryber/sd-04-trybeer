const loginService = require('../services/loginService');

const userLogin = async (_req, _res) => {
  const login = await loginService.userLogin('tryber@trybe.com.br', 123456);
  resizeBy.status(200).json(login);
};

module.exports = { userLogin };
