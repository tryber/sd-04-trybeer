const userModel = require("../model/userModel");

const userLogin = (req, res) => {
  try {
    const { token } = req;
    const { name, email, role } = req.user;
    const data = { name, email, token, role };

    res.status(200).json(data);
  } catch (error) {
    res.status(400).send("Nao conseguiu logar");
  }
};

const userRegister = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    await userModel.registerUser(name, email, password, role);
    res.status(200).json({ message: "registrado com sucesso" });
  } catch (err) {
    console.log("ee", err);
    res.status(404).json({ message: "E-mail already in database." });
  }
};

module.exports = {
  userLogin,
  userRegister,
};
