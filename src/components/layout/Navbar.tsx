import React, { useState } from 'react';
import { ShoppingCart, Heart, User, Rocket, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    } else {
      alert('Please enter a search term');
    }
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-xl font-bold">Alien Emporium</span>
          </div>

          <div className="flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search alien artifacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-green-400"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <button
              className="hover:text-green-400 transition-colors"
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="h-6 w-6" />
            </button>
            <button
              className="hover:text-green-400 transition-colors"
              onClick={() => navigate('/basket')}
            >
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              className="hover:text-green-400 transition-colors"
              onClick={() => navigate('/profile')}
            >
              <User className="h-6 w-6" />
            </button>
            <button
              className="hover:text-green-400 transition-colors flex items-center space-x-1"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-6 w-6" />
              <span>Home</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
