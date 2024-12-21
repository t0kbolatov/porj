import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../lib/constants';

export default function ProductDetails() {
  const { id } = useParams();
  const product = FEATURED_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-white">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1">{product.rating}</span>
          </div>
          <p className="text-2xl font-bold text-green-400 mb-6">
            ${product.price}
          </p>
          <div className="space-y-4">
            <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="w-full border border-green-500 text-green-500 py-3 rounded-md hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center">
              <Heart className="h-5 w-5 mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}