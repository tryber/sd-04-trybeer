const conn = require('./connection');

const create = async (order) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = order;
  const table = await conn().then((db) => db.getTable('sales'));

  table.insert([
    'user_id',
    'total_price',
    'delivery_address',
    'delivery_number',
    'sale_date',
    'status'
  ])
    .values(userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status)
    .execute();
};

const readOrder = async (id) => {
  const table = await conn().then((db) => db.getTable('sales'));
  const orders = await table
    .select([])
    .where('user_id = :user_id')
    .bind('user_id', id)
    .execute();

  return orders
    .fetchAll()
    .map(
      ([
        idSale,
        idUser,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      ]) => ({
        idSale,
        idUser,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      }),
    );
};

/*   const readOrder = async (id) => {
    console.log(id)
  }; */

module.exports = {
  create,
  readOrder,
};
