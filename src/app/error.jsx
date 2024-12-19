"use client";

import Link from "next/link";

export default function ErrorPage({ error, reset }) {
  return (
    <html>
      <body className="h-screen bg-stormygreen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg text-center border border-red-300">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Oh no! Something went wrong 🙈
          </h1>
          <p className="text-gray-700 mb-6">{error.message}</p>
          <Link href="/">
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
              Back to Home Page
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
