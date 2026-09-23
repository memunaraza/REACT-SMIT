import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-slate-100'}`}>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">App Component (Parent)</h1>
        <p className="text-sm mt-2 opacity-80">Current Theme: {theme.toUpperCase()}</p>
      </div>
      
      {/* Passing theme and setTheme down to Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App