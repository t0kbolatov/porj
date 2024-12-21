import React, { useState } from 'react';
import ProductGrid from '../components/shop/ProductGrid';
import CategoryFilter from '../components/shop/CategoryFilter';
import { FEATURED_PRODUCTS, CATEGORIES } from '../lib/constants';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? [...FEATURED_PRODUCTS].filter((product) => product.category === selectedCategory)
    : [...FEATURED_PRODUCTS];

  return (
    <div className="flex">
      {/* Категории в левой части */}
      <CategoryFilter
        categories={CATEGORIES}
        onCategorySelect={handleCategorySelect}
      />

      {/* Сетка продуктов в правой части */}
      <div className="w-3/4 p-4">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
