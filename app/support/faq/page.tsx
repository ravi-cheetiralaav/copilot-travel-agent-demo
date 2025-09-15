'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { mockFAQs } from '@/lib/data/mockData';
import { FAQ } from '@/lib/types';

const categories = [
  { value: '', label: 'All Categories' },
  { value: 'booking', label: 'Booking' },
  { value: 'payment', label: 'Payment' },
  { value: 'travel', label: 'Travel' },
  { value: 'account', label: 'Account' },
  { value: 'general', label: 'General' },
];

interface FAQItemProps {
  faq: FAQ;
}

function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div id={`faq-${faq.id}`} className="px-6 pb-4">
          <div className="text-gray-600 leading-relaxed">
            {faq.answer}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {faq.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredFAQs = useMemo(() => {
    return mockFAQs.filter((faq) => {
      const matchesSearch = searchQuery === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/support" className="hover:text-primary-600 transition-colors">
              Support
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">FAQ</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find answers to common questions about bookings, payments, travel, and more.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search FAQs
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search questions, answers, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {(searchQuery || selectedCategory) && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
              </p>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" role="img" aria-label="No results">🔍</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('');
                }}
              >
                Show all FAQs
              </Button>
            </div>
          ) : (
            filteredFAQs.map((faq) => <FAQItem key={faq.id} faq={faq} />)
          )}
        </div>

        {/* Contact Support CTA */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support/contact">
              <Button size="lg">
                Contact Support
              </Button>
            </Link>
            <Link href="/support/info">
              <Button variant="outline" size="lg">
                View Contact Info
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}