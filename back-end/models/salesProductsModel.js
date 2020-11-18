const connection = require('./connection');

const registerSalesProducts = async (saleId, productId, quantity) => {
  await connection().then((db) =>
    db
      .getTable('sales_products')
      .insert(['sale_id', 'product_id', 'quantity'])
      .values(saleId, productId, quantity)
      .execute()
  );
};

// const getOrderById = async (id) => {
//   const order = await connection().then((db) => db
//     .getTable('sales')
//     .select(['id', 'total_price', 'sale_date'])
//     .where('id = :id')
//     .bind('id', id)
//     .execute()
//     .then((results) => results.fetchAll()));

//   if (!order) return null;

//   return order.map(([id, price, date]) => ({
//     id,
//     price,
//     date,
//   }));
// }

module.exports = { registerSalesProducts };
