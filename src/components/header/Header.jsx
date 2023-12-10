import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-700">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-3xl font-bold text-gray-100">Simple E-Commerce</h1>
          <button 
            type="button"
            className="relative p-2 text-gray-100 bg-blue-800 rounded-full">
              Cart
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header