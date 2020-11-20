const connection = require('./connection');

const findAllSales = async () => {
  try {
    const db = await connection();
    const table = await db.getTable('sales');
    const results = await table.select([]).execute();
    const sales = await results.fetchAll();
    return sales.map(([id, userId, totalPrice, deliveryAdress,
      deliveryNumber, saleDate, status = 'ordered']) => ({
      id,
      userId,
      totalPrice,
      deliveryAdress,
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
    const [id, userId, totalPrice, deliveryAdress,
      deliveryNumber, saleDate, status] = await result.fetchOne();
    return {
      id,
      userId,
      totalPrice,
      deliveryAdress,
      deliveryNumber,
      saleDate,
      status,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
};

const registerSale = async (userId, totalPrice, deliveryAdress,
  deliveryNumber, saleDate) => {
  try {
    const db = await connection();
    const table = await db.getTable('sales');
    const result = await table
      .insert(['user_id', 'total_price', 'delivery_adress',
        'delivery_number', 'sale_date'])
      .values(userId, totalPrice, deliveryAdress,
        deliveryNumber, saleDate)
      .execute();
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
  findAllSales,
  findSaleById,
  registerSale,
};
