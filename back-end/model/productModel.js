const connection = require('./connection');

const getAllProducts = async () =>  connection()
  .then((db) => db.getTable('products').select().execute())
  .then((results) => results.fetchAll())
  .then((beer) =>
    beer.map(([id, name, price, url_image]) => ({
      id,
      name,
      price,
      url_image,
    })),
  );

module.exports = {
  getAllProducts,
};
