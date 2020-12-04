const conn = require('./connection');

const getOrder = async () => {
  const table = await conn().then((db) => db.getTable('sales'));
  const sales = await table.select([]).execute();

  return sales.fetchAll().map(([id, user_id, total_price, delivery_address, delivery_number, sale_date, status]) => ({ id, user_id, total_price, delivery_address, delivery_number, sale_date, status }));
};

const setOrder = async (id, total, num, street, date) =>
  conn().then((db) =>
    db
      .getTable('sales')
      .insert(['user_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status'])
      .values(id, total, street, num, date, 'sold')
      .execute(),
  );

module.exports = {
  getOrder,
  setOrder,
};
