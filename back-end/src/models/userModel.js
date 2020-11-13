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

module.exports = {
  updateUser,
};
