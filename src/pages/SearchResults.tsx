import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { FEATURED_PRODUCTS } from '../lib/constants';

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query')?.toLowerCase() || '';

  const filteredProducts = FEATURED_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Search Results for "{query}"</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-white">No products found.</p>
      )}
    </div>
  );
}
