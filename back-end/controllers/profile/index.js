const { getByEmail } = require('../../models/users');

const getUser = async (req, res) => {
  const { email } = req.user;
  const user = await getByEmail(email);
  if (user) return user;

  return res.status(404).json({ message: 'Usuário não encontrado' });
};

const userUpdate = async (req, res) => {
  const { id } = req.user;
  const { name } = req.body;
  const user = { id, name }
  try {
    await userModel.updateUser(user);
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch {
    res.status(500).json({ message: 'Falha ao atualizar o usuário' });
  }

};

module.exports = { getUser, userUpdate };
