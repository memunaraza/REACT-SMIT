import React from 'react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          CYBER GALLERY
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Explore stunning photography powered by React & Tailwind CSS
        </p>
      </div>

      <div className="w-full md:w-auto">
        <input
          type="text"
          placeholder="Search aesthetics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-80 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm text-slate-200 backdrop-blur-md transition-all shadow-inner"
        />
      </div>
    </div>
  );
};

export default Navbar;