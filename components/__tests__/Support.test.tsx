import { render, screen } from '@testing-library/react';
import { mockFAQs } from '@/lib/data/mockData';

describe('FAQ Data', () => {
  it('should have the correct structure', () => {
    expect(mockFAQs).toBeDefined();
    expect(Array.isArray(mockFAQs)).toBe(true);
    expect(mockFAQs.length).toBeGreaterThan(0);
    
    const firstFaq = mockFAQs[0];
    expect(firstFaq).toHaveProperty('id');
    expect(firstFaq).toHaveProperty('question');
    expect(firstFaq).toHaveProperty('answer');
    expect(firstFaq).toHaveProperty('category');
    expect(firstFaq).toHaveProperty('tags');
    expect(Array.isArray(firstFaq.tags)).toBe(true);
  });

  it('should have valid categories', () => {
    const validCategories = ['booking', 'payment', 'travel', 'account', 'general'];
    
    mockFAQs.forEach(faq => {
      expect(validCategories).toContain(faq.category);
    });
  });

  it('should have questions and answers', () => {
    mockFAQs.forEach(faq => {
      expect(faq.question.length).toBeGreaterThan(0);
      expect(faq.answer.length).toBeGreaterThan(0);
    });
  });
});