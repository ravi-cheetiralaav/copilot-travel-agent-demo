import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FAQSection } from '../FAQSection';
import { FAQItem } from '@/lib/types';

const mockFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'How do I book a trip?',
    answer: 'You can book a trip by selecting your destination and dates.',
    category: 'booking'
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards and PayPal.',
    category: 'payment'
  }
];

describe('FAQSection Component', () => {
  it('renders FAQ items', () => {
    render(<FAQSection faqs={mockFAQs} />);
    expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
    expect(screen.getByText('What payment methods do you accept?')).toBeInTheDocument();
  });

  it('toggles FAQ item when clicked', () => {
    render(<FAQSection faqs={mockFAQs} />);
    const faqButton = screen.getByText('How do I book a trip?');
    
    // Initially answer should not be visible
    expect(screen.queryByText('You can book a trip by selecting your destination and dates.')).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(faqButton);
    expect(screen.getByText('You can book a trip by selecting your destination and dates.')).toBeInTheDocument();
    
    // Click to collapse
    fireEvent.click(faqButton);
    expect(screen.queryByText('You can book a trip by selecting your destination and dates.')).not.toBeInTheDocument();
  });

  it('filters FAQs by category', () => {
    render(<FAQSection faqs={mockFAQs} />);
    const categorySelect = screen.getByLabelText('Filter by Category');
    
    // Filter by booking category
    fireEvent.change(categorySelect, { target: { value: 'booking' } });
    expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
    expect(screen.queryByText('What payment methods do you accept?')).not.toBeInTheDocument();
    
    // Filter by payment category
    fireEvent.change(categorySelect, { target: { value: 'payment' } });
    expect(screen.queryByText('How do I book a trip?')).not.toBeInTheDocument();
    expect(screen.getByText('What payment methods do you accept?')).toBeInTheDocument();
  });

  it('shows no results message when no FAQs match filter', () => {
    render(<FAQSection faqs={mockFAQs} />);
    const categorySelect = screen.getByLabelText('Filter by Category');
    
    fireEvent.change(categorySelect, { target: { value: 'technical' } });
    expect(screen.getByText('No FAQs found for the selected category.')).toBeInTheDocument();
  });
});