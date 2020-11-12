const connection = require('./connection');

/* const getUser = async (name) => {
  try {
    const db = await connection();
    const table = db.getTable('users');
    const result = await table.select(['name', 'email']).where('name = :name').bind('name', name).execute();
    const user = result.fetchOne();
    console.log(user);
    return user;
  } catch (err) {
    console.log(err)
  }
} */

const updateUser = async (name, email) => {
  try {
    console.log('Model Data:', name, email);
    const db = await connection();
    const table = db.getTable('users');
    await table.update()
      .set('name', name)
      .where('email = :email')
      .bind('email', email)
      .execute();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateUser,
};
