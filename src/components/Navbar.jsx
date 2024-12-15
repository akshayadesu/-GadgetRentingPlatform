import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, onSignOut }) => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">QuickRent</h1>
      <div className="space-x-4">
        <a href="#features" className="hover:text-blue-400">Features</a>
        <a href="#gadgets" className="hover:text-blue-400">Gadgets</a>
        <a href="#contact" className="hover:text-blue-400">Contact Us</a>

        {!isAuthenticated ? (
          <>
            <Link to="/signin" className="text-white mx-4 hover:text-blue-300">Sign In</Link>
            <Link to="/signup" className="text-white mx-4 hover:text-blue-300">Sign Up</Link>
          </>
        ) : (
          <button
            onClick={onSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
