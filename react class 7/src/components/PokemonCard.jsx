export default function PokemonCard({ pokemon, onClick, isFavorite, onToggleFavorite }) {
  const getTypeColor = (type) => {
    const colors = {
      fire: 'bg-orange-50 text-orange-600 border-orange-200',
      water: 'bg-sky-50 text-sky-600 border-sky-200',
      grass: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      electric: 'bg-amber-50 text-amber-600 border-amber-200',
      poison: 'bg-purple-50 text-purple-600 border-purple-200',
      bug: 'bg-lime-50 text-lime-600 border-lime-200',
      normal: 'bg-slate-50 text-slate-600 border-slate-200',
      fairy: 'bg-pink-50 text-pink-600 border-pink-200',
      fighting: 'bg-red-50 text-red-600 border-red-200',
      psychic: 'bg-rose-50 text-rose-600 border-rose-200',
      dragon: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      ghost: 'bg-violet-50 text-violet-600 border-violet-200',
    };
    return colors[type] || 'bg-slate-50 text-slate-600 border-slate-200';
  };

  const sprite = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transition-all flex flex-col items-center group relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-28 h-28 bg-red-50/50 rounded-full blur-xl group-hover:bg-red-100/60 transition"></div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(pokemon);
        }}
        className={`absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center transition border z-10 ${
          isFavorite
            ? 'bg-red-50 border-red-200 text-red-500 shadow-sm'
            : 'bg-white/80 backdrop-blur-xs border-slate-200 text-slate-400 hover:text-red-500'
        }`}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>

      <span className="self-end text-xs font-bold text-slate-400 z-10">
        #{String(pokemon.id).padStart(3, '0')}
      </span>
      
      <div 
        onClick={onClick}
        className="w-36 h-36 my-2 bg-gradient-to-b from-slate-50 to-red-50/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer relative z-10"
      >
        <img src={sprite} alt={pokemon.name} className="w-32 h-32 object-contain drop-shadow-lg" />
      </div>

      <h2 
        onClick={onClick}
        className="text-lg font-extrabold capitalize text-slate-800 mt-2 cursor-pointer hover:text-red-600 transition z-10"
      >
        {pokemon.name}
      </h2>

      <div className="flex gap-2 mt-3 z-10">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className={`text-xs px-3 py-1 rounded-full border capitalize font-bold ${getTypeColor(t.type.name)}`}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}