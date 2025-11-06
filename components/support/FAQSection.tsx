'use client';

import { useState } from 'react';
import { FAQItem } from '@/lib/types';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'booking', label: 'Booking & Reservations' },
    { value: 'payment', label: 'Payment & Refunds' },
    { value: 'points', label: 'Points & Rewards' },
    { value: 'guides', label: 'Travel Guides' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'general', label: 'General' },
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Filter */}
      <div className="mb-8">
        <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              aria-expanded={openItems.has(faq.id)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openItems.has(faq.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItems.has(faq.id) && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No FAQs found for the selected category.</p>
        </div>
      )}
    </div>
  );
}