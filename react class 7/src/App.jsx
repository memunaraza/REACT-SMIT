import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PokemonModal from './components/PokemonModal';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'favorites', 'about'
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [offset, setOffset] = useState(0);
  const limit = 12;
  const [totalCount, setTotalCount] = useState(0);

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('id-asc');
  
  // Favorites stored in LocalStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('poke_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('poke_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (pokemon) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === pokemon.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== pokemon.id);
      } else {
        return [...prev, pokemon];
      }
    });
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error('Failed to fetch Pokémon list');
        
        const data = await response.json();
        setTotalCount(data.count);

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemonList(detailedPokemons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [offset]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          favoritesCount={favorites.length}
        />

        <main>
          {activeTab === 'home' && (
            <Home
              pokemonList={pokemonList}
              loading={loading}
              error={error}
              offset={offset}
              limit={limit}
              totalCount={totalCount}
              onPageChange={(newOffset) => setOffset(newOffset)}
              onSelectPokemon={(poke) => setSelectedPokemon(poke)}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          )}

          {activeTab === 'favorites' && (
            <Favorites
              favorites={favorites}
              onSelectPokemon={(poke) => setSelectedPokemon(poke)}
              onToggleFavorite={toggleFavorite}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'about' && <About />}
        </main>
      </div>

      <Footer />

      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
        isFavorite={selectedPokemon ? favorites.some((fav) => fav.id === selectedPokemon.id) : false}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}