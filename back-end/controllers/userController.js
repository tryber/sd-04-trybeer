const userModel = require('../model/userModel');

const userLogin = (req, res) => {
  try {
    const { token } = req;
    const { name, email, role } = req.user;
    const data = { name, email, token, role };

    res.status(200).json(data);
  } catch (error) {
    res.status(400).send('Nao conseguiu logar');
  }
};

const userProfile = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findByEmail(email);
    const { password: _, ...userData } = user;
    res.status(200).json(userData);
  } catch {
    res.status(400).json('Email inexistente');
  }
};

const editProfile = async (req, res) => {
  try {
    const { id, name } = req.body;
    await userModel.editProfile(id, name);
    res.status(200).json('Name changed successfully!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userLogin,
  userProfile,
  editProfile,
};
