export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔴⚪</span>
          <span className="font-extrabold text-slate-800">PokeDex Pro</span>
        </div>
        <p className="text-sm text-slate-500">
          Powered by <span className="font-semibold text-slate-700">PokeAPI v2</span> & React. Built with Tailwind CSS.
        </p>
        <div className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
          Catch 'Em All ✨
        </div>
      </div>
    </footer>
  );
}