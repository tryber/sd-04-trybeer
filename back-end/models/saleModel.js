const { connection } = require('./connection');

const arrayToObj = (sales, selection) => sales.map((sale) => sale
  .reduce((acc, curr, i) => ({ ...acc, [selection[i]]: curr }), {}));

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

const getAllSalesBy = async (info, fieldSearch, selection) => connection()
  .then((db) => db
    .getTable('sales')
    .select(selection)
    .where(`${fieldSearch} = :param`)
    .bind('param', info)
    .execute())
  .then((result) => result.fetchAll())
  .then((sales) => {
    if (!sales) return null;
    return arrayToObj(sales, selection);
  });

module.exports = {
  insertNewSale,
  insertProductSale,
  getSales,
  getAllSalesBy,
};
