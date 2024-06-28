// src/components/Statistics.js
import React, { useState, useEffect } from 'react';
import { fetchStatistics } from '../api/api';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

  useEffect(() => {
    const getStatistics = async () => {
      const data = await fetchStatistics(month);
      setStatistics(data);
    };
    getStatistics();
  }, [month]);

  return (
    <div>
      <div>Total Sale Amount: {statistics.totalSaleAmount}</div>
      <div>Total Sold Items: {statistics.totalSoldItems}</div>
      <div>Total Not Sold Items: {statistics.totalNotSoldItems}</div>
    </div>
  );
};

export default Statistics;
