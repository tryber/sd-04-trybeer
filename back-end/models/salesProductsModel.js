const { connection } = require('./connection');

const getAllSalesProductsMod = async () => {
  try {
    const db = await connection();
    const salesProdDB = await db
      .getTable('sales_products')
      .select(['sale_id', 'product_id', 'quantity'])
      .execute();
    const allSalesProd = await salesProdDB.fetchAll();
    return allSalesProd.map(([saleId, productId, quantity]) => ({
      saleId,
      productId,
      quantity,
    }));
  } catch (error) {
    return error;
  }
};

const postRegisterSalesProductsMod = async (saleId, productId, quantity) => {
  try {
    const db = await connection();
    await db
      .getTable('sales_products')
      .insert(['sale_id', 'product_id', 'quantity'])
      .values(saleId, productId, quantity)
      .execute();
    return { message: 'Produto Registrado com sucesso!' };
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSalesProductsMod,
  postRegisterSalesProductsMod,
};
