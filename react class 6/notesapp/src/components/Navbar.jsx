import React from 'react';

export default function Navbar({ search, setSearch }) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">Notes Workspace</h1>
        <p className="text-sm text-neutral-400 mt-1">Organize your thoughts with an obsidian glass finish.</p>
      </div>
      <div className="relative">
        <input 
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 bg-neutral-900/80 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-500/50 transition-all"
        />
      </div>
    </header>
  );
}