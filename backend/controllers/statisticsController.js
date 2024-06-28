// controllers/statisticsController.js
const Transaction = require('../models/Transaction');

const getStatistics = async (req, res) => {
  const { month } = req.query;
  try {
    const transactions = await Transaction.find({

      // dateOfSale: { $gte: new Date(`2021-${month}-01`), $lt: new Date(`2021-${month}-31`) },
      $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(month)] },
    });
    const totalSaleAmount = transactions.reduce((acc, transaction) => acc + transaction.price, 0);
    const totalSoldItems = transactions.filter((transaction) => transaction.sold).length;
    const totalNotSoldItems = transactions.filter((transaction) => !transaction.sold).length;
    res.json({ totalSaleAmount, totalSoldItems, totalNotSoldItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStatistics };
