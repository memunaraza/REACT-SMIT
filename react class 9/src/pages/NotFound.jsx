import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-md mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-5xl text-ink">404</h1>
      <p className="text-ink/60 mt-3">The page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-block mt-6 px-6 py-3 rounded-md bg-ink text-white text-sm hover:bg-accent-dark transition-colors">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;