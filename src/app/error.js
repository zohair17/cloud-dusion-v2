"use client";

export default function GlobalError({ error, reset }) {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>{error?.digest ?? "Unexpected error"}</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
