'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/types';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {faq.question}
            </h3>
            {faq.isPopular && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Popular
              </span>
            )}
          </div>
          <svg
            className={cn(
              'h-5 w-5 text-gray-500 transition-transform duration-200',
              isOpen ? 'rotate-180' : ''
            )}
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
      </button>
      
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}