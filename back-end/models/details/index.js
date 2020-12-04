const connection = require('../dbConnection/index');

const getDetail = async (saleId) => {
  const session = await connection();
  const result = await session.sql(
    `SELECT
    sp.quantity as prodQuantity, p.name as prodName, (sp.quantity * p.price) as prodPrice, 
    FROM sales_procuts as sp
    INNER JOIN products as p on sp.product_id = p.id
    WHERE sp.sale_ = saleId`
  )
  .bind(saleId)
  .execute()
  .then((results) => results.fetchAll())
  .then((sale) => sale.map(
    ([prodQuantity, prodName, prodPrice]) => ({prodQuantity, prodName, prodPrice}),
  ));
  if (!results.length) return null;
  return results;
}

const getSaleInfo = async () => {
  const saleINfo = await connection()
    .then((db) => db.getTable('sales').select([])
      .execute())
    .then((results) => results.fetchAll())
    .then((products) => products.map(([id, userId, totalPrice, data, status]) => ({
      id, userId, totalPrice, data, status,
    })));
  return saleINfo;
}

module.exports = {getDetail, getSaleInfo};
