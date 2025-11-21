"use client";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";

// Sample data
const data = [
  { name: "Page A", uv: 4, pv: 3, ss: 43 },
  { name: "Page B", uv: 2, pv: 1 },
  { name: "Page C", uv: 4, pv: 2 },
  { name: "Page D", uv: 5, pv: 7 },
  { name: "Page E", uv: 8, pv: 9 },
  { name: "Page F", uv: 6, pv: 7 },
  { name: "Page G", uv: 3, pv: 4 },
];

const HorizontalBarChart = ({ isAnimationActive = true }) => (
  <BarChart
    layout='vertical' // ✅ This makes the bars horizontal
    style={{
      width: "100%",
      maxWidth: "700px",
      maxHeight: "70vh",
      aspectRatio: 1.618,
    }}
    data={data}
  >
    <CartesianGrid strokeDasharray='2 2' />
    <XAxis type='number' /> {/* horizontal axis is now X */}
    <YAxis type='category' dataKey='name' /> {/* vertical axis is now Y */}
    <Tooltip />
    <Legend />
    <Bar dataKey='pv' fill='#8884d8' isAnimationActive={isAnimationActive} />
    <Bar dataKey='uv' fill='#82ca9d' isAnimationActive={isAnimationActive} />
    <Bar dataKey='ss' fill='red' isAnimationActive={isAnimationActive} />
  </BarChart>
);

export default HorizontalBarChart;
