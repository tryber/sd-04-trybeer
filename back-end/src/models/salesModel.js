const connection = require('./connection');

const getAllSales = async () => {
  try {
    const db = await connection();
    const searchQuery = await db
      .getTable('sales')
      .select([])
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
    console.log('estamos no model', error)
    return null
  }
};

module.exports = {
  getAllSales,
};