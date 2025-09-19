import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FAQComponent } from '../support/FAQComponent';
import { FAQ } from '@/lib/types';

const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I book a trip?',
    answer: 'To book a trip, browse our available trips and follow the booking process.',
    category: 'booking',
    tags: ['booking', 'reservation'],
    helpful: 45,
    orderIndex: 1
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and PayPal.',
    category: 'payment',
    tags: ['payment', 'credit-card'],
    helpful: 42,
    orderIndex: 2
  }
];

describe('FAQComponent', () => {
  it('renders FAQ items correctly', () => {
    render(<FAQComponent faqs={mockFAQs} />);
    
    expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
    expect(screen.getByText('What payment methods do you accept?')).toBeInTheDocument();
  });

  it('expands FAQ item when clicked', () => {
    render(<FAQComponent faqs={mockFAQs} />);
    
    const faqButton = screen.getByText('How do I book a trip?').closest('button');
    fireEvent.click(faqButton!);
    
    expect(screen.getByText('To book a trip, browse our available trips and follow the booking process.')).toBeInTheDocument();
  });

  it('filters FAQs by search term', () => {
    render(<FAQComponent faqs={mockFAQs} searchTerm="booking" />);
    
    expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
    expect(screen.queryByText('What payment methods do you accept?')).not.toBeInTheDocument();
  });

  it('filters FAQs by category', () => {
    render(<FAQComponent faqs={mockFAQs} selectedCategory="payment" />);
    
    expect(screen.getByText('What payment methods do you accept?')).toBeInTheDocument();
    expect(screen.queryByText('How do I book a trip?')).not.toBeInTheDocument();
  });

  it('shows no results message when no FAQs match filters', () => {
    render(<FAQComponent faqs={mockFAQs} searchTerm="nonexistent" />);
    
    expect(screen.getByText('No FAQs found')).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your search terms or browse a different category.')).toBeInTheDocument();
  });
});