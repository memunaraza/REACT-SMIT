import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>
      <a href="/" className="mt-4 px-4 py-2 bg-amber-400 text-white rounded">Go Home</a>
    </div>
  )
}

export default NotFound