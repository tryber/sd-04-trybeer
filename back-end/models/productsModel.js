const connection = require('./connection');

const getProducts = async () => {
  const products = await connection().then((db) => db
    .getTable('products')
    .select(['name', 'price', 'url_image'])
    .execute()
    .then((results) => results.fetchAll()));

  return products.map(([name, price, urlImage]) => ({
    name,
    price,
    urlImage,
  }));
};

module.exports = { getProducts };
