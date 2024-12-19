"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <html>
      <body>
        <h1>Oh no! Something went wrong on that page! 🙈</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
