import { faqs, contactInfo, faqCategories } from '@/lib/data/supportData';

describe('Support Data', () => {
  describe('FAQs', () => {
    it('should have valid FAQ structure', () => {
      expect(faqs).toHaveLength(16);
      
      faqs.forEach((faq) => {
        expect(faq).toHaveProperty('id');
        expect(faq).toHaveProperty('question');
        expect(faq).toHaveProperty('answer');
        expect(faq).toHaveProperty('category');
        
        expect(typeof faq.id).toBe('string');
        expect(typeof faq.question).toBe('string');
        expect(typeof faq.answer).toBe('string');
        expect(typeof faq.category).toBe('string');
        
        if (faq.isPopular !== undefined) {
          expect(typeof faq.isPopular).toBe('boolean');
        }
      });
    });

    it('should have popular FAQs marked correctly', () => {
      const popularFAQs = faqs.filter(faq => faq.isPopular);
      expect(popularFAQs.length).toBeGreaterThan(0);
      
      // Check that popular FAQs include common questions
      const popularQuestions = popularFAQs.map(faq => faq.question);
      expect(popularQuestions).toContain('How do I create an account?');
      expect(popularQuestions).toContain('How do I book a trip?');
    });

    it('should have FAQs in all categories', () => {
      const categories = ['general', 'bookings', 'payments', 'travel', 'account'];
      
      categories.forEach(category => {
        const categoryFAQs = faqs.filter(faq => faq.category === category);
        expect(categoryFAQs.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Contact Info', () => {
    it('should have valid contact information structure', () => {
      expect(contactInfo).toHaveProperty('phone');
      expect(contactInfo).toHaveProperty('email');
      expect(contactInfo).toHaveProperty('address');
      expect(contactInfo).toHaveProperty('businessHours');
      expect(contactInfo).toHaveProperty('socialMedia');

      expect(typeof contactInfo.phone).toBe('string');
      expect(typeof contactInfo.email).toBe('string');
      expect(contactInfo.email).toContain('@');
    });

    it('should have complete address information', () => {
      expect(contactInfo.address).toHaveProperty('street');
      expect(contactInfo.address).toHaveProperty('city');
      expect(contactInfo.address).toHaveProperty('state');
      expect(contactInfo.address).toHaveProperty('zipCode');
      expect(contactInfo.address).toHaveProperty('country');
    });

    it('should have business hours for all days', () => {
      const expectedDays = ['Monday - Friday', 'Saturday', 'Sunday', 'Holidays'];
      
      expectedDays.forEach(day => {
        expect(contactInfo.businessHours).toHaveProperty(day);
        expect(typeof contactInfo.businessHours[day]).toBe('string');
      });
    });

    it('should have social media links', () => {
      expect(contactInfo.socialMedia.facebook).toContain('facebook.com');
      expect(contactInfo.socialMedia.twitter).toContain('twitter.com');
      expect(contactInfo.socialMedia.instagram).toContain('instagram.com');
      expect(contactInfo.socialMedia.linkedin).toContain('linkedin.com');
    });
  });

  describe('FAQ Categories', () => {
    it('should have all required categories', () => {
      expect(faqCategories).toHaveLength(5);
      
      const categoryValues = faqCategories.map(cat => cat.value);
      expect(categoryValues).toContain('general');
      expect(categoryValues).toContain('bookings');
      expect(categoryValues).toContain('payments');
      expect(categoryValues).toContain('travel');
      expect(categoryValues).toContain('account');
    });

    it('should have proper category structure', () => {
      faqCategories.forEach(category => {
        expect(category).toHaveProperty('value');
        expect(category).toHaveProperty('label');
        expect(typeof category.value).toBe('string');
        expect(typeof category.label).toBe('string');
      });
    });
  });
});