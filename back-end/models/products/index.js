// model produtos
const connection = require('../dbConnection/index');


const getAllProducts = async () => {
  const productList = await connection()
    .then((db) => db.getTable('products').select([])
      .execute())
    .then((results) => results.fetchAll())
    .then((products) => products.map(([id, name, price, urlImage]) => ({
      id, name, price, urlImage,
    })));
  return productList;
};

module.exports = { getAllProducts };
