// components/Dropdown.js
"use client"
"use strict"; // Use strict mode
import React, { useState } from 'react'; // Import React
// Corrected component name from 'PannelDropdown' to 'PanelDropdown'
const PanelDropdown = (title: string) => {
  const [isOpen, setIsOpen] = useState(false); // useState hook

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Function to toggle dropdown state
  };

  return (
    <div>
      <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">{title}</label>
      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={toggleDropdown} // Toggle dropdown on button click
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">Tom Cook</span>
            
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            
          </span>
        </button>

        <ul
          className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${isOpen ? '' : 'hidden'}`} // Conditionally apply 'hidden' class based on dropdown state
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
            <div className="flex items-center">
              <span className="font-normal ml-3 block truncate">Wade Cooper</span>
            </div>
            
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelDropdown;

