const { updateUser } = require('../../models/users');

const userUpdate = async (req, res) => {
  const { id, name } = req.body;
  try {
    await updateUser(id, name);
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch {
    res.status(500).json({ message: 'Falha ao atualizar o usuário' });
  }
};

module.exports = { userUpdate };
