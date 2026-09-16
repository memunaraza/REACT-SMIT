import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/Contact.jsx'



function App() {
  
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App