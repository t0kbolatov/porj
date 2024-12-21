import React, { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types';
import { useWishlist } from '../../pages/Wishlist';
import { useBasket } from '../../context/BasketContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToBasket } = useBasket();

  const [isAnimating, setIsAnimating] = useState(false);

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleAddToBasket = () => {
    setIsAnimating(true);
    addToBasket(product);
    setTimeout(() => setIsAnimating(false), 500); // Анимация длится 500 мс
  };

  return (
    <div className="bg-gray-800 rounded-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-40"> {/* Уменьшен размер изображения */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-white mb-1">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-green-400 text-sm font-bold">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-xs text-gray-300">{product.rating}</span>
          </div>
        </div>
        <div className="flex justify-between mt-3 space-x-2">
          <button
            onClick={() => {
              if (isInWishlist) {
                removeFromWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            }}
            className={`px-2 py-1 rounded-md text-xs transition-colors flex items-center space-x-1 ${
              isInWishlist
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <Heart
              className={`h-4 w-4 ${
                isInWishlist ? 'fill-current text-red-500' : 'text-white'
              }`}
            />
            <span>{isInWishlist ? 'Remove' : 'Wishlist'}</span>
          </button>
          <button
            onClick={handleAddToBasket}
            className={`px-2 py-1 rounded-md text-xs bg-green-500 text-white hover:bg-green-600 transition-colors flex items-center space-x-1 ${
              isAnimating ? 'animate-bounce' : ''
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Basket</span>
          </button>
        </div>
      </div>
    </div>
  );
}
