const connection = require('./connection');
const simpleConnection = require('./simpleConnection');

const getOrders = async () => {
  const table = await connection().then((db) => db.getTable('sales'));
  const sales = await table.select([]).execute();

  return sales
    .fetchAll();
};

const setOrder = async (id, total, num, street, date) => {
  connection()
    .then((db) => db
      .getTable('sales')
      .insert(['user_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status',
      ])
      .values(id, total, street, num, date, 'sold')
      .execute());
  const result = await connection()
    .then((db) => db
      .getTable('sales')
      .select([])
      .execute());
  return result.fetchOne()[0];
};

const setOrderDetails = async (saleId, productId, quantity) => (
  connection()
    .then((db) => db
      .getTable('sales_products')
      .insert(['sale_id', 'product_id', 'quantity',
      ])
      .values(saleId, productId, quantity)
      .execute())
);

const getOrderById = (id) => (
  connection()
    .then((db) => db
      .getTable('sales')
      .select()
      .where('id = :idBind')
      .bind('idBind', id)
      .execute()
      .then((result) => result.fetchOne())
      .then((order) => order))
);

const getSaleById = async (id) => {
  const session = await simpleConnection();
  const result = await session.sql(
    `SELECT * FROM Trybeer.sales_products AS sp
    JOIN Trybeer.products AS p ON sp.product_id = p.id
    WHERE sp.sale_id = ${id}`,
  )
    .execute()
    .then((data) => data.fetchAll());
  if (!result.length) return null;
  return result;
};

module.exports = {
  getOrders,
  setOrder,
  setOrderDetails,
  getOrderById,
  getSaleById,
};
