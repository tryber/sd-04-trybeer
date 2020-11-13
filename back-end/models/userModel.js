const connection = require('./connection');

const getUserByEmail = async (email) => connection()
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

// Registro de usuário de cliente, observar o role a ser inserido("client" ou  "administrator")
const registerNewUser = async (name, email, password, role) => connection()
  .then((db) => db
    .getTable('users')
    .insert(['name', 'email', 'password', 'role'])
    .values(name, email, password, role)
    .execute(),
    );

const updateUser = async (name, email) => connection()
  .then((db) => db
    .getTable('users')
    .update()
    .set('name', name)
    .where('email = :email')
    .bind('email', email)
    .execute());

module.exports = {
  getUserByEmail,
  registerNewUser,
  updateUser,
};
