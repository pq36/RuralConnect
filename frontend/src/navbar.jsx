import { useState } from 'react'
import './index.css'
function Navbar(){
    return (
        <div className="flex flex-wrap justify-evenly items-center py-4 px-6 bg-green-600 shadow-lg rounded-lg border border-green-700 md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <a href="/service" className="text-white px-4 py-2 rounded-md hover:bg-green-700 hover:text-gray-100 transition-all duration-300">
            Services
          </a>
          <a href="/villageRedirect" className="text-white px-4 py-2 rounded-md hover:bg-green-700 hover:text-gray-100 transition-all duration-300">
            Recommendation
          </a>
          <a href="/infrastructure" className="text-white px-4 py-2 rounded-md hover:bg-green-700 hover:text-gray-100 transition-all duration-300">
            Resources
          </a>
          <a href="/incident" className="text-white px-4 py-2 rounded-md hover:bg-green-700 hover:text-gray-100 transition-all duration-300">
            Incidents
          </a>
          <a href="#" className="text-white px-4 py-2 rounded-md hover:bg-green-700 hover:text-gray-100 transition-all duration-300">
            Reports
          </a>
          <a href="/login" className="text-white px-4 py-2 rounded-md hover:bg-green-700 hover:text-gray-100 transition-all duration-300">
            Login
          </a>
          <a href="/register" className="text-white px-4 py-2 rounded-md bg-black-500 hover:bg-black shadow-md transition-all duration-300">
            Register
          </a>
        </div>
      );
      
}
export default Navbar;