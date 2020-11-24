const { updateUser, getById } = require('../../models/users');

const userUpdate = async (req, res) => {
  const { id, name } = req.body;
  try {
    await updateUser(id, name);
    const user = getById(id);
    const { password: _, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword);

    res.status(200).json(token);
  } catch {
    res.status(500).json({ message: 'Falha ao atualizar o usuário' });
  }
};

module.exports = { userUpdate };
