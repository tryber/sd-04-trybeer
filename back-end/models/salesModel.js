const connection = require('./connection');

const registerSale = async (
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  saleDate,
  status,
) => connection().then((db) => db.getTable('sales')
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

const getSalesByUserId = async (userId) => {
  const sales = await connection().then((db) => db
    .getTable('sales')
    .select(['id', 'total_price', 'sale_date'])
    .where('user_id = :userId')
    .bind('userId', userId)
    .execute()
    .then((results) => results.fetchAll()));

  if (!sales) return null;

  return sales.map(([id, price, date]) => ({
    id,
    price,
    date,
  }));
};

const getAllSales = async () => {
  const sales = await connection().then((db) => db
    .getTable('sales').select([
      'id',
      'total_price',
      'sale_date',
      'delivery_address',
      'delivery_number',
      'status',
    ])
    .execute()
    .then((results) => results.fetchAll()));

  if (!sales) return null;

  return sales.map(([id, price, date, address, number, status]) => ({
    id,
    price,
    date,
    address,
    number,
    status,
  }));
};

module.exports = { registerSale, getSalesByUserId, getAllSales };
