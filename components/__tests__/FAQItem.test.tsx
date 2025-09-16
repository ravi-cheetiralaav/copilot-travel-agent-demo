import { render, screen, fireEvent } from '@testing-library/react';
import { FAQItem } from '@/components/ui/FAQItem';
import { FAQ } from '@/lib/types';

const mockFAQ: FAQ = {
  id: '1',
  question: 'How do I create an account?',
  answer: 'To create an account, click on the "Sign Up" button in the top right corner of the page.',
  category: 'general',
  isPopular: true,
};

describe('FAQItem Component', () => {
  it('renders FAQ question', () => {
    render(<FAQItem faq={mockFAQ} />);
    expect(screen.getByText('How do I create an account?')).toBeInTheDocument();
  });

  it('shows popular badge when FAQ is popular', () => {
    render(<FAQItem faq={mockFAQ} />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('does not show popular badge when FAQ is not popular', () => {
    const nonPopularFAQ = { ...mockFAQ, isPopular: false };
    render(<FAQItem faq={nonPopularFAQ} />);
    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });

  it('toggles answer visibility when question is clicked', () => {
    render(<FAQItem faq={mockFAQ} />);

    const questionButton = screen.getByRole('button');
    
    // Answer should not be visible initially
    expect(screen.queryByText(mockFAQ.answer)).not.toBeInTheDocument();

    // Click to expand
    fireEvent.click(questionButton);
    expect(screen.getByText(mockFAQ.answer)).toBeInTheDocument();

    // Click to collapse
    fireEvent.click(questionButton);
    expect(screen.queryByText(mockFAQ.answer)).not.toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<FAQItem faq={mockFAQ} />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('updates aria-expanded when expanded', () => {
    render(<FAQItem faq={mockFAQ} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});