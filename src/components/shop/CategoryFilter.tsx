import React from 'react';
import type { Category } from '../../types';

interface CategoryFilterProps {
  categories: Category[];
  onCategorySelect: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className="bg-gray-900 text-white w-1/4 min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="flex items-center w-full bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <category.icon className="w-5 h-5 mr-2" />
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
