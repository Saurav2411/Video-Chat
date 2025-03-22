import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Video Chat</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}>
          <Link to="/" className="block md:inline-block py-2 md:py-0 hover:text-blue-400">Home</Link>
          <Link to="/about" className="block md:inline-block py-2 md:py-0 hover:text-blue-400">About</Link>
          <Link to="/join-meeting" className="block md:inline-block py-2 md:py-0 hover:text-blue-400">Join Meeting</Link>
          <Link to="/create-meeting" className="block md:inline-block py-2 md:py-0 hover:text-blue-400">Create Meeting</Link>
          <Link to="/sign-in" className="block md:inline-block py-2 md:py-0 hover:text-blue-400">Sign In</Link>
          <Link to="/sign-up" className="block md:inline-block py-2 md:py-0 hover:text-blue-400">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
