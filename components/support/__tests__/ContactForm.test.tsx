import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactForm } from '../ContactForm';
import { ContactForm as ContactFormType } from '@/lib/types';

const mockOnSubmit = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders all form fields', () => {
    render(<ContactForm onSubmit={mockOnSubmit} />);
    
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Category/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactForm onSubmit={mockOnSubmit} />);
    
    const submitButton = screen.getByRole('button', { name: /Send Message/ });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Subject is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('submits form with valid data', async () => {
    render(<ContactForm onSubmit={mockOnSubmit} />);
    
    // Fill out form
    fireEvent.change(screen.getByLabelText(/Full Name/), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Subject/), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText(/Message/), { target: { value: 'This is a test message with more than 10 characters' } });
    
    const submitButton = screen.getByRole('button', { name: /Send Message/ });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        category: 'general',
        message: 'This is a test message with more than 10 characters',
      });
    });
  });

  it('shows character count for message', () => {
    render(<ContactForm onSubmit={mockOnSubmit} />);
    
    const messageInput = screen.getByLabelText(/Message/);
    fireEvent.change(messageInput, { target: { value: 'Hello world' } });

    expect(screen.getByText('Minimum 10 characters (11/10)')).toBeInTheDocument();
  });

  it('disables form when submitting', () => {
    render(<ContactForm onSubmit={mockOnSubmit} isSubmitting={true} />);
    
    expect(screen.getByLabelText(/Full Name/)).toBeDisabled();
    expect(screen.getByLabelText(/Email Address/)).toBeDisabled();
    expect(screen.getByLabelText(/Subject/)).toBeDisabled();
    expect(screen.getByLabelText(/Category/)).toBeDisabled();
    expect(screen.getByLabelText(/Message/)).toBeDisabled();
    expect(screen.getByRole('button', { name: /Sending/ })).toBeDisabled();
  });

  it('clears errors when user starts typing', async () => {
    render(<ContactForm onSubmit={mockOnSubmit} />);
    
    // Trigger validation error
    const submitButton = screen.getByRole('button', { name: /Send Message/ });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument();
    });

    // Start typing in name field
    const nameInput = screen.getByLabelText(/Full Name/);
    fireEvent.change(nameInput, { target: { value: 'J' } });

    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    });
  });
});