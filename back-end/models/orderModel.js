const conn = require('./connection');

const create = async (order) => {
  try {
    const { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = order;
    const table = await conn().then((db) => db.getTable('sales'));
    const result = await table.insert([
      'user_id',
      'total_price',
      'delivery_address',
      'delivery_number',
      'sale_date',
      'status',
    ]).values(userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status)
      .execute();

    return result.getAutoIncrementValue();
  } catch (e) {
    console.log(e.message);
  }
};

const orderUpdate = async (orderId, newStatus) => {
  await conn()
    .then((db) => db
      .getTable('sales')
      .update()
      .set('status', newStatus)
      .where('id = :order_Id')
      .bind('order_Id', orderId)
      .execute());
};

const readById = async (orderId) => {
  const table = await conn().then((db) => db.getTable('sales'));
  const order = await table
    .select([])
    .where('id = :order_id')
    .bind('order_id', orderId)
    .execute();

  return order
    .fetchAll()
    .map(([
      saleId,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    ]) => ({
      saleId,
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate,
      status,
    }));
};

const readOrder = async (id) => {
  const table = await conn().then((db) => db.getTable('sales'));
  const orders = await table
    .select([])
    .where('user_id = :user_id')
    .bind('user_id', id)
    .execute();

  return orders
    .fetchAll()
    .map(
      ([
        idSale,
        idUser,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      ]) => ({
        idSale,
        idUser,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      }),
    );
};

const readAllOrder = async () => {
  const table = await conn().then((db) => db.getTable('sales'));
  const orders = await table
    .select([])
    .execute();

  return orders
    .fetchAll()
    .map(
      ([
        idSale,
        idUser,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      ]) => ({
        idSale,
        idUser,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        saleDate,
        status,
      }),
    );
};
/*   const readOrder = async (id) => {
    console.log(id)
  }; */

module.exports = {
  create,
  readOrder,
  readById,
  readAllOrder,
  orderUpdate,
};
