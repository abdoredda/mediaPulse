"use client";

import Box from "@/components/layout/Box";
import CountUp from "react-countup";
import { People, Visibility, VideoLibrary } from "@mui/icons-material";

const analyticsData = [
  {
    title: "Subscribers",
    value: 24500,
    icon: People,
    color: "bg-blue-500",
  },
  {
    title: "Total Views",
    value: 1450000,
    icon: Visibility,
    color: "bg-purple-500",
  },
  {
    title: "Total Videos",
    value: 342,
    icon: VideoLibrary,
    color: "bg-green-500",
  },
];

function ChannelAnalytics() {
  return (
    <Box className='flex-1' title='Channel Analytics'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className='p-6 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all duration-200'
          >
            {/* Icon */}
            <div
              className={`${item.color} text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
            >
              <item.icon fontSize='medium' />
            </div>

            {/* Title */}
            <h4 className='text-gray-600 text-sm font-semibold mb-1'>
              {item.title}
            </h4>

            {/* Number */}
            <div className='text-4xl font-bold text-gray-800'>
              <CountUp end={item.value} separator=',' duration={2.2} />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default ChannelAnalytics;
