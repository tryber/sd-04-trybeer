const { connection } = require('./connection');

const findUserByEmail = async (email) =>
  connection()
    .then((db) =>
      db
        .getTable('users')
        .select([])
        .where('email = :email')
        .bind('email', email)
        .execute()
    )
    .then((result) => result.fetchOne())
    .then(([id, name, email, password, role]) => ({
      id,
      name,
      email,
      password,
      role,
    }))
    .catch((err) => console.log(err));

module.exports = { findUserByEmail };
