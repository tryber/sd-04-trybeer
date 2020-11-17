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
  const table = await connection().then((db) => db.getTable('users'));
  const register = await table
    .select([])
    .where('email = :email')
    .bind('email', emailInput)
    .execute();

  return register.fetchAll()
    .map(([id, name, email, password, role]) => ({ id, name, email, password, role }))[0];
};

// Função para teste, ignorem!!!
// (async () => console.log(await searchUserByEmail('tryber@trybe.com.br')))();

module.exports = {
  registerUser,
  searchUserByEmail,
};
