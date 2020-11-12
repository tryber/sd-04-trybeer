const connection = require('./connection');

const findUserByEmail = async (emailInput) => {
  try {
    const db = await connection();
    const result = await db
      .getTable('users')
      .select([])
      .where('email = :email')
      .bind('email', emailInput)
      .execute();
    const [id, name, email, password, role] = await result.fetchOne();
    return ({ id, name, email, password, role });
  } catch (err) {
    console.error(err);
    return null;
  }
};

const registerUser = async (name, email, password, role) => {
  try {
    const db = await connection();
    const table = await db.getTable('users');
    const result = await table
      .insert(['name', 'email', 'password', 'role'])
      .values(name, email, password, role)
      .execute();
    return result;
  } catch (err) {
      console.error(err);
      return null
  }
};

module.exports = {
  findUserByEmail,
  registerUser,
};
