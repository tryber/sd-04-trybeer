const connection = require('./connection');

const getAllSales = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select('id', 'total_price', 'delivery_address', 'delivery_number', 'status')
    .execute())
  .then((results) => results.fetchAll())
  .then((order) => order.map(([id, totalPrice, deliveryAddress, deliveryNumber, status]) => ({
    id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  })));

module.exports = {
  getAllSales,
};
