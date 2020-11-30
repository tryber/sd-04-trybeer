const connection = require('./connection');
const getSession = require('./getSession');

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

const insertInSalesProducts = async (purchasedProducts, saleInsertedId) => {
  try {
    const db = await connection();
    purchasedProducts.forEach(async ({ id: productId, quantity }) => {
      await db
        .getTable('sales_products')
        .insert([
          'sale_id',
          'product_id',
          'quantity',
        ])
        .values(
          saleInsertedId,
          productId,
          quantity,
        )
        .execute();
    });
  } catch (error) {
    console.log(error.message);
  }
};

const insertNewSale = async ({
  userId, total, rua, numeroCasa, currentDate, status, purchasedProducts,
}) => {
  try {
    const db = await connection();
    const retorno = await db
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
      // Pra pegar o id inserido use a resposta do insert e
      // resposta.getAutoIncrementValue();
    const saleInsertedId = retorno.getAutoIncrementValue();
    await insertInSalesProducts(purchasedProducts, saleInsertedId);
  } catch (error) {
    console.log(error.message);
  }
};

const getSaleById = async (saleId) => {
  const db = await connection();
  const table = await db.getTable('sales');
  const result = await table
    .select()
    .where('id = :id')
    .bind('id', saleId)
    .execute();
  const sale = await result.fetchOne() || [];
  if (!sale.length) return sale;
  const [id, userId, totalPrice, deliveryAddress, deliveryNumber, date, status] = sale;
  return {
    id,
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    date,
    status,
  };
};

const getSaleProducts = async (saleId) => {
  const session = await getSession();
  const result = await session
  // SELECT sales.*,
  //     sproducts.product_id AS sold_product_id,
  //     sproducts.quantity AS sold_quantity,
  //     products.name AS product_name,
  //     products.price AS product_price,
  //     FROM Trybeer.sales_products AS sproducts
  //     INNER JOIN Trybeer.sales AS sales ON sproducts.sale_id = sales.id
  //     AND sales.id = ${saleId}
  //     INNER JOIN Trybeer.products AS products
  //     ON sproducts.product_id = products.id ORDER BY sales.id
    .sql(
      `SELECT products.id, products.name, products.price, sp.quantity
      FROM Trybeer.products AS products
      INNER JOIN Trybeer.sales_products AS sp ON products.id = sp.product_id
      WHERE sp.sale_id = ?;`,
    )
    .bind(saleId)
    .execute();
  const products = await result.fetchAll();
  return products.map(([id, name, price, quantity]) => ({
    id,
    name,
    price,
    quantity,
  }));
};

module.exports = {
  getAllProducts,
  getAllSales,
  insertNewSale,
  getSaleById,
  getSaleProducts,
};
