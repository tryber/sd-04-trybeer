const { connection, simpleConnection } = require('./connection');

const getAllSalesMod = async () => {
  try {
    const db = await connection();
    const salesDB = await db
      .getTable('sales')
      .select([
        'id',
        'user_id',
        'total_price',
        'delivery_address',
        'delivery_number',
        'sale_date',
        'status',
      ])
      .execute();
    const allSales = await salesDB.fetchAll();
    return allSales.map(
      ([id, userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status]) => ({
        id,
        userId,
        total: totalPrice,
        address: deliveryAddress,
        number: deliveryNumber,
        date: saleDate,
        status,
      }),
    );
  } catch (error) {
    return error;
  }
};

const postFinishSalesMod = async (id, total, address, number, date, status = 'Pendente') => {
  try {
    const db = await connection();
    await db
      .getTable('sales')
      .insert([
        'user_id',
        'total_price',
        'delivery_address',
        'delivery_number',
        'sale_date',
        'status',
      ])
      .values(id, total, address, number, date, status)
      .execute();

    return { id, total, address, number, date, status };
  } catch (error) {
    return error;
  }
};

const updateStatusMod = async (id, status) => {
  try {
    const db = await connection();
    await db
      .getTable('sales')
      .update()
      .set('status', status)
      .where('id = :id')
      .bind('id', id)
      .execute();
  } catch (error) {
    return error;
  }
};

const getAdminOrderById = async (orderId) => {
  try {
    const db = await simpleConnection();
    const query = await db
      .sql(
        `SELECT sale_id, name, quantity, total_price, status, price  FROM sales_products AS sp
    INNER JOIN sales AS s ON s.id = sp.sale_id
    INNER JOIN products AS p ON p.id = sp.product_id
    WHERE sale_id = ?
    `,
      )
      .bind(orderId)
      .execute();

    const result = await query.fetchAll();
    return result.map(([saleId, name, quantity, totalPrice, status, price]) => ({
      saleId,
      name,
      quantity,
      totalPrice,
      status,
      price,
    }));
  } catch (error) {}
};

module.exports = {
  getAdminOrderById,
  getAllSalesMod,
  postFinishSalesMod,
  updateStatusMod,
};
