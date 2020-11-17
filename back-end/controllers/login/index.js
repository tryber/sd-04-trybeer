const { createToken } = require('../../middlewares/createJWT');
const { getByEmail } = require('../../models/users');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });
  }

  const user = await getByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
  }

  const { password: _, ...userWithoutPassword } = user;

  const token = createToken(userWithoutPassword);

  res.cookie('token', token, { httpOnly: true, sameSite: true });
  return res.status(200).json({ user });
};

module.exports = { login };
