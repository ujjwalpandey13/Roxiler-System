// controllers/transactionController.js
const Transaction = require('../models/Transaction');

const getTransactions = async (req, res) => {
  const { month, search, page = 1, perPage = 10 } = req.query;
  try {
    const query = {
      // dateOfSale: { $gte: new Date(`2021-${month}-01`), $lt: new Date(`2021-${month}-31`) },
      $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(month)] },

    };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { price: { $regex: search, $options: 'i' } },
      ];
    }
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTransactions };
