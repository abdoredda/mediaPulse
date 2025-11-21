import React from "react";

interface GoogleIconProps {
  width?: number;
  height?: number;
  title?: string;
  className?: string;
}

const GoogleIcon: React.FC<GoogleIconProps> = ({
  width = 20,
  height = 20,
  title = "Google Logo",
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    aria-label={title}
    role='img'
  >
    {title ? <title>{title}</title> : null}
    <g clipPath='url(#clip0)'>
      <path
        d='M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.41a4.63 4.63 0 01-2.01 3.04v2.52h3.24c1.9-1.75 2.96-4.33 2.96-7.35z'
        fill='#4285F4'
      />
      <path
        d='M10 20c2.7 0 4.97-.89 6.63-2.41l-3.24-2.52c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.13H1.07v2.59A10 10 0 0010 20z'
        fill='#34A853'
      />
      <path
        d='M4.41 12.9A5.99 5.99 0 013.64 10c0-.99.18-1.95.5-2.9V4.51H1.07A10 10 0 000 10c0 1.64.4 3.19 1.07 4.49l3.34-2.59z'
        fill='#FBBC05'
      />
      <path
        d='M10 3.96c1.47 0 2.79.51 3.83 1.51l2.87-2.87C14.97 1.09 12.7 0 10 0A10 10 0 001.07 4.51l3.34 2.59C5.2 5.72 7.4 3.96 10 3.96z'
        fill='#EA4335'
      />
    </g>
    <defs>
      <clipPath id='clip0'>
        <rect width='20' height='20' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default GoogleIcon;
