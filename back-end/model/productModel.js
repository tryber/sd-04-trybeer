const connection = require('./connection');

const getAllProducts = async () => connection()
  .then((db) => db
    .getTable('products')
    .select()
    .execute())
  .then((results) => results.fetchAll())
  .then((beer) => beer.map(([id, name, price, urlImage]) => ({
    id,
    name,
    price,
    urlImage,
  }),
  )
  );

module.exports = {
  getAllProducts,
};
