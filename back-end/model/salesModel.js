const connection = require('./connection');
const simpleConnection = require('./simpleConnection');

const getSalesById = async (idInput) => {
  const SALEPRODUTQUERY = `SELECT P.name, P.price, S.total_price, S.sale_date, SP.quantity, SP.sale_id,
  P.price * SP.quantity as total_price_produt
  FROM products AS P
  INNER JOIN sales_products AS SP
  ON P.id = SP.product_id
  INNER JOIN sales AS S
  ON S.id = SP.sale_id
  WHERE SP.sale_id = ${idInput};`;
  const session = await simpleConnection();
  const result = await session
    .sql(SALEPRODUTQUERY)
    .execute()
    .then((results) => results.fetchAll())
    .then((salesInfo) =>
      salesInfo.map(([name, price, totalSale, saleDate, quantity, saleId, totalSaleProduct]) => ({
        name,
        price,
        totalSale,
        saleDate,
        quantity,
        saleId,
        totalSaleProduct,
      })),
    );
  return result;
};

module.exports = {
  getSalesById,
};
