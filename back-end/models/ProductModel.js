const connection = require('./connection');

const getAllProducts = async () => {
  const product = await connection()
    .then((db) =>
      db.getTable('products')
        .select([])
        .execute()
        .then((results) => results.fetchAll())
        .then((products) =>
          products.map(([id, name, price, urlImage]) => ({ id, name, price, urlImage })),
        )).catch((err) => {
      throw err;
    });
  return product;
};

module.exports = {
  getAllProducts,
};
