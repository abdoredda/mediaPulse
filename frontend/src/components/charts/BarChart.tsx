"use client";

import React from "react";
import { Tooltip as MuiTooltip } from "@mui/material";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Page A",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 4000,
  },
  {
    name: "Page B",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 3000,
  },
  {
    name: "Page C",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 2000,
  },
  {
    name: "Page D",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 2780,
  },
  {
    name: "Page E",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 1890,
  },
  {
    name: "Page F",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 2390,
  },
  {
    name: "Page G",
    image:
      "https://i.ytimg.com/vi/9D116VzQjwI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAScYTCPPNqPuoXv-uB5_lmNKhp0w",
    uv: 3490,
  },
];
// #endregion

interface CustomYAxisTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
    index: number;
  };
}

const CustomYAxisTick = ({ x, y, payload }: CustomYAxisTickProps) => {
  const item = data[payload.index];
  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-70} y={-20} width={70} height={40}>
        <MuiTooltip
          title={item?.name || ""}
          placement='right'
          //   arrow
          slotProps={{
            tooltip: {
              sx: {
                fontSize: "12px",
                padding: "12px",
                maxWidth: 400,
              },
            },
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={payload.value}
            alt={item?.name || ""}
            className='w-20 z-40 h-10 rounded object-cover border border-gray-200 cursor-pointer'
          />
        </MuiTooltip>
      </foreignObject>
    </g>
  );
};

const BarChart = ({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsBarChart
          layout='vertical'
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' horizontal={false} />
          <XAxis type='number' />
          <YAxis
            dataKey='image'
            type='category'
            width={60}
            tick={CustomYAxisTick}
          />
          {/* <Legend /> */}
          <Bar
            dataKey='uv'
            fill='#82ca9d'
            // radius={[0, 4, 4, 0]}
            barSize={28}
            isAnimationActive={isAnimationActive}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
