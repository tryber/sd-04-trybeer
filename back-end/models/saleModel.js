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

module.exports = {
  insertNewSale,
  insertProductSale,
  getSales,
  getSaleById,
};
