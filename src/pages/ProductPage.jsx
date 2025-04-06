import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const ProductsPage = () => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) {
    return <div className="text-center mt-20 text-lg font-semibold">Loading data produk...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500 font-semibold">{error}</div>;
  }

  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Produk Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;