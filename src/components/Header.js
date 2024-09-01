import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white rounded-xl flex flex-col justify-center items-center p-5">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">Expense Tracker</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/category" className="hover:text-gray-400">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
