const connection = require('../dbConnection/index');

const findOrderByUserId = async (userId) =>
  connection()
    .then((db) =>
      db
        .getTable('sales')
        .select([])
        .where('user_id = :userId')
        .bind('userId', userId)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((sales) =>
      sales.map(
        ([
          id,
          userId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          saleDate,
          status,
        ]) => ({
          id,
          userId,
          totalPrice,
          deliveryAddress,
          deliveryNumber,
          saleDate,
          status,
        })
      )
    );

module.exports = { findOrderByUserId };
