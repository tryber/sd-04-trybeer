const connection = require('../dbConnection');

const addSale = (id, value, address, number, date, status) => {
  const result = connection()
    .then((db) => db.getTable('sales')
      .insert(['user_id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status'])
      .values(id, value, address, number, date, status)
      .execute())
    .catch((e) => e);
  return result;
};

const addSaleProduct = (saleId, prodId, quantity) => connection()
  .then((db) => db.getTable('sale_product')
    .insert(['sale_id', 'product_id', 'quantity'])
    .values(saleId, prodId, quantity)
    .execute())
  .catch((e) => e);

module.exports = { addSale, addSaleProduct };
