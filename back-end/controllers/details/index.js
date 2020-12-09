const { getDetail, getSaleInfo } = require('../../models/details');

const getDetailController = async (req, res) => {
  try {
    const id = req.params.numeroDoPedido;
    const saleInf = await getSaleInfo(id);
    const prodInfo = await getDetail(id);

    if (saleInf && prodInfo) {
      const { totalPrice, data } = saleInf[0];
      return res.status(200).json({ id, totalPrice, data, prodInfo });
    }
    return res.status(500).json({ message: 'I have bad news' });
  } catch (error) {
    return res.status(500).json({ message: 'I have bad news' });
  }
};

module.exports = getDetailController;
