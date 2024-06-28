// routes/chartRoutes.js
const express = require('express');
const { getBarChart, getPieChart } = require('../controllers/chartController');
const router = express.Router();
router.get('/barchart', getBarChart);
router.get('/piechart', getPieChart);
module.exports = router;