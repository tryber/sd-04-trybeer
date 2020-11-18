const { session } = require('./connection');
const { connection } = require('./connection');

const insertNewSale = async (id,
  totalPrice, nameAdress, numberAdress, saleDate, status) => connection()
  .then((schema) => schema
    .getTable('sales')
    .insert(['user_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status'])
    .values(id, totalPrice, nameAdress, numberAdress, saleDate, status)
    .execute())
  .then((query) => query.getAutoIncrementValue())
  .catch((err) => err);

const insertProductSale = async (saleId, productId, quantity) => connection()
  .then((schema) => schema
    .getTable('sales_products')
    .insert(['sale_id', 'product_id', 'quantity'])
    .values(saleId, productId, quantity)
    .execute())
  .catch((err) => err);

const getSales = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select()
    .execute())
  .then((result) => result.fetchAll())
  .catch((err) => err);

const getSaleById = async (id) => connection()
  .then((db) => db
    .getTable('sales')
    .select()
    .where('id = :id')
    .bind('id', id)
    .execute())
  .then((sale) => sale.fetchOne())
  .then(([saleId, userId, totalPrice, nameAdress, numberAdress, date, status]) => ({
    saleId,
    userId,
    totalPrice,
    nameAdress,
    numberAdress,
    date,
    status,
  }))
  .catch((err) => err);

const getDetailsSale = async (id) => {
  // pega os produtos da order de id x
  const db = await session();
  const stmt = await db
    .sql(
      `
        SELECT sp.sale_id, sp.product_id, sp.quantity, p.name, p.price
        FROM Trybeer.sales_products AS sp
        INNER JOIN Trybeer.products AS p
        ON sp.product_id = p.id
        WHERE sp.sale_id = ?
    `,
    )
    .bind(id)
    .execute();

  const products = stmt.fetchAll();
  const result = products.map(([saleId, productId, quantity, name, price]) => ({
    saleId,
    productId,
    quantity,
    name,
    price,
  }));
  return result;
};

module.exports = {
  insertNewSale,
  insertProductSale,
  getSales,
  getSaleById,
  getDetailsSale,
};
