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

module.exports = { getUsers };
