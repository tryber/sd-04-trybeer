const connection = require('./connection');

const getProducts = async () => {
  const products = await connection().then((db) =>
    db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute()
      .then((results) => results.fetchAll())
  );

  return products.map(([id, name, price, urlImage]) => ({
    id,
    name,
    price,
    urlImage,
  }));
};

module.exports = { getProducts };
