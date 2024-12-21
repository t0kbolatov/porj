import React from 'react';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold text-white">Alien Emporium</span>
            </div>
            <p className="mt-4">Your trusted source for authentic alien artifacts and collectibles.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@alienemporium.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                1-800-ALIENS
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Area 51, NV
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/shop" className="hover:text-green-400">Shop</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
              <li><a href="/faq" className="hover:text-green-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on new artifacts and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Alien Emporium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}