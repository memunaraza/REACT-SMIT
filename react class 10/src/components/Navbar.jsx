import React from 'react'
import Navbar2 from './Navbar2' 

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className={`w-full max-w-md p-6 rounded-2xl shadow-lg border transition-all duration-300 ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'}`}>
      <h2 className="text-xl font-semibold mb-4 text-center">Navbar Component (Middle)</h2>
      
      {/* Drilling props further down */}
      <Navbar2 theme={theme} setTheme={setTheme} />
    </nav>
  )
}

export default Navbar