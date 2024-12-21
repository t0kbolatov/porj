import React from 'react';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-black text-white">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: '0.4'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Welcome to Earth's Premier
            <span className="block text-green-400">Alien Artifact Shop</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Discover out-of-this-world collectibles, authentic alien technology, and cosmic curiosities.
          </p>
          <div className="mt-8">
            <button
              className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-colors inline-flex items-center"
              onClick={() => navigate('/shop')}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
