"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center h-screen justify-center min-h-[60vh] text-center bg-white text-gray-700 p-8'>
      <h1 className='text-5xl font-bold mb-4'>404</h1>
      <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
      <p className='mb-6 text-gray-500'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href='/'
        className='inline-block px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors'
      >
        Go Home
      </Link>
    </div>
  );
}
