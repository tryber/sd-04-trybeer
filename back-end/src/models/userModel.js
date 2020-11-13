const connection = require('./connection');

const createUser = async ({ name, email, password, role }) => {
    const db = await connection();
    await db
      .getTable('users')
      .insert(['name', 'email', 'password', 'role'])
      .values(name, email, password, role)
      .execute();
};

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

const getAllEmail = async () => {
  const db = await connection();
  const results = await db.getTable('users').select(['email']).execute();

  const listing = await results.fetchAll();
  const list = await listing.map(([email]) => ({ email }));
  return list;
};

module.exports = {
  createUser,
  getUserByEmail,
  getAllEmail,
};
