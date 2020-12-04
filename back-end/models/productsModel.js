const conn = require('./connection');

const read = async () => {
  const table = await conn().then((db) => db.getTable('products'));
  const products = await table.select([]).execute();

  return products.fetchAll().map(([id, name, price, urlImg]) => ({ id, name, price, urlImg }));
};

module.exports = {
  read,
};
