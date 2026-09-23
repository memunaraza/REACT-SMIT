import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  let activeStyle ="underline font-bold text-cyan-300"
  return (
    <nav className='flex justify-between px-4 bg-cyan-800 text-amber-50 p-3'>
        <h2 className='text-3xl'>Smit</h2>
        {/* <div>
          <Link className={`${location.pathname =="/" ?"underline":""} m-3`} to="/">Home</Link>
          <Link className={`${location.pathname =="/about" ?"underline":""} m-3`} to="/about">About Us</Link>
          <Link className={`${location.pathname =="/product" ?"underline":""} m-3`} to="/product">Product</Link>
          <Link className={`${location.pathname =="/courses" ?"underline":""} m-3`} to="/courses">Courses</Link>
          <Link className={`${location.pathname =="/contact" ?"underline":""} m-3`} to="/contact">Contact Us</Link>
        </div> */}
        <div>
        <NavLink className={({isActive})=> isActive ?activeStyle :"m-3"}  to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive ? activeStyle:"m-3"} to="/about">About</NavLink>
        <NavLink className={({isActive})=> isActive ? activeStyle:"m-3"} to="/product">Product</NavLink>
        <NavLink className={({isActive})=> isActive ? activeStyle:"m-3"} to="/courses">Courses</NavLink>
        <NavLink className={({isActive})=> isActive ? "underline font-bold text-cyan-300":"m-3"} to="/contact">Contact Us</NavLink>

        </div>
        
      </nav>
  )
}

export default Navbar