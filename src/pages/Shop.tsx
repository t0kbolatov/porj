import React from 'react';
import { CATEGORIES } from '../lib/constants';
import ProductGrid from '../components/shop/ProductGrid';
import CategoryFilter from '../components/shop/CategoryFilter';

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Shop Alien Artifacts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <CategoryFilter categories={CATEGORIES} />
        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}