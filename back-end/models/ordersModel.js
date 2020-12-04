const connection = require('./connection');

const getOrders = async () => {
  const table = await connection().then((db) => db.getTable('sales'));
  const sales = await table.select([]).execute();

  return sales
    .fetchAll();
};

const setOrder = async (id, total, num, street, date) =>
  connection()
    .then((db) => db
      .getTable('sales')
      .insert(['user_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status',
    ])
      .values(id, total, street, num, date, 'sold')
      .execute());

module.exports = {
  getOrders,
  setOrder,
};
