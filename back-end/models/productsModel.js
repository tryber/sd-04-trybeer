const connection = require('./connection');

const getAllProducts = async () => {
  try {
    const db = await connection();
    const query = await db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute();
    const result = await query.fetchAll();
    return result.map(([id, name, price, urlImage]) => ({
      id,
      name,
      price,
      urlImage,
      quantity: 0,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

const getAllSales = async () => {
  try {
    const db = await connection();
    const query = await db
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
    const result = await query.fetchAll();
    console.log('Result: ', result);
    return result.map(
      ([orderId, userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status]) => ({
        orderId,
        userId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      }),
    );
  } catch (error) {
    console.log(error.message);
  }
};

// {
//   userId: 2,
//   total: 6.98,
//   rua: 'Rua Teste',
//   numeroCasa: '207',
//   currentDate: '2020-10-4',
//   status: 'status'
// }

const insertNewSale = async ({ userId, total, rua, numeroCasa, currentDate, status }) => {
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
    .values(
      userId,
      total,
      rua,
      numeroCasa,
      currentDate,
      status,
    )
    .execute();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllProducts,
  getAllSales,
  insertNewSale,
};
