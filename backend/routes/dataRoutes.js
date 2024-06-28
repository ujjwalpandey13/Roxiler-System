// routes/dataRoutes.js
const express = require('express');
const { seedData } = require('../controllers/dataController');
const router = express.Router();
router.get('/seed', seedData);
module.exports = router;
