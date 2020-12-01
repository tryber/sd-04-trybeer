const connection = require('../dbConnection/index');

const findOrderByUserId = async (UId) => {
  const userOrder = await connection()
    .then((db) => db.getTable('sales').select([])
      .where('user_id = :userId')
      .bind('userId', UId)
        .execute(),)
    .then((results) => results.fetchAll())
    .then((sales) => sales.map(
        ([id, userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,]) => ({
          id, userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
        }),
      ),);

  return userOrder;
};

module.exports = { findOrderByUserId };
