const connection = require('./connection');

const insertSale = async (
  userId,
  totalPrice,
  deliveryAddr,
  deliveryNumber,
  saleDate,
) => {
  const conn = await connection();
  await conn
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
      deliveryAddr,
      deliveryNumber,
      saleDate,
      'pending',
    )
    .execute();
};

module.exports = {
  insertSale,
};
