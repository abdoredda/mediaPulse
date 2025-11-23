"use client";

import ChannelAnalytics from "@/components/youtube/ChannelAnalytics";
import ChannelPerformance from "@/components/youtube/ChannelPerformance";
import VideoTable from "@/components/youtube/VideoTable";

function YoutubePage() {
  return (
    <div className='space-y-6'>
      <ChannelAnalytics />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <ChannelPerformance title='Engagements' />
        <ChannelPerformance title='Views' />
      </div>
      <VideoTable />
    </div>
  );
}

export default YoutubePage;
