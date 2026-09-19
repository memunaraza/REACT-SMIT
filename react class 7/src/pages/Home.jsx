import PokemonCard from '../components/PokemonCard';
import SkeletonCard from '../components/SkeletonCard';
import Pagination from '../components/Pagination';

export default function Home({
  pokemonList,
  loading,
  error,
  offset,
  limit,
  totalCount,
  onPageChange,
  onSelectPokemon,
  favorites,
  onToggleFavorite,
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  sortBy,
  setSortBy,
}) {
  const types = ['all', 'fire', 'water', 'grass', 'electric', 'poison', 'bug', 'normal', 'fairy', 'psychic'];

  // Filter and Sort Pokemons
  const filteredPokemons = pokemonList
    .filter((poke) => {
      const matchesSearch = poke.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || poke.types.some((t) => t.type.name === selectedType);
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'id-desc') return b.id - a.id;
      return a.id - b.id; // default id-asc
    });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-500 via-rose-600 to-orange-500 rounded-3xl p-6 sm:p-10 text-white mb-8 shadow-xl shadow-red-500/10 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute right-[-20px] bottom-[-30px] text-9xl opacity-10 select-none pointer-events-none">
          🔴
        </div>
        <div>
          <span className="bg-white/25 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            Catch 'Em All
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Pokémon Explorer</h2>
          <p className="text-red-100 text-sm sm:text-base mt-2 max-w-lg">
            Search through generations of Pokémon, filter by types, sort stats, and listen to official cries.
          </p>
        </div>
        <div className="w-full md:w-72 z-10">
          <input
            type="text"
            placeholder="Search Pokémon name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white/15 border border-white/30 placeholder-red-200 text-white focus:outline-none focus:bg-white/25 backdrop-blur-md transition shadow-inner text-sm font-medium"
          />
        </div>
      </div>

      {/* Controls Bar: Type Filters & Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold capitalize whitespace-nowrap transition border ${
                selectedType === type
                  ? 'bg-red-500 text-white border-red-600 shadow-md shadow-red-500/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-2xl shadow-xs focus:outline-none cursor-pointer"
        >
          <option value="id-asc">Sort by: Lowest ID</option>
          <option value="id-desc">Sort by: Highest ID</option>
          <option value="name-asc">Sort by: Name (A-Z)</option>
          <option value="name-desc">Sort by: Name (Z-A)</option>
        </select>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-center max-w-md mx-auto my-12">
          <p className="font-medium">Error: {error}</p>
        </div>
      )}

      {/* Grid with Skeletons or Cards */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(limit)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : !error && (
        <>
          {filteredPokemons.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-xs">
              <p className="text-slate-500 font-medium">No Pokémon found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPokemons.map((poke) => (
                <PokemonCard
                  key={poke.id}
                  pokemon={poke}
                  onClick={() => onSelectPokemon(poke)}
                  isFavorite={favorites.some((fav) => fav.id === poke.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}

          <Pagination
            offset={offset}
            limit={limit}
            totalCount={totalCount}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}