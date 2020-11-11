const connection = require('./connection');

const registerUser = async (name, email, password, role) => {
  const result = await connection()
    .then((db) => db
      .getTable('users')
      .insert(['name', 'email', 'password', 'role'])
      .values([name, email, password, role])
      .execute())
    .catch((err) => {
      throw err;
    });
  return result;
};

const findUserByEmail = async (emailInput) => {
  const result = await connection()
    .then((db) => db
      .getTable('users')
      .select([])
      .where('email = :email')
      .bind('email', emailInput)
      .then((results) => results.fetchOne())
      .then(([id, name, email, password, role]) => ({ id, name, email, password, role }))    )
    .catch((err) => {
      throw err;
    });
  return result;
};

module.exports = {
  registerUser,
  findUserByEmail,
};
