import React from 'react'

const Navbar2 = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`p-4 rounded-xl text-center transition-all duration-300 ${theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'}`}>
      <p className="text-sm mb-4">NavChild Component (Deepest Child)</p>
      
      <button 
        onClick={toggleTheme}
        className="px-5 py-2.5 rounded-xl font-medium shadow-md transition-all duration-200 bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 cursor-pointer"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default Navbar2