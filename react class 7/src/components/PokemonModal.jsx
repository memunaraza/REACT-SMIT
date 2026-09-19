export default function PokemonModal({ pokemon, onClose, isFavorite, onToggleFavorite }) {
  if (!pokemon) return null;

  const sprite = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  const playCry = () => {
    if (pokemon.cries && pokemon.cries.latest) {
      const audio = new Audio(pokemon.cries.latest);
      audio.play().catch((e) => console.log('Audio playback prevented', e));
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex justify-center items-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center pr-8">
            <button
              onClick={() => onToggleFavorite(pokemon)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition ${
                isFavorite
                  ? 'bg-red-50 border-red-200 text-red-600'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              <span>{isFavorite ? '❤️' : '🤍'}</span>
              {isFavorite ? 'Favorited' : 'Add to Favorites'}
            </button>
            <span className="text-sm font-bold text-slate-400">
              #{String(pokemon.id).padStart(3, '0')}
            </span>
          </div>
          
          <div className="w-40 h-40 bg-gradient-to-b from-slate-50 to-red-50/30 rounded-3xl flex items-center justify-center my-4 border border-slate-100 shadow-inner relative group">
            <img src={sprite} alt={pokemon.name} className="w-36 h-36 object-contain drop-shadow-lg" />
          </div>

          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-extrabold capitalize text-slate-900">
              {pokemon.name}
            </h3>
            {pokemon.cries?.latest && (
              <button
                onClick={playCry}
                title="Play Cry"
                className="w-9 h-9 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center hover:bg-red-100 transition shadow-xs"
              >
                🔊
              </button>
            )}
          </div>

          <div className="w-full grid grid-cols-2 gap-3 mt-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm">
            <div>
              <span className="text-slate-400 block text-xs font-medium">Height</span>
              <span className="font-bold text-slate-700">{pokemon.height / 10} m</span>
            </div>
            <div>
              <span className="text-slate-400 block text-xs font-medium">Weight</span>
              <span className="font-bold text-slate-700">{pokemon.weight / 10} kg</span>
            </div>
            <div>
              <span className="text-slate-400 block text-xs font-medium">Base Experience</span>
              <span className="font-bold text-slate-700">{pokemon.base_experience} XP</span>
            </div>
            <div>
              <span className="text-slate-400 block text-xs font-medium">Primary Ability</span>
              <span className="font-bold text-slate-700 capitalize">{pokemon.abilities[0]?.ability.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}