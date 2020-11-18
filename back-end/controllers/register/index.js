const { add, getByEmail } = require('../../models/users');

const register = async (req, res) => {
  try {
    const {signName, signEmail, signPassword, signRole} = req.body;
    // signRole é boolean
    // signRole - true -> 'administrator'
    // signRole - false -> 'client'
    const role = signRole ? 'administrator' : 'client';

    // Verifica se existe usuário com o mesmo email já existe
    const user = await getByEmail(signEmail);
    if(user) {
      res.status(200).json({ message: 'E-mail already in database.' });
    }

    await add(signName, signEmail, signPassword, role);
    const newUser = await getByEmail(signEmail);
    res.status(201).json(newUser);
  } catch (_error) {
    console.log(_error.message);
    res.status(501).json({ message: 'Falha ao cadastrar usuário' });
  }
};

module.exports = { register };
