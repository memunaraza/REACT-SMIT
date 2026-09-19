export default function Navbar({ activeTab, setActiveTab, favoritesCount }) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-red-100 sticky top-0 z-40 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-500 to-rose-600 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition">
            <span className="text-xl">🔴⚪</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
              Poke<span className="text-red-500">Dex</span>
            </h1>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pro v2</span>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              activeTab === 'home'
                ? 'bg-red-50 text-red-600 border border-red-200 shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Explorer
          </button>
          
          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition relative ${
              activeTab === 'favorites'
                ? 'bg-red-50 text-red-600 border border-red-200 shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Favorites
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {favoritesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              activeTab === 'about'
                ? 'bg-red-50 text-red-600 border border-red-200 shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            About
          </button>
        </nav>
      </div>
    </header>
  );
}