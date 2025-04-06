import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find(item => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div className="text-center mt-20">Memuat data produk...</div>;
  }

  const { title, price, description, image, category } = product;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <section className="py-16 pt-24"> 
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img src={image} alt={title} className="w-full max-w-sm mx-auto" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 text-sm mb-2 capitalize">Kategori: {category}</p>
            <p className="text-xl font-semibold text-red-500 mb-4">${price}</p>
            <p className="text-gray-700 mb-6">{description}</p>
            <button 
              onClick={handleAddToCart}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;