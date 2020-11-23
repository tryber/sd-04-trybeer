const { connection, connectionJoin } = require('./connection');

const getAllSales = async () => {
  try {
    const db = await connection();
    const searchQuery = await db.getTable('sales').select([])
      .execute();
    const results = await searchQuery.fetchAll();
    const salesResults = results.map(
      ([
        id,
        userID,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      ]) => ({
        id,
        userID,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      }),
    );
    return salesResults;
  } catch (error) {
    console.log('estamos no model', error);
    return null;
  }
};

const insertSale = async (
  userId,
  totalPrice,
  deliveryAddr,
  deliveryNumber,
  saleDate,
) => {
  const conn = await connection();
  const insertedSale = await conn
    .getTable('sales')
    .insert([
      'user_id',
      'total_price',
      'delivery_address',
      'delivery_number',
      'sale_date',
      'status',
    ])
    .values(
      userId,
      totalPrice,
      deliveryAddr,
      deliveryNumber,
      saleDate,
      'pending',
    )
    .execute();

  return insertedSale.getAutoIncrementValue();
};

const insertSalesProducts = async (
  saleId,
  productId,
  quantity,
) => {
  const conn = await connection();
  await conn
    .getTable('sales_products')
    .insert([
      'sale_id',
      'product_id',
      'quantity',
    ])
    .values(
      saleId,
      productId,
      quantity,
    )
    .execute();
};

const getSaleById = async (saleId) => {
  const conn = await connectionJoin();
  const response = await conn
    .sql(
      `SELECT Prod.name, Prod.price, S.total_price, S.sale_date, S.status, SProd.quantity, SProd.sale_id
      FROM products AS Prod
      INNER JOIN sales_products AS SProd
      ON Prod.id = SProd.product_id
      INNER JOIN sales AS S
      ON S.id = SProd.sale_id
      WHERE SProd.sale_id = ${saleId};`,
    )
    .execute();

  const result = await response.fetchAll();

  if (!result.length) return null;
  return result.map(
    ([
      productName,
      productPrice,
      totalPrice,
      saleDate,
      status,
      productQuantity,
      saleID,
    ]) => ({
      productName,
      productPrice,
      totalPrice,
      saleDate,
      status,
      productQuantity,
      saleID,
    }),
  );
};

module.exports = {
  getAllSales,
  getSaleById,
  insertSale,
  insertSalesProducts,
};
