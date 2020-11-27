const { addSale, addSaleProduct } = require('../../models/sales');
// import { addSale } from ;

const checkout = async (req, res) => {
  const { products, status, date, userId, cartValue, addressValue, numberValue } = req.body;
  try {
    const resultSale = await addSale(userId, cartValue, addressValue, numberValue, date, status);
    const { id } = resultSale;
    const resultSaleProd = products.forEach(async (e) => addSaleProduct(id, e.id, e.quantity));
    return res.status(200).json({ resultSale, resultSaleProd });
  } catch (error) {
    return res.status(500).json({ message: 'I have bad news' });
  }
};

module.exports = { checkout };

// const handleSaleProduct = async (id) => {
//   const storage = localStorage.cartItens ? localStorage.cartItens : [];
//   storage.forEach(async (e) => await saleProduct(id, e.id, e.quantity));
// };
