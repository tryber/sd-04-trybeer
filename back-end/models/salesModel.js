const connection = require('./connection');

const registerSale = async (
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  saleDate,
  status,
) => {
  await connection().then((db) => db
    .getTable('sales')
    .insert([
      'user_id',
      'total_price',
      'delivery_address',
      'delivery_number',
      'sale_date',
      'status',
    ])
    .values(
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    )
    .execute());
};

module.exports = { registerSale };
