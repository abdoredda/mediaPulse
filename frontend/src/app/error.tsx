"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className='text-red-600 p-4'>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
    </div>
  );
}
