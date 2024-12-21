import React from 'react';
import { useBasket } from '../context/BasketContext';
import { useAuth } from '../context/AuthContext';

export default function Basket() {
  const { basketItems, addToBasket, decreaseQuantity, clearBasket, getTotalAmount } = useBasket();
  const { user, updateUserBalance } = useAuth(); 
  const totalAmount = getTotalAmount();

  const handleBuy = () => {
    if (!user) return;

    if (user.balance >= totalAmount) {
      updateUserBalance(user.balance - totalAmount);
      clearBasket();
      alert('Purchase successful!');
    } else {
      alert('Insufficient funds!');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Your Basket</h1>
      {basketItems.length === 0 ? (
        <p className="text-gray-400 text-center">Your basket is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basketItems.map((item) => (
              <div key={item.id} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-gray-400">
                  ${item.price} x {item.quantity}
                </p>
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  >
                    -
                  </button>
                  <button
                    onClick={() => addToBasket(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl text-white mb-4">Total: ${totalAmount.toFixed(2)}</h2>
            {user ? (
              <button
                onClick={handleBuy}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Buy
              </button>
            ) : (
              <p className="text-gray-400">Please log in to make a purchase.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
