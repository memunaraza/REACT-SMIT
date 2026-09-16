import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-4 bg-amber-200 shadow-md text-gray-800 font-medium">
        <h2 className="text-xl font-bold tracking-wide">Logo</h2>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-amber-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

