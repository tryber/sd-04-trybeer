const connection = require('./connection');

const getUserByEmail = async (email) => {
  try {
    const db = await connection();
    const query = await db
      .getTable('users')
      .select(['id', 'name', 'email', 'password', 'role'])
      .where('email = :email')
      .bind('email', email)
      .execute();
    const result = await query.fetchOne();
    const [id, name, userEmail, password, role] = result;
    return { id, name, userEmail, password, role };
    // return connection()
    //   .then((db) => db
    //     .getTable('users')
    //     .select(['id', 'name', 'email', 'password', 'role'])
    //     .where('email = :email')
    //     .bind('email', email)
    //     .execute())
    //   .then((result) => result.fetchOne())
  } catch (error) {
    console.log(error.message);
  }
};

const getUserByEmailAndPassword = async (email, pass) => {
  try {
    const db = await connection();
    const query = await db
      .select(['id', 'name', 'email', 'password', 'role'])
      .where('email =:email AND password =:password')
      .bind('email', email)
      .bind('password', pass)
      .execute();
    const result = await query.fetchOne();
    console.log(result);
      // .then((db) => db
      //   .getTable('users')
      //   .select(['id', 'name', 'email', 'password', 'role'])
      //   .where('email =:email AND password =:password')
      //   .bind('email', email)
      //   .bind('password', pass)
      //   .execute())
      // .then((result) => result.fetchOne())
      // .then(([id, name, userEmail, password, role] = []) => (
      //   id
      //     ? { id, name, email: userEmail, password, role }
      //     : 'usuário não encontrado'
      // ));
  } catch (error) {
    console.log(error.message);
  }
};

// Registro de usuário de cliente,
const registerNewUser = async (name, email, password, role) => {
  try {
    connection()
      .then((db) => db
        .getTable('users')
        .insert(['name', 'email', 'password', 'role'])
        .values(name, email, password, role)
        .execute());
    return { name, email, role };
  } catch (error) {
    console.log(error.message);
  }
};

const updateUser = async (name, email) => {
  console.log('email: ', email);
  try {
    connection()
      .then((db) => db
        .getTable('users')
        .update()
        .set('name', name)
        .where('email = :email')
        .bind('email', email)
        .execute());
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUserByEmail,
  getUserByEmailAndPassword,
  registerNewUser,
  updateUser,
};
