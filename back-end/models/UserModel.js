const connection = require('./connection');

const registerUser = async (name, email, password, role = 'client') => {
  const result = await connection()
    .then((db) =>
      db
        .getTable('users')
        .insert(['name', 'email', 'password', 'role'])
        .values([name, email, password, role])
        .execute(),
    )
    .catch((err) => {
      throw err;
    });
  return result;
};

const searchUserByEmail = async (emailInput) => {
  const result = await connection()
    .then((db) => db
        .getTable('users')
        .select(['id', 'name', 'email', 'password', 'role'])
        .where('email LIKE :email')
        .bind('email', emailInput)
        .execute()
        .then((results) => results.fetchOne())
        .then((results) => {
          if (!results) return null;
          const [id, name, email, password, role] = results;
          return { id, name, email, password, role };
        }),
    )
    .catch((err) => {
      console.log('catch linha 30');
      throw err;
    });
  return result;
};

module.exports = {
  registerUser,
  searchUserByEmail,
};
