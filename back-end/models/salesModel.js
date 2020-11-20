const simpleConnection = require('./simpleConnection');

const findSalesBySaleId = async (saleId) => {
  const db = await simpleConnection();
  const result = await db
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
    .then((results) => results.fetchAll())

  if (!result.length) return null;

  return result.map(
    ([
      product,
      price,
      totalPrice,
      saleDate,
      quantity,
      saleID,
    ]) => ({
      product,
      price,
      totalPrice,
      saleDate,
      quantity,
      saleID,
    }),
  );

};

module.exports = {
  findSalesBySaleId,
};
