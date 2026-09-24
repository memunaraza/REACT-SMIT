import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 md:px-0 md:py-0 text-sm ${isActive ? "text-ink border-b border-accent" : "text-ink/60 hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-50 bg-[#fbfaf7] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl">Aurel &amp; Co.</Link>
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/men" className={linkClass}>Men</NavLink>
          <NavLink to="/women" className={linkClass}>Women</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)}>
          <span className="w-5 h-0.5 bg-ink" />
          <span className="w-5 h-0.5 bg-ink" />
          <span className="w-5 h-0.5 bg-ink" />
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-black/10">
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/men" className={linkClass} onClick={() => setOpen(false)}>Men</NavLink>
          <NavLink to="/women" className={linkClass} onClick={() => setOpen(false)}>Women</NavLink>
          <NavLink to="/courses" className={linkClass} onClick={() => setOpen(false)}>Courses</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;