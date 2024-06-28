// src/components/BarChart.js
import React, { useState, useEffect } from 'react';
import { fetchBarChart } from '../api/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const BarChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBarChart = async () => {
      const chartData = await fetchBarChart(month);
      setData(chartData);
    };
    getBarChart();
  }, [month]);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;

