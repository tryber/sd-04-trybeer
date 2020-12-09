const { getDetail, getSaleInfo } = require('../../models/details');

const getDetailController = async (req, res) => {
  try {
    const saleInf = await getSaleInfo();
    const prodInfo = await getDetail();
    return res.status(200).json({saleInf, prodInfo})
    
  } catch (error) {
    return res.status(500).json({ message: 'I have bad news' });
  }
}

module.exports = getDetailController