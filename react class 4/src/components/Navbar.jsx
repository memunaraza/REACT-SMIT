function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 font-bold text-black shadow-lg shadow-cyan-500/20">
            P
          </div>

          <div>
            <h2 className="text-lg font-bold">
              Postly
            </h2>

            <p className="text-xs text-slate-500">
              Share your world
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400 sm:flex">

          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

          <span>
            Community is active
          </span>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;