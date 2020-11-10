const loginService = require('../services/loginService');

const userLogin = async (_req, _res) => {
  const login = await loginService.userLogin('tryber@trybe.com.br', 123456);
  console.log(login);
};

module.exports = { userLogin };
