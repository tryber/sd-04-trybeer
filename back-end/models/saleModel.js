const { session } = require("./connection");

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

module.exports = { getDetailsSale };
