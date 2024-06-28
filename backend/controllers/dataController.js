// controllers/dataController.js
const axios = require('axios');
const Transaction = require('../models/Transaction');
const seedData = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;
    await Transaction.deleteMany({});
    await Transaction.insertMany(transactions);
    res.status(200).json({ message: 'Data seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { seedData };
