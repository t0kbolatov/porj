import React from 'react';
import { Users, Award, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">About Alien Emporium</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Your trusted source for authentic extraterrestrial artifacts and collectibles since 1947.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: Users,
            title: 'Expert Team',
            description: 'Our xenoarchaeologists verify every artifact'
          },
          {
            icon: Award,
            title: 'Certified Authentic',
            description: 'Each item comes with a certificate of authenticity'
          },
          {
            icon: Shield,
            title: 'Secure Shopping',
            description: 'Advanced encryption and secure payments'
          },
          {
            icon: Globe,
            title: 'Worldwide Shipping',
            description: 'We deliver to any planet in the galaxy'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <feature.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
        <p className="text-gray-400 mb-4">
          Founded in the wake of the Roswell incident, Alien Emporium has been at the forefront of 
          extraterrestrial commerce for over seven decades. What started as a small collection of 
          recovered artifacts has grown into Earth's premier destination for alien technology and art.
        </p>
        <p className="text-gray-400">
          Today, we continue our mission to bridge the gap between human and alien cultures, 
          providing enthusiasts and collectors with authenticated pieces of otherworldly history.
        </p>
      </div>
    </div>
  );
}