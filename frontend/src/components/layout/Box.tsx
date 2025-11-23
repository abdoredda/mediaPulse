import React from "react";

type BoxProps = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

function Box({ children, title, className = "" }: BoxProps) {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-sm border flex-1 border-gray-200 ${className}`}
    >
      {title && (
        <h3 className='text-lg font-semibold text-gray-800 mb-4'>{title}</h3>
      )}
      {children}
    </div>
  );
}

export default Box;
