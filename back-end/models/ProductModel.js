const connection = require('./connection');

const getAllProducts = async () => {
  const products = await connection()
    .then((db) =>
      db
        .getTable('products')
        .select([])
        .execute()
        .then((results) => results.fetchAll())
        .then((products) =>
          products.map(([id, name, price, url_image]) => ({ id, name, price, url_image })),
        ),
    )
    .catch((err) => {
      throw err;
    });
  return products;
};

module.exports = {
  getAllProducts,
};
