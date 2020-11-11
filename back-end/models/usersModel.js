const connection = require('./connection');

const getUsers = async () => {
  const users = await connection().then((db) => db
    .getTable('users')
    .select(['name', 'email', 'password', 'role'])
    .execute()
    .then((results) => results.fetchAll()));

  return users.map(([name, email, password, role]) => ({
    name,
    email,
    password,
    role,
  }));
};

const findUserByEmail = async (email) => {
  const userData = await connection().then((db) => db
    .getTable('users')
    .select(['email'])
    .where('email = :email')
    .bind('email', email)
    .execute())
    .then((results) => results.fetchAll())
    .then((users) => users[0]);

  if (!userData) return null;

  return userData;
};

const registerUser = async (name, email, password, role) => {
  await connection().then((db) => db
    .getTable('users')
    .insert(['name', 'email', 'password', 'role'])
    .values(name, email, password, role)
    .execute());
};

const editUser = async (name, email) => {
  await connection().then((db) => db
    .getTable('users')
    .update()
    .set('name', name)
    .where('email = :email')
    .bind('email', email)
    .execute());
};

module.exports = { getUsers, findUserByEmail, registerUser, editUser };
