'use client';

import { useState, useMemo } from 'react';
import { FAQ } from '@/lib/types';

interface FAQComponentProps {
  faqs: FAQ[];
  searchTerm?: string;
  selectedCategory?: FAQ['category'];
}

export function FAQComponent({ faqs, searchTerm = '', selectedCategory }: FAQComponentProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    let filtered = [...faqs];

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        faq =>
          faq.question.toLowerCase().includes(searchLower) ||
          faq.answer.toLowerCase().includes(searchLower) ||
          faq.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'general') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Sort by orderIndex and then by helpful count
    return filtered.sort((a, b) => {
      if (a.orderIndex !== b.orderIndex) {
        return a.orderIndex - b.orderIndex;
      }
      return b.helpful - a.helpful;
    });
  }, [faqs, searchTerm, selectedCategory]);

  const toggleExpanded = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const getCategoryColor = (category: FAQ['category']) => {
    const colors = {
      general: 'bg-gray-100 text-gray-700',
      booking: 'bg-blue-100 text-blue-700',
      payment: 'bg-green-100 text-green-700',
      travel: 'bg-orange-100 text-orange-700',
      account: 'bg-purple-100 text-purple-700'
    };
    return colors[category] || colors.general;
  };

  if (filteredFAQs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
        <p className="text-gray-600">
          Try adjusting your search terms or browse a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredFAQs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
            onClick={() => toggleExpanded(faq.id)}
            aria-expanded={expandedFAQ === faq.id}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(faq.category)}`}>
                    {faq.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {faq.helpful} people found this helpful
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
              </div>
              <div className="flex-shrink-0 ml-4">
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    expandedFAQ === faq.id ? 'rotate-180' : ''
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
          
          {expandedFAQ === faq.id && (
            <div className="px-6 pb-4">
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
                {faq.tags.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Related topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}