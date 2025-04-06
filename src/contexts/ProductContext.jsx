import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  products: [],
  loading: true,
  error: null,
};

function productReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
}

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: 'Gagal mengambil data produk.' });
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;