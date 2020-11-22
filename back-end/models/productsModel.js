const connection = require('./connection');

const getAllPrdoucts = async (email) => {
  try {
    const db = await connection();
    const query = await db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute();
    const result = await query.fetchAll();
    return result.map(([id, name, price, url_image]) => ({ id, name, price, url_image, quantity: 0 }));
    // const [id, name, userEmail, password, role] = result;
    // return { id, name, userEmail, password, role };
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllPrdoucts,
};
