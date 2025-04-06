import React from 'react';
import { useCart } from '../contexts/CartContext';
import { BsTrash, BsPlus, BsDash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cart, 
    total, 
    removeItem, 
    increaseAmount, 
    decreaseAmount 
  } = useCart();

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">
          Your Cart ({cart.length})
        </h2>
        <button 
          onClick={closeCart}
          className="text-2xl hover:text-red-500 transition"
        >
          ×
        </button>
      </div>

      <div className="h-[calc(100%-180px)] overflow-y-auto p-4">
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link
              to="/product"
              onClick={closeCart}
              className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex gap-4 py-4 border-b">
              <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.title}</h3>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <BsTrash />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center border">
                    <button
                      onClick={() => decreaseAmount(item.id)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      <BsDash />
                    </button>
                    <span className="px-2">{item.amount}</span>
                    <button
                      onClick={() => increaseAmount(item.id)}
                      className="px-2 py-1 hover:bg-gray-100"
                    >
                      <BsPlus />
                    </button>
                  </div>
                  <p className="font-medium">
                    ${(item.price * item.amount).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={closeCart}
            className="block w-full bg-gray-600 text-white text-center py-3 rounded hover:bg-gray-800"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;