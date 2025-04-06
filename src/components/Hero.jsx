import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-700 py-24 px-4 text-center mb-0">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Your Shop!</h1>
        <p className="text-lg text-white mb-6">
          Temukan produk terbaik dengan harga terbaik hanya di sini!
        </p>
      </div>
    </section>
  );
};

export default Hero;
