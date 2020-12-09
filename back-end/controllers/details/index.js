const { getDetail, getSaleInfo, updateSale } = require('../../models/details');

const getDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const saleInf = await getSaleInfo(id);
    console.log(saleInf);
    const prodInfo = await getDetail(id);

    if (saleInf && prodInfo) {
      const { totalPrice, data, status } = saleInf[0];
      return res.status(200).json({ id, totalPrice, data, status, prodInfo });
    }
    return res.status(500).json({ message: 'I have bad news' });
  } catch (error) {
    return res.status(500).json({ message: 'I have bad news' });
  }
};

const postDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    await updateSale(id);
    res.status(200).json({});
  } catch (error) {
    return res.status(500).json({ message: 'I have bad news' });
  }
};

module.exports = { getDetailController, postDetailController };
