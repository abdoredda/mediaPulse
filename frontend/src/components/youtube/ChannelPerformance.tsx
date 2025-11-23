"use client";

import { useState } from "react";
import Box from "@/components/layout/Box";
import BarChart from "@/components/charts/BarChart";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box as MuiBox } from "@mui/material";

function ChannelPerformance({ title }: { title: string }) {
  const [selectedRange, setSelectedRange] = useState("Week");
  const ranges = ["3 Days", "Week", "Month"];

  return (
    <Box title={title}>
      <BarChart />
      <MuiBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 2,
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup aria-label='Time range selection'>
          {ranges.map((range) => (
            <Button
              key={range}
              onClick={() => setSelectedRange(range)}
              variant={selectedRange === range ? "contained" : "outlined"}
            >
              {range}
            </Button>
          ))}
        </ButtonGroup>
      </MuiBox>
    </Box>
  );
}

export default ChannelPerformance;
