const { connection } = require("./connection");

const registerNewUser = async (userName, userEmail, userPwd, role) => {
  try {
    const db = await connection();
    await db
      .getTable("users")
      .insert(["name", "email", "password", "role"])
      .values(userName, userEmail, userPwd, role)
      .execute();
    return { name: userName, email: userEmail, role };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { registerNewUser };
