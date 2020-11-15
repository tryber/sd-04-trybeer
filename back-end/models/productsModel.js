const conn = require('./connection');

const read = async () => {
  const table = await conn().then((db) => db.getTable('products'));
  const products = await table.select([]).execute();

  return products.fetchAll().map(([id, name, price, url_image]) =>
    ({ id, name, price, url_image }));
};

// IIFE para testes, ignorem!!!
// (async () => console.log(await read()))();

module.exports = {
  read,
};
