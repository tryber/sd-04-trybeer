const connection = require('./connection');

const findByEmail = async (userEmail) => connection()
  .then((db) => db.getTable('users')
    .select()
    .where('email = :email')
    .bind('email', userEmail)
    .execute(),
  ).then((results) => results.fetchOne())
  .then(([id, name, email, password, role]) => ({
    id,
    name,
    email,
    password,
    role,
  }));

const editProfile = async (id, name) => connection()
  .then((db) => db.getTable('users')
    .update()
    .set('name', name)
    .where('id = :id')
    .bind('id', id)
    .execute());

module.exports = {
  findByEmail,
  editProfile,
};
