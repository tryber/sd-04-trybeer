const { connection } = require('./connection');

const getAllSalesById = async (info, fieldSearch, selection) =>
  connection()
    .then((db) =>
      db
        .getTable('sales')
        .select(selection)
        .where(`${fieldSearch} = :param`)
        .bind('param', info)
        .execute()
    )

    .then((result) => result.fetchAll())
    .then((sales) => {
      if (!sales) return null;
      return sales.map((sale) =>
        sale.reduce((acc, curr, i) => ({ ...acc, [selection[i]]: curr }), {})
      );
    });

module.exports = { getAllSalesById };
