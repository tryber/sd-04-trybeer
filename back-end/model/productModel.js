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

const getOrderByUserId = async (idInput) => connection().then((db) => db
  .getTable('sales')
  .select()
  .where('user_id = :user_id')
  .bind('user_id', idInput)
  .execute())
  .then((results) => results.fetchAll())
  .then((order) => order
    .map(([id, userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status]) => ({
      id,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    })));

module.exports = {
  getAllProducts,
  getOrderByUserId,
};
