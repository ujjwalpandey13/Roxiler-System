// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const dataRoutes = require('./routes/dataRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
const chartRoutes = require('./routes/chartRoutes');

app.use('/api/data', dataRoutes);
app.use('/api', transactionRoutes);
app.use('/api', statisticsRoutes);
app.use('/api', chartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
