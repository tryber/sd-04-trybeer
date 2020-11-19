const connection = require('./connection');

const getAllProductMod = async () => {
  try {
    const db = await connection();
    const prodDB = await db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute();
    const allProducts = await prodDB.fetchAll();
    return allProducts.map(([id, name, price, url_image]) => ({
      id,
      name,
      price,
      url_image,
    }));
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProductMod,
};
