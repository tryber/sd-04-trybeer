const genericModel = require('../models/genericModel');
const salesModel = require('../models/salesModel');

const getSales = async (emailParam) => {
  const user = await genericModel.findUserBy(emailParam, 'email');
  const salesUser = await salesModel.getAllSalesById(user.id, 'user_id', [
    'id',
    'total_price',
    'sale_date',
  ]);
  return salesUser;
};

module.exports = { getSales };
