const connection = require('./connection');

const findUserByEmail = async (emailInput) => {
  try {
    const db = await connection();
    const result = await db
      .getTable('users')
      .select([])
      .where('email = :email')
      .bind('email', emailInput)
      .execute();
    const [id, name, email, password, role] = await result.fetchOne();
    return ({ id, name, email, password, role });
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
  findUserByEmail,
};
