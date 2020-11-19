const conn = require('./connection');

const readOrder = async (id) => {
  const table = await conn().then((db) => db.getTable('sales'));
  const orders = await table
    .select([])
    .where('user_id = :user_id')
    .bind('user_id', id)
    .execute();

  return orders.fetchAll().map(([idSale, saleDate, totalPrice, userId]) => ({
    idSale,
    saleDate,
    totalPrice,
    userId,
  }));
};

/*   const readOrder = async (id) => {
    console.log(id)
  }; */

module.exports = {
  readOrder,
};
