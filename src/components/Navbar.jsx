import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
      
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-500">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">V</span>
          <span className="text-white">Together</span>
        </Link>

       
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent 
                      md:flex md:items-center p-6 md:p-0 transition-all duration-300 
                      ${isOpen ? "block" : "hidden"}`}
        >
          <div className="md:flex md:space-x-8 text-center md:text-left">
            <Link to="/" className="block py-2 md:py-0 px-4 hover:text-blue-400 transition-all">Home</Link>
            <Link to="/about" className="block py-2 md:py-0 px-4 hover:text-blue-400 transition-all">About</Link>
            <Link to="/join-meeting" className="block py-2 md:py-0 px-4 hover:text-blue-400 transition-all">Join Meeting</Link>
            <Link to="/create-meeting" className="block py-2 md:py-0 px-4 hover:text-blue-400 transition-all">Create Meeting</Link>
          </div>

         
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-4">
            <Link to="/sign-in">
              <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                Sign In
              </button>
            </Link>

            <Link to="/sign-up">
              <button className="w-full md:w-auto px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all mt-2 md:mt-0">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
