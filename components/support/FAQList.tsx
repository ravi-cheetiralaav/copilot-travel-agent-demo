'use client';

import { useState } from 'react';
import { FAQItem } from '@/lib/types';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface FAQListProps {
  faqs: FAQItem[];
}

interface FAQItemComponentProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ faq, isOpen, onToggle }: FAQItemComponentProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
          aria-expanded={isOpen}
        >
          <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {faq.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function FAQList({ faqs }: FAQListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const categories = ['all', 'general', 'booking', 'payment', 'travel', 'account'];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
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

  const expandAll = () => {
    setOpenItems(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          {/* Search */}
          <div>
            <label htmlFor="faq-search" className="block text-sm font-medium text-gray-700 mb-2">
              Search FAQs
            </label>
            <Input
              id="faq-search"
              type="text"
              placeholder="Search questions, answers, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === 'all' ? 'All Categories' : category}
              </Button>
            ))}
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={expandAll}>
              Expand All
            </Button>
            <Button variant="ghost" size="sm" onClick={collapseAll}>
              Collapse All
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        Showing {filteredFAQs.length} of {faqs.length} questions
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* FAQ Items */}
      <div>
        {filteredFAQs.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No FAQs found matching your search criteria.</p>
            </CardContent>
          </Card>
        ) : (
          filteredFAQs.map((faq) => (
            <FAQItemComponent
              key={faq.id}
              faq={faq}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}