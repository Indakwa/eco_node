import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', user1Tokens: 50, user2Tokens: 30 },
  { month: 'Feb', user1Tokens: 70, user2Tokens: 45 },
  { month: 'Mar', user1Tokens: 40, user2Tokens: 60 },
  { month: 'Apr', user1Tokens: 90, user2Tokens: 75 },
  { month: 'May', user1Tokens: 60, user2Tokens: 80 },
];

const darkModeColors = ['#61dafb', '#67cc4a']; // Example dark mode colors

const HistoricalTokenEarningsChart = () => (
  <LineChart
    width={844}
    height={400}
    data={data}
    margin={{ top: 40, right: 48, left: 0, bottom: 20 }}
    style={{ background: '#33333392', color: '#ececec' }} // Dark mode background and text color
    className='chart'
  >
    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
    <XAxis dataKey="month" tick={{ fill: '#ececec' }} />
    <YAxis tick={{ fill: '#ececec' }} />
    <Tooltip
      contentStyle={{ background: '#333', border: '1px solid #555', color: '#ececec' }}
      labelStyle={{ color: '#ececec' }}
      itemStyle={{ color: '#ececec' }}
    />
    <Legend />
    <Line type="monotone" dataKey="user1Tokens" name="Carbon Credit Earnings" stroke={darkModeColors[0]} />
    <Line type="monotone" dataKey="user2Tokens" name="Carbon Offsetting Activities" stroke={darkModeColors[1]} />
  </LineChart>
);

export default HistoricalTokenEarningsChart;
