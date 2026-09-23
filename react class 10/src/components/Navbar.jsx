import React from 'react';
import Nabbar2 from './Navbar2'; 

const Navbar = ({ theme, user, setTheme }) => {
  return (
    <nav className="navbar">
      <h2>Trainer: {user.name}</h2>
      {/* Drilling props further down */}
      <Nabbar2 theme={theme} user={user} setTheme={setheme} />
    </nav>
  );
};

export default Navbar;