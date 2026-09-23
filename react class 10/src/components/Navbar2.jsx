import React from 'react';

const Nabbar2 = ({ theme, user, setTheme }) => {
  return (
    <div className="sub-navbar">
      <span>Badges: {user.badgeCount}</span>
      <button onClick={() => setTheme(theme === 'pokemon-electric' ? 'dark-obsidian' : 'pokemon-electric')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Nabbar2;