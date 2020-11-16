// model produtos
const connection = require('../dbConnection/index');

const getAllProducts = async () => connection()
  .then((db) => db.getTable('products').select([])
    .execute())
  .then((results) => results.fetchAll())
  .then((products) => products.map(([id, name, price, urlImage]) => ({
    id, name, price, urlImage,
  })));
module.exports = { getAllProducts };
