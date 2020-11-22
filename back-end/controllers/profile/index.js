const { update } = require('../../models/users');

const updateUser = async (req, res) => {
  // const { id } = req.user; -> O id deverá vir do body
  const { id, name } = req.body;
  try {
    await update(id, name);
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch {
    res.status(500).json({ message: 'Falha ao atualizar o usuário' });
  }
};

module.exports = { default: updateUser };
