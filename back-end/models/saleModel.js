const connection = require('./connection');
const simpleConnection = require('./simpleConnection');

const findAllSales = async () => {
  try {
    const db = await connection();
    const table = await db.getTable('sales');
    const results = await table.select([]).execute();
    const sales = await results.fetchAll();
    return sales.map(([id, userId, totalPrice, deliveryAddress,
      deliveryNumber, saleDate, status = 'ordered']) => ({
      id,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    }));
  } catch (err) {
    console.error(err);
    return null;
  }
};

const findSaleById = async (saleId) => {
  try {
    const db = await connection();
    const table = await db.getTable('sales');
    const result = await table.select([])
      .where('id = :id')
      .bind('id', saleId)
      .execute();
    const [id, userId, totalPrice, deliveryAddress,
      deliveryNumber, saleDate, status] = await result.fetchOne();
    return {
      id,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};

const registerSale = async (userId, totalPrice, deliveryAddress,
  deliveryNumber, saleDate, status = 'ordered') => {
  try {
    const db = await connection();
    const table = await db.getTable('sales');
    const result = await table
      .insert(['user_id', 'total_price', 'delivery_address',
        'delivery_number', 'sale_date', 'status'])
      .values(userId, totalPrice, deliveryAddress,
        deliveryNumber, saleDate, status)
      .execute();
    const saleId = result.getAutoIncrementValue();
    return saleId;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const findOrderByUserId = async (uid) => {
  try {
    const db = await connection();
    const table = await db.getTable('sales');
    const result = await table.select([])
      .where('id = :id')
      .bind('id', uid)
      .execute();
    const orders = await result.fetchAll();
    return orders.map(([id, userId, totalPrice, deliveryAddress,
      deliveryNumber, saleDate, status]) => ({
      id,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    }));
  } catch (err) {
    console.error(err);
    return null;
  }
};

const findOrderBySaleId = async (saleId) => {
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
    .then((results) => results.fetchAll());

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
  findAllSales,
  findSaleById,
  registerSale,
  findOrderBySaleId,
  findOrderByUserId,
};
