import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8 flex items-center">
        <ShoppingCart className="h-8 w-8 mr-3" />
        Shopping Cart
      </h1>
      
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="text-center text-gray-400 py-8">
          <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">Your cart is empty</p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}