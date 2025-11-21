import React from "react";

export default function WaveformLoader() {
  const bars = Array.from({ length: 7 });

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div
        role='status'
        aria-live='polite'
        aria-label='Loading'
        className='flex items-center justify-center gap-1 h-12'
      >
        {bars.map((_, i) => (
          <span
            key={i}
            className='w-1 rounded-sm h-4'
            style={{
              animation: `scale 1.4s ease-in-out ${
                i * 0.2
              }s infinite, color 1.4s ease-in-out ${i * 0.2}s infinite`,
              backgroundColor: "#93c5fd", // Default blue-300
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes scale {
          0% {
            height: 16px;
          }
          14.28% {
            height: 38px;
          }
          28.56% {
            height: 16px;
          }
          100% {
            height: 16px;
          }
        }
        @keyframes color {
          0% {
            background-color: #93c5fd;
          }
          14.28% {
            background-color: #3b82f6;
          }
          28.56% {
            background-color: #93c5fd;
          }
          100% {
            background-color: #93c5fd;
          }
        }
      `}</style>
    </div>
  );
}
