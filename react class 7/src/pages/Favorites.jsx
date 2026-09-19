import PokemonCard from '../components/PokemonCard';

export default function Favorites({ favorites, onSelectPokemon, onToggleFavorite, setActiveTab }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Your Favorite Pokémon</h2>
        <p className="text-slate-500 text-sm">All your saved favorite Pokémon team members in one place.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto mt-12 shadow-xs">
          <div className="text-5xl mb-4">💔</div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">No Favorites Yet</h3>
          <p className="text-slate-500 text-sm mb-6">You haven't added any Pokémon to your favorites list yet.</p>
          <button
            onClick={() => setActiveTab('home')}
            className="px-6 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition shadow-sm text-sm"
          >
            Explore Pokémon
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((poke) => (
            <PokemonCard
              key={poke.id}
              pokemon={poke}
              onClick={() => onSelectPokemon(poke)}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}