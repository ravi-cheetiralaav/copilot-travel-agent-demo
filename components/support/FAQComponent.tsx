'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/types';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

interface FAQComponentProps {
  faqs: FAQ[];
}

export function FAQComponent({ faqs }: FAQComponentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'booking', label: 'Booking' },
    { value: 'payment', label: 'Payment' },
    { value: 'travel', label: 'Travel' },
    { value: 'account', label: 'Account' },
    { value: 'general', label: 'General' },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categoryStats = categories.slice(1).map(category => ({
    ...category,
    count: faqs.filter(faq => faq.category === category.value).length
  }));

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="md:w-48">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="booking">Booking</option>
              <option value="payment">Payment</option>
              <option value="travel">Travel</option>
              <option value="account">Account</option>
              <option value="general">General</option>
            </Select>
          </div>
        </div>
        
        {/* Category stats */}
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            Total: {faqs.length} questions
          </span>
          {categoryStats.map(category => (
            <span 
              key={category.value}
              className="bg-gray-100 px-3 py-1 rounded-full"
            >
              {category.label}: {category.count}
            </span>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(searchTerm || selectedCategory !== 'all') && (
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredFaqs.length} of {faqs.length} questions
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
        </div>
      )}

      {/* FAQ List */}
      <div className="space-y-2">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No FAQs found matching your criteria.</p>
            <p className="mt-2">Try adjusting your search or filter settings.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                aria-expanded={openItems.has(faq.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-1">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      {faq.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openItems.has(faq.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openItems.has(faq.id) && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      
      {/* Help text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Can&apos;t find what you&apos;re looking for?</p>
        <p className="mt-1">
          Contact our support team through the{' '}
          <a href="/support/contact" className="text-primary-600 hover:text-primary-700">
            Contact Form
          </a>{' '}
          or check our{' '}
          <a href="/support/info" className="text-primary-600 hover:text-primary-700">
            Contact Information
          </a>
          .
        </p>
      </div>
    </div>
  );
}