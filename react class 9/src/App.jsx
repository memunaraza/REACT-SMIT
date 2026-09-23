import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import NavigateBtns from './components/NavigateBtns'
const App = () => {
  return (
    <div>
      <Navbar/>
      <NavigateBtns />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} > {/* Nested routing */}
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/courses/:courseId" element={<CoursesDetails/>}/>{/* Dynamic Routing*/}
      </Routes>
      <Footer />
    </div>
  )
}

export default App