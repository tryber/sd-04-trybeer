const connection = require('./connection');

const getUserByEmail = async (email) =>
  connection()
    .then((db) => db
      .getTable('users')
      .select(['id', 'name', 'email', 'password', 'role'])
      .where('email = :email')
      .bind('email', email)
      .execute())
    .then((result) => result.fetchOne())
    .then(([id, name, userEmail, password, role] = []) => (
      id
        ? { id, name, email: userEmail, password, role }
        : 'usuário não encontrado'
    ));

const updateUser = async (name, email) =>
  connection()
    .then((db) => db
      .getTable('users')
      .update()
      .set('name', name)
      .where('email = :email')
      .bind('email', email)
      .execute());

module.exports = {
  getUserByEmail,
  updateUser,
};
