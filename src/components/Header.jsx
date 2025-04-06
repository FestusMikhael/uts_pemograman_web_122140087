import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { IoMdCart } from 'react-icons/io';

const Header = () => {
  const { openCart, cart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-lg font-bold text-gray-700 hover:text-gray-800 transition-colors"
          >
            FestusStore
          </Link>

          <nav className="flex gap-6">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-50"
            >
              Home
            </Link>
            <Link 
              to="/product" 
              className="font-medium text-gray-700 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-50"
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-700 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-50"
            >
              About
            </Link>
          </nav>

          <div className="relative">
            <button 
              onClick={openCart}
              className="text-2xl hover:text-gray-800 transition-colors p-1"
              aria-label="Open cart"
            >
              <IoMdCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;