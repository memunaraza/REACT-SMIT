import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-ink text-[#efece5] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg text-white">Aurel &amp; Co.</h3>
          <p className="mt-2 text-sm text-[#b8b2a6] max-w-xs">
            Everyday essentials, cut with care. Shipping across Pakistan.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-[#8f897c] text-xs mb-1">Explore</span>
          <Link to="/men" className="text-[#d8d3c7] hover:text-accent">Men's Collection</Link>
          <Link to="/women" className="text-[#d8d3c7] hover:text-accent">Women's Collection</Link>
          <Link to="/courses" className="text-[#d8d3c7] hover:text-accent">Courses</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-[#8f897c] text-xs mb-1">Company</span>
          <Link to="/about" className="text-[#d8d3c7] hover:text-accent">About</Link>
          <Link to="/contact" className="text-[#d8d3c7] hover:text-accent">Contact</Link>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-[#8f897c] py-4">
        &copy; {new Date().getFullYear()} Aurel &amp; Co. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;