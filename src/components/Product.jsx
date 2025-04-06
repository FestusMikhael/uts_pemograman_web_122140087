import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlusLg } from 'react-icons/bs'; 
import PropTypes from 'prop-types';
import { useCart } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img 
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image} 
              alt={title} 
            />
          </div>

          <div className='absolute top-0 right-0
            p-2 flex flex-col items-center justify-center gap-y-2 opacity-0
            group-hover:opacity-100 transition-all duration-300'>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
              <BsEyeFill />
            </Link>

            <button 
              className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
              onClick={handleAddToCart}
            >
              <BsPlusLg />
            </button>
          </div>
        </div>
      </div>

      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>${price}</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Product;