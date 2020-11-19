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

const searchUserByEmail = async (emailInput) => {
  const result = await connection()
    .then((db) => db
      .getTable('users')
      .select([])
      .where('email = :email')
      .bind('email', emailInput)
      .execute()
      .then((results) => results.fetchOne())
      .then((results) => {
        if (!results) return null;
        const [id, name, email, password, role] = results;
        return { id, name, email, password, role };
      }))
    .catch((err) => {
      console.log('catch linha 30', err);
      throw err;
    });
  return result;
};

const nameUpdate = async (name, newName) => {
  await connection()
    .then((db) => db
    .getTable('users')
    .update()
    .set('name', newName)
    .where('name = :nameBind')
    .bind('nameBind', name)
    .execute());
};

module.exports = {
  registerUser,
  searchUserByEmail,
  nameUpdate,
};
