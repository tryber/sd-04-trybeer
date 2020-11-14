const connection = require('./connection');

const getAllProductModels = async () => {
  try {
    const db = await connection();
    const results = await db
      .getTable('products')
      .select(['id', 'name', 'price', 'url_image'])
      .execute();
    const productsArray = await results.fetchAll();
    const products = await productsArray.map(([id, name, price, url_image]) => ({
      id,
      name,
      price,
      url_image,
    }));

    return products;
  } catch (err) {
    console.error('getAllProductModels', err.message);
  }
};

module.exports = {
  getAllProductModels,
};
