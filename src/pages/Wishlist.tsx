import React, { createContext, useContext, useState } from 'react';
import type { Product } from '../types';
import { useBasket } from '../context/BasketContext'; 

// Контекст для Wishlist
interface WishlistContextProps {
  wishlistItems: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const addToWishlist = (item: Product) => {
    setWishlistItems((prev) => {
      if (prev.some((product) => product.id === item.id)) return prev; 
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToBasket } = useBasket(); // Подключаем корзину

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-400 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-gray-400">${item.price}</p>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    addToBasket(item); // Добавить в корзину
                    removeFromWishlist(item.id); // Удалить из вишлиста
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Add to Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
