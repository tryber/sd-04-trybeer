const connection = require('./connection');
const simpleConnection = require('./simpleConnection');

const registerSalesProducts = async (saleId, productId, quantity) => {
  await connection().then((db) => db
    .getTable('sales_products')
    .insert(['sale_id', 'product_id', 'quantity'])
    .values(saleId, productId, quantity)
    .execute());
};

const getSaleById = async (saleId) => {
  const session = await simpleConnection();
  const result = await session
    .sql(
      `SELECT P.name, P.price, S.total_price, S.sale_date, SP.quantity, SP.sale_id
      FROM products AS P
      INNER JOIN sales_products AS SP
      ON P.id = SP.product_id
      INNER JOIN sales AS S
      ON S.id = SP.sale_id
      WHERE SP.sale_id = ${saleId};`,
    )
    .execute()
    .then((results) => results.fetchAll());

  if (!result.length) return null;
  return result.map(
    ([
      productName,
      productPrice,
      totalPrice,
      saleDate,
      productQuantity,
      saleID,
    ]) => ({
      productName,
      productPrice,
      totalPrice,
      saleDate,
      productQuantity,
      saleID,
    }),
  );
};

module.exports = { registerSalesProducts, getSaleById };
