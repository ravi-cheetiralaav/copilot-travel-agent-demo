import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FAQComponent } from '../FAQComponent';
import { faqData } from '@/lib/data/faqData';

describe('FAQComponent', () => {
  it('renders all FAQs by default', () => {
    render(<FAQComponent faqs={faqData} />);
    
    expect(screen.getByText(`Total: ${faqData.length} questions`)).toBeInTheDocument();
    
    // Check if first few FAQs are rendered
    expect(screen.getByText('How do I book a trip?')).toBeInTheDocument();
    expect(screen.getByText('What payment methods do you accept?')).toBeInTheDocument();
  });

  it('filters FAQs by search term', async () => {
    render(<FAQComponent faqs={faqData} />);
    
    const searchInput = screen.getByPlaceholderText('Search FAQs...');
    fireEvent.change(searchInput, { target: { value: 'booking' } });

    await waitFor(() => {
      expect(screen.getByText(/Showing \d+ of \d+ questions matching "booking"/)).toBeInTheDocument();
    });
  });

  it('filters FAQs by category', async () => {
    render(<FAQComponent faqs={faqData} />);
    
    const categorySelect = screen.getByRole('combobox');
    fireEvent.change(categorySelect, { target: { value: 'payment' } });

    await waitFor(() => {
      // Should only show payment-related FAQs
      expect(screen.getByText('What payment methods do you accept?')).toBeInTheDocument();
    });
  });

  it('expands and collapses FAQ items', () => {
    render(<FAQComponent faqs={faqData} />);
    
    const firstFAQ = screen.getByRole('button', { name: /How do I book a trip/ });
    
    // Initially collapsed
    expect(screen.queryByText(/To book a trip, browse our available trips/)).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(firstFAQ);
    expect(screen.getByText(/To book a trip, browse our available trips/)).toBeInTheDocument();
    
    // Click to collapse
    fireEvent.click(firstFAQ);
    expect(screen.queryByText(/To book a trip, browse our available trips/)).not.toBeInTheDocument();
  });

  it('displays category statistics', () => {
    render(<FAQComponent faqs={faqData} />);
    
    expect(screen.getByText('Booking: 3')).toBeInTheDocument();
    expect(screen.getByText('Payment: 3')).toBeInTheDocument();
    expect(screen.getByText('Travel: 3')).toBeInTheDocument();
    expect(screen.getByText('Account: 3')).toBeInTheDocument();
    expect(screen.getByText('General: 3')).toBeInTheDocument();
  });

  it('shows no results message when search yields no matches', async () => {
    render(<FAQComponent faqs={faqData} />);
    
    const searchInput = screen.getByPlaceholderText('Search FAQs...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    await waitFor(() => {
      expect(screen.getByText('No FAQs found matching your criteria.')).toBeInTheDocument();
      expect(screen.getByText('Try adjusting your search or filter settings.')).toBeInTheDocument();
    });
  });
});