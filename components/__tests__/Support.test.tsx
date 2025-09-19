import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockFAQs, mockContactInfo } from '../../lib/data/supportData';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('Support Data', () => {
  describe('mockFAQs', () => {
    it('should contain valid FAQ data', () => {
      expect(Array.isArray(mockFAQs)).toBe(true);
      expect(mockFAQs.length).toBeGreaterThan(0);
      
      // Test first FAQ structure
      const firstFaq = mockFAQs[0];
      expect(firstFaq).toHaveProperty('id');
      expect(firstFaq).toHaveProperty('question');
      expect(firstFaq).toHaveProperty('answer');
      expect(firstFaq).toHaveProperty('category');
      expect(typeof firstFaq.question).toBe('string');
      expect(typeof firstFaq.answer).toBe('string');
    });

    it('should have popular FAQs marked correctly', () => {
      const popularFAQs = mockFAQs.filter(faq => faq.isPopular);
      expect(popularFAQs.length).toBeGreaterThan(0);
      
      popularFAQs.forEach(faq => {
        expect(faq.isPopular).toBe(true);
      });
    });

    it('should have valid categories', () => {
      const validCategories = ['booking', 'payment', 'travel', 'account', 'general'];
      
      mockFAQs.forEach(faq => {
        expect(validCategories).toContain(faq.category);
      });
    });
  });

  describe('mockContactInfo', () => {
    it('should contain valid contact information', () => {
      expect(mockContactInfo).toHaveProperty('email');
      expect(mockContactInfo).toHaveProperty('phone');
      expect(mockContactInfo).toHaveProperty('address');
      expect(mockContactInfo).toHaveProperty('officeHours');
      
      expect(typeof mockContactInfo.email).toBe('string');
      expect(typeof mockContactInfo.phone).toBe('string');
      expect(mockContactInfo.email).toContain('@');
    });

    it('should have proper address structure', () => {
      const { address } = mockContactInfo;
      expect(address).toHaveProperty('street');
      expect(address).toHaveProperty('city');
      expect(address).toHaveProperty('state');
      expect(address).toHaveProperty('country');
      expect(address).toHaveProperty('zipCode');
    });

    it('should have office hours defined', () => {
      const { officeHours } = mockContactInfo;
      expect(officeHours).toHaveProperty('weekdays');
      expect(officeHours).toHaveProperty('weekends');
      expect(officeHours).toHaveProperty('timezone');
      expect(typeof officeHours.weekdays).toBe('string');
      expect(typeof officeHours.weekends).toBe('string');
      expect(typeof officeHours.timezone).toBe('string');
    });
  });
});