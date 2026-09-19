export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 mt-12">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">About PokeDex Pro</h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          PokeDex Pro is an advanced, high-performance web application built with React, Tailwind CSS, and the official PokeAPI. It features pagination, real-time search, type filtering, sorting, audio cries, and local favorites persistence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-1">⚡ Tech Stack</h4>
            <p className="text-sm text-slate-500">React.js, Tailwind CSS, Vite, and PokeAPI v2.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-800 mb-1">🎯 Pro Features</h4>
            <p className="text-sm text-slate-500">Skeleton Loaders, Audio Cries, Sorting, and Type filters.</p>
          </div>
        </div>
      </div>
    </div>
  );
}