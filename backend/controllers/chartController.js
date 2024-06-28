// controllers/chartController.js
const Transaction = require('../models/Transaction');


const getBarChart = async (req, res) => {
  const { month } = req.query;
  try {
    const transactions = await Transaction.find({
      // dateOfSale: { $gte: new Date(`2021-${month}-01`), $lt: new Date(`2021-${month}-31`) },
      $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(month)] },
    });
    const priceRanges = [
      { range: '0-100', count: 0 },
      { range: '101-200', count: 0 },
      { range: '201-300', count: 0 },
      { range: '301-400', count: 0 },
      { range: '401-500', count: 0 },
      { range: '501-600', count: 0 },
      { range: '601-700', count: 0 },
      { range: '701-800', count: 0 },
      { range: '801-900', count: 0 },
      { range: '901-above', count: 0 },
    ];
    transactions.forEach((transaction) => {
      if (transaction.price <= 100) priceRanges[0].count++;
      else if (transaction.price <= 200) priceRanges[1].count++;
      else if (transaction.price <= 300) priceRanges[2].count++;
      else if (transaction.price <= 400) priceRanges[3].count++;
      else if (transaction.price <= 500) priceRanges[4].count++;
      else if (transaction.price <= 600) priceRanges[5].count++;
      else if (transaction.price <= 700) priceRanges[6].count++;
      else if (transaction.price <= 800) priceRanges[7].count++;
      else if (transaction.price <= 900) priceRanges[8].count++;
      else priceRanges[9].count++;
    });
    res.json(priceRanges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getPieChart = async (req, res) => {
//   const { month } = req.query;
//   try {
//     const transactions = await Transaction.find({
//       // dateOfSale: { $gte: new Date(`2021-${month}-01`), $lt: new Date(`2021-${month}-31`) },

//       $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(month)] },
//     });
//     const categories = {};
//     transactions.forEach((transaction) => {
//       if (categories[transaction.category]) {
//         categories[transaction.category]++;
//       } else {
//         categories[transaction.category] = 1;
//       }
//     });
//     const pieChartData = Object.entries(categories).map(([category, count]) => ({ category, count }));
//     res.json(pieChartData);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// backend/controllers/chartController.js
const getPieChart = async (req, res) => {
  const { month } = req.query;
  try {
    const transactions = await Transaction.find({
      $expr: { $eq: [{ $month: "$dateOfSale" }, parseInt(month)] },
    });

    const categories = {};
    transactions.forEach((transaction) => {
      const category = transaction.category || 'Uncategorized'; // Handle undefined categories
      if (categories[category]) {
        categories[category]++;
      } else {
        categories[category] = 1;
      }
    });

    const pieChartData = Object.entries(categories).map(([category, count]) => ({ category, count }));
    res.json(pieChartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = { getBarChart, getPieChart };
