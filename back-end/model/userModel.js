const connection = require('./connection');

const findByEmail = async (userEmail) => connection().then((db) => db
  .getTable('users')
  .select()
  .where('email = :email')
  .bind('email', userEmail)
  .execute())
  .then((results) => results.fetchOne())
  .then(([id, name, email, password, role]) => ({
    id,
    name,
    email,
    password,
    role,
  }));

const registerUser = async (name, email, password, role) => {
  if (!findByEmail(email)) throw new Error();

  return connection().then((db) => db
    .getTable('users')
    .insert(['name', 'email', 'password', 'role'])
    .values(name, email, password, role)
    .execute());
};

const editProfile = async (email, name) => connection()
  .then((db) => db.getTable('users')
    .update()
    .set('name', name)
    .where('email = :email')
    .bind('email', email)
    .execute());

module.exports = {
  findByEmail,
  editProfile,
  registerUser,
};
