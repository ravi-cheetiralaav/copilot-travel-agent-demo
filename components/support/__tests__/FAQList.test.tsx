import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FAQList } from '../FAQList';
import { FAQItem } from '@/lib/types';

const mockFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a trip?',
    answer: 'You can book a trip by selecting your destination and dates.',
    category: 'booking',
    tags: ['booking', 'process']
  },
  {
    id: 'faq-2',
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible cancellation policies.',
    category: 'booking',
    tags: ['cancellation', 'policy']
  },
  {
    id: 'faq-3',
    question: 'How do I reset my password?',
    answer: 'Click the forgot password link on the login page.',
    category: 'account',
    tags: ['password', 'account']
  }
];

describe('FAQList Component', () => {
  it('renders all FAQ items', () => {
    render(<FAQList faqs={mockFAQs} />);
    
    expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
    expect(screen.getByText('What is your cancellation policy?')).toBeInTheDocument();
    expect(screen.getByText('How do I reset my password?')).toBeInTheDocument();
  });

  it('filters FAQs by search query', async () => {
    render(<FAQList faqs={mockFAQs} />);
    
    const searchInput = screen.getByPlaceholderText(/search questions/i);
    fireEvent.change(searchInput, { target: { value: 'book' } });

    await waitFor(() => {
      expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
      // Only the first FAQ should be visible as it contains "book"
      expect(screen.queryByText('What is your cancellation policy?')).not.toBeInTheDocument();
      expect(screen.queryByText('How do I reset my password?')).not.toBeInTheDocument();
    });
  });

  it('filters FAQs by category', async () => {
    render(<FAQList faqs={mockFAQs} />);
    
    const accountButton = screen.getByText('account');
    fireEvent.click(accountButton);

    await waitFor(() => {
      expect(screen.queryByText('How do I book a trip?')).not.toBeInTheDocument();
      expect(screen.queryByText('What is your cancellation policy?')).not.toBeInTheDocument();
      expect(screen.getByText('How do I reset my password?')).toBeInTheDocument();
    });
  });

  it('expands and collapses FAQ items', () => {
    render(<FAQList faqs={mockFAQs} />);
    
    const firstQuestion = screen.getByText('How do I book a trip?');
    
    // Initially collapsed
    expect(screen.queryByText('You can book a trip by selecting your destination and dates.')).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(firstQuestion);
    expect(screen.getByText('You can book a trip by selecting your destination and dates.')).toBeInTheDocument();
    
    // Click to collapse
    fireEvent.click(firstQuestion);
    expect(screen.queryByText('You can book a trip by selecting your destination and dates.')).not.toBeInTheDocument();
  });

  it('shows correct results count', () => {
    render(<FAQList faqs={mockFAQs} />);
    
    expect(screen.getByText('Showing 3 of 3 questions')).toBeInTheDocument();
  });

  it('expands all FAQ items when expand all is clicked', () => {
    render(<FAQList faqs={mockFAQs} />);
    
    const expandAllButton = screen.getByText('Expand All');
    fireEvent.click(expandAllButton);

    expect(screen.getByText('You can book a trip by selecting your destination and dates.')).toBeInTheDocument();
    expect(screen.getByText('We offer flexible cancellation policies.')).toBeInTheDocument();
    expect(screen.getByText('Click the forgot password link on the login page.')).toBeInTheDocument();
  });
});