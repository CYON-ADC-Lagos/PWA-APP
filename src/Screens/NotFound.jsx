"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-[#f9f9f9] text-center py-24">
      <h1 className="text-[2rem] text-primary">Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link href="/" className="text-green underline mt-4 inline-block">
        Go Back
      </Link>
    </div>
  );
}
