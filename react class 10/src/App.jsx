import React, { useState } from 'react';
import Navbar from './components/Navbar';


const App = () => {
  // Pokémon theme state (e.g., 'pikachu-yellow' or 'dark-obsidian')
  const [theme, setTheme] = useState('pokemon-electric');
  const [user, setUser] = useState({ name: 'Ash Ketchum', badgeCount: 8 });

  return (
    <div className={`app-container ${theme}`}>
      <h1>Pokémon Trainer Dashboard</h1>
      {/* Passing props down to Navbar */}
      <Navbar theme={theme} user={user} setTheme={setheme} />
    </div>
  );
};

export default App;