// // src/components/PieChart.js
// import React, { useState, useEffect } from 'react';
// import { fetchPieChart } from '../api/api';
// import { PieChart, Pie, Tooltip } from 'recharts';

// const PieChartComponent = ({ month }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getPieChart = async () => {
//       const chartData = await fetchPieChart(month);
//       setData(chartData);
//     };
//     getPieChart();
//   }, [month]);

//   return (
//     <PieChart width={400} height={400}>
//       <Pie data={data} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
//       <Tooltip />
//     </PieChart>
//   );
// };

// export default PieChartComponent;



// src/components/PieChart.js
import React, { useState, useEffect } from 'react';
import { fetchPieChart } from '../api/api';
import { PieChart, Pie, Tooltip } from 'recharts';

const PieChartComponent = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPieChart = async () => {
      const chartData = await fetchPieChart(month);
      setData(chartData);
    };
    getPieChart();
  }, [month]);

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
