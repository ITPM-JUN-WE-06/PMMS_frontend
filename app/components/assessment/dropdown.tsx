// components/Dropdown.js
"use client"
import { useState } from 'react'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        className="block p-2 text-gray-800"
        onClick={toggleDropdown}
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 bg-white rounded shadow-md">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
        </div>
      )}
    </div>
  )
}

export default Dropdown
