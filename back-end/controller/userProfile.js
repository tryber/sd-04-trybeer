const userModel = require('../models/UserModel');

const userUpdate = async (req, res) => {
  const { name, email, newName } = req.body;
  await userModel.nameUpdate(name, newName);
  const result = await userModel.searchUserByEmail(email);

  res.status(200).json(result.name);
};

module.exports = {
  userUpdate,
};
