const connection = require('./connection');

const updateUser = async (name, email) => {
  try {
    console.log('Model Data:', name, email);
    const db = await connection();
    const table = await db.getTable('users');
    await table.update()
      .set('name', name)
      .where('email = :email')
      .bind('email', email)
      .execute();
  } catch (err) {
    console.log(err);
  }
};

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

module.exports = {
  createUser,
  getUserByEmail,
  updateUser,
};
