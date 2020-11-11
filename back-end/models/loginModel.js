const { connection } = require('./connection');

const findUserByEmail = async (userEmail) => connection()
  .then((db) => db
    .getTable('users')
    .select([])
    .where('email = :email')
    .bind('email', userEmail)
    .execute())
  .then((result) => result.fetchOne())
  .then((info) => {
    if (!info) throw new Error('User not found');
    const [id, name, email, password, role] = info;
    return {
      id,
      name,
      email,
      password,
      role,
    };
  });

module.exports = { findUserByEmail };
