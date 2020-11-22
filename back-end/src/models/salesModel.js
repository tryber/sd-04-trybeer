const connection = require('./connection');

const getAllSales = async () => {
  try {
    const db = await connection();
    const searchQuery = await db.getTable('sales').select([]).execute();
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
  await conn
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
};

const insertSale2 = async (
  userId,
  totalPrice,
  deliveryAddr,
  deliveryNumber,
  saleDate,
) => {
  const session = await connection();
  const sqlToExecute = await session
    .sql(
      `INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (${userId}, ${totalPrice}, ${deliveryAddr}, ${deliveryNumber}, ${saleDate}, pending)`,
    )
    .execute();
  const result = await sqlToExecute.getAutoIncrementValue();
  return result;
};

const insertProductSale = async (saleId, productId, quantity) => {
  const conn = await connection();
  await conn
    .getTable('sales_products')
    .insert(['sale_id', 'product_id', 'quantity'])
    .values(saleId, productId, quantity)
    .execute();
};

const getSaleById = async (saleId) => {
  const conn = await connection();
  const result = await conn
    .getTable('sales')
    .select([])
    .where('id = :saleId')
    .bind('saleId', saleId)
    .execute();
  const fetchedResult = await result.fetchAll();
  const sale = fetchedResult.map(
    ([
      id,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    ]) => ({
      id,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    }),
  )[0];

  return sale;
};

module.exports = {
  getAllSales,
  insertSale,
  getSaleById,
  insertProductSale,
  insertSale2,
};
