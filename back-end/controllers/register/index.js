const { add, getByEmail } = require('../../models/users');

const register = async (req, res) => {
  const {signName, signEmail, signPassword, signRole} = req.body;
  // signRole é boolean
  // signRole - true -> 'administrator'
  // signRole - false -> 'client'
  const role = signRole ? 'administrator' : 'client';

  // Verifica se existe usuário com o mesmo email
  const user = await getByEmail(signEmail);
  if(user) {
    res.status().json({ message: 'E-mail already in database.' });
  }

  await add(signName, signEmail, signPassword, role);
  const newUser = await getByEmail(signEmail);
  res.status().json(newUser);
};

module.exports = { register };
