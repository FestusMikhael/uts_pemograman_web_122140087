import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on initial render
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    setTotal(cart.reduce((sum, item) => sum + (item.price * item.amount), 0));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      const newCart = existing 
        ? prev.map(item => 
            item.id === product.id 
              ? { ...item, amount: item.amount + 1 } 
              : item
          )
        : [...prev, { 
            ...product, 
            amount: 1,
            image: product.image
          }];
      return newCart;
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const increaseAmount = (id) => {
    setCart(prev => 
      prev.map(item => 
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseAmount = (id) => {
    setCart(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, amount: item.amount > 1 ? item.amount - 1 : 1 }
          : item
      )
    );
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);