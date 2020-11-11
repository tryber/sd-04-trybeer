const genericModel = require("../models/genericModel");
const userModel = require("../models/userModel");

const userRegister = async (name, email, password, role) => {
  const user = await genericModel.findUserBy(email, "email");
  if (user) throw new Error("Email already exists");
  const newUser = await userModel.registerNewUser(name, email, password, role);
  return newUser;
};

module.exports = { userRegister };
