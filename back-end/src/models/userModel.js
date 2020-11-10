const connection = require('./connection');

const createUser = async (name, email, password, role) => {
    const db = await connection();
    await db
      .getTable('users')
      .insert(['name', 'email', 'password', 'role'])
      .values(name, email, password, role)
      .execute();
};

module.exports = {
  createUser,
}