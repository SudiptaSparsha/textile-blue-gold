"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center bg-card p-10 rounded-lg shadow-sm border border-border">
        <h1 className="mb-4 text-6xl font-bold text-accent">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link href="/" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
