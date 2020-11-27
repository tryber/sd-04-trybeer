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

const getUserOrdersByUserId = async (id) => {
  try {
    connection()
      .then((db) => db
        .getTable('sales')
        .select([
        'id',
        'user_id',
        'total_price',
        'delivery_address',
        'delivery_number',
        'sale_date',
        'status',
      ])
      .where('user_id = :id')
      .bind('id', id)
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
  getUserOrdersByUserId,
};
