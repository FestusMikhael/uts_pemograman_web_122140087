import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/ProductPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div className="overflow-hidden flex flex-col min-h-screen">
        <Router>
          <Header />
          <div className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/product" element={<ProductsPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
};

export default App;