import React from 'react';
import { HelpCircle, MessageCircle, FileText, Phone } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Got questions? We've got answers! Explore our FAQ to learn more about Alien Emporium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: HelpCircle,
            title: 'General Questions',
            description: 'Learn more about who we are and what we do.'
          },
          {
            icon: MessageCircle,
            title: 'Customer Support',
            description: 'How to get help with your order or account.'
          },
          {
            icon: FileText,
            title: 'Shipping & Returns',
            description: 'Details about our shipping policies and return process.'
          },
          {
            icon: Phone,
            title: 'Contact Us',
            description: 'Get in touch with our support team directly.'
          }
        ].map((faq, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
            <faq.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{faq.title}</h3>
            <p className="text-gray-400">{faq.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Have More Questions?</h2>
        <p className="text-gray-400 mb-4">
          If you can't find the answers you're looking for, our support team is here to help. 
          Reach out to us anytime, and we'll be happy to assist you.
        </p>
        <p className="text-gray-400">
          Email us at <span className="text-green-400">support@alienemporium.com</span> or call us at 
          <span className="text-green-400"> +1-800-ALIEN-HELP</span>.
        </p>
      </div>
    </div>
  );
}
