'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { FAQItem } from '@/components/ui/FAQItem';
import { faqs, faqCategories } from '@/lib/data/supportData';
import { FAQCategory } from '@/lib/types';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'all'>('all');

  // Filter FAQs based on search query and category
  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = searchQuery.length === 0 || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group FAQs by category for display
  const groupedFAQs = faqCategories.reduce((acc, category) => {
    const categoryFAQs = filteredFAQs.filter((faq) => faq.category === category.value);
    if (categoryFAQs.length > 0) {
      acc[category.value] = {
        label: category.label,
        faqs: categoryFAQs,
      };
    }
    return acc;
  }, {} as Record<FAQCategory, { label: string; faqs: typeof faqs }>);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const hasActiveFilters = searchQuery.length > 0 || selectedCategory !== 'all';
  const hasResults = filteredFAQs.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our travel services, booking process, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search FAQs
              </label>
              <Input
                id="search"
                type="text"
                placeholder="Search for questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="sm:w-64">
              <label htmlFor="category" className="sr-only">
                Filter by category
              </label>
              <Select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as FAQCategory | 'all')}
              >
                <option value="all">All Categories</option>
                {faqCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredFAQs.length} of {faqs.length} questions
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>

        {/* FAQ Results */}
        {hasResults ? (
          <div className="space-y-8">
            {selectedCategory === 'all' ? (
              // Show grouped by category
              Object.entries(groupedFAQs).map(([categoryKey, categoryData]) => (
                <div key={categoryKey} className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                    {categoryData.label}
                  </h2>
                  <div className="space-y-3">
                    {categoryData.faqs.map((faq) => (
                      <FAQItem key={faq.id} faq={faq} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              // Show filtered results
              <div className="space-y-3">
                {filteredFAQs.map((faq) => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            )}
          </div>
        ) : (
          // No results
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.968-6 2.536V19a1 1 0 001 1h10a1 1 0 001-1v-1.464c-1.534-1.568-3.664-2.536-6-2.536z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No questions found
            </h3>
            <p className="text-gray-600 mb-4">
              We couldn&apos;t find any questions matching your search criteria.
            </p>
            <Button
              variant="outline"
              onClick={clearFilters}
            >
              Clear filters and view all
            </Button>
          </div>
        )}

        {/* Contact Support CTA */}
        <div className="bg-primary-50 rounded-lg p-6 mt-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Didn&apos;t find what you were looking for?
            </h3>
            <p className="text-primary-700 mb-4">
              Our support team is here to help with any questions not covered in our FAQ.
            </p>
            <Button>
              <a href="/support/contact">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}