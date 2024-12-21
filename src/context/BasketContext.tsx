import React, { createContext, useContext, useState } from 'react';
import type { Product, CartItem } from '../types';


interface BasketContextProps {
  basketItems: CartItem[];
  addToBasket: (item: Product) => void;
  removeFromBasket: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearBasket: () => void;
  getTotalAmount: () => number;
}


const BasketContext = createContext<BasketContextProps | undefined>(undefined);


export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [basketItems, setBasketItems] = useState<CartItem[]>([]);

  const addToBasket = (item: Product) => {
    setBasketItems((prev) => {
      const existingItem = prev.find((basketItem) => basketItem.id === item.id);
      if (existingItem) {
        return prev.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromBasket = (id: string) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id: string) => {
    setBasketItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const getTotalAmount = () => {
    return basketItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <BasketContext.Provider
      value={{ basketItems, addToBasket, removeFromBasket, decreaseQuantity, clearBasket, getTotalAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
}


export function useBasket() {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
}
