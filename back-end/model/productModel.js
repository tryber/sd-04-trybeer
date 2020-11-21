const connection = require('./connection');

const getAllProducts = async () => connection()
  .then((db) => db
    .getTable('products')
    .select()
    .execute())
  .then((results) => results.fetchAll())
  .then((beer) => beer.map(([id, name, price, urlImage]) => ({
    id,
    name,
    price,
    urlImage,
  })));

const getOrderByUserId = async (userId) => connection().then((db) => db
  .getTable('sales')
  .select()
  .where('user_id = :user_id')
  .bind('user_id', userId)
  .execute())
  .then((results) => results.fetchAll())
  .then((order) => order.map(([
    id, user_id, total_price, delivery_address, delivery_number, sale_date, status
  ]) => ({
    id,
    user_id,
    total_price,
    delivery_address,
    delivery_number,
    sale_date,
    status,
  })));

module.exports = {
  getAllProducts,
  getOrderByUserId,
};
