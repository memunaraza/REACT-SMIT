import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div >
            <h1>Products</h1>
            <div className='flex justify-center gap-7 bg-cyan-950'>
                <Link to="men">Men</Link>
                <Link to="women">Women</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Product