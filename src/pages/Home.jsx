import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mt-0 pt-0 relative h-screen bg-gray-700 text-white flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x800)' }}></div> {/* Ganti dengan gambar latar belakang */}
      <div className="z-10 text-center px-4 md:px-0">
        <h1 className="text-5xl font-bold mb-4">Welcome to Your Shop!</h1>
        <p className="text-xl mb-6">Temukan produk terbaik dengan harga terbaik hanya di sini!</p>
        
        <Link to="/product" className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-full hover:bg-gray-800 transition mt-6 md:mt-0">
          Lihat Produk
        </Link>
      </div>
    </div>
  );
};

export default Home;