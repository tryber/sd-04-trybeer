const connection = require('./connection');

const read = async () => {
  const table = await connection().then((db) => db.getTable('products'));
  const products = await table.select([]).execute();

  return products.fetchAll().map(([id, name, price, urlImg]) => ({ id, name, price, urlImg }));
};

// const getProductById = (id) =>
//   connection().then((db) =>
//   db
//     .getTable('products')
//     .select()
//     .where('id = :idBind')
//     .bind('idBind', id)
//     .execute()
//     .then((result) => result.fetchOne())
//     .then((product) => product),
//   );

module.exports = {
  read,
  // getProductById,
};
