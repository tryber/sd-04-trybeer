const connection = require('./connection');

const getUserByEmail = async (userEmail) => {
  const conn = await connection();
  const result = await conn
    .getTable('users')
    .select([])
    .where('email = :userEmail')
    .bind('userEmail', userEmail)
    .execute();
  const fetchedResult = await result.fetchAll();
  const userFound = fetchedResult.map(([id, name, email, password, role]) => ({
    id,
    name,
    email,
    password,
    role,
  }))[0];
  return userFound;
};

module.exports = {
  getUserByEmail,
};
