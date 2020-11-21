const connection = require('./connection');
const simpleConnection = require('./simpleConnection');

const createOrder = async (
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  saleDate,
  status = 'Pendente',
) => connection().then((db) => db
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
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
  )
  .execute());

const insertSaleProduct = async (saleId, cart) => {
  const result = cart.map((item) => (
    connection().then((db) => db
      .getTable('sales_products')
      .insert(['sale_id', 'product_id', 'quantity'])
      .values(saleId, item.id, item.quantidade)
      .execute())));
  return result;
}


const getSalesById = async (idInput) => {
  const SALEPRODUTQUERY = `SELECT P.name, P.price, S.total_price, S.sale_date, SP.quantity, SP.sale_id,
  P.price * SP.quantity as total_price_produt
  FROM products AS P
  INNER JOIN sales_products AS SP
  ON P.id = SP.product_id
  INNER JOIN sales AS S
  ON S.id = SP.sale_id
  WHERE SP.sale_id = ${idInput};`;
  const session = await simpleConnection();
  const result = await session
    .sql(SALEPRODUTQUERY)
    .execute()
    .then((results) => results.fetchAll())
    .then((salesInfo) => salesInfo
      .map(([name, price, totalSale, saleDate, quantity, saleId, totalSaleProduct]) => ({
        name,
        price,
        totalSale,
        saleDate,
        quantity,
        saleId,
        totalSaleProduct,
      })));

  return result;
};

module.exports = {
  createOrder,
  getSalesById,
  insertSaleProduct,
};
