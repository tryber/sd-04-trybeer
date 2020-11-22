const connection = require('./connection');

const getAllPrdoucts = async () => {
  try {
    const db = await connection();
    const query = await db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute();
    const result = await query.fetchAll();
    return result.map(([id, name, price, urlImage]) => ({
      id, name, price, urlImage, quantity: 0,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllPrdoucts,
};
