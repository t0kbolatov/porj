import React from 'react';
import ProductCard from '../ui/ProductCard';
import { FEATURED_PRODUCTS } from '../../lib/constants';

// Define the Product type (match it with the expected props in ProductCard)
type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  // Add any other fields required by ProductCard
};

export default function FeaturedProducts() {
  // Group products by category
  const groupedByCategory: Record<string, Product[]> = FEATURED_PRODUCTS.reduce(
    (acc: Record<string, Product[]>, product: Product) => {
      const category = product.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(product);
      return acc;
    },
    {}
  );

  // Select one random product from each category
  const selectedProducts = Object.values(groupedByCategory).map((products) => {
    return products[Math.floor(Math.random() * products.length)];
  });

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Artifacts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {selectedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
