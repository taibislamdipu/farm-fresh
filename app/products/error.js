"use client";

import Link from "next/link";

export default function ProductsError({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold text-red-600">
        Something went wrong!
      </h1>
      <p className="mb-4">{error?.message}</p>
      <button
        className="rounded bg-primary-600 px-4 py-2 text-white"
        onClick={() => reset()} // retry the page
      >
        Retry
      </button>
      <Link href="/" className="mt-4 text-primary-600 underline">
        Go Home
      </Link>
    </div>
  );
}
