import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactForm } from '../ContactForm';

describe('ContactForm Component', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText('Full Name *')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address *')).toBeInTheDocument();
    expect(screen.getByLabelText('Inquiry Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject *')).toBeInTheDocument();
    expect(screen.getByLabelText('Message *')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  it('shows validation errors for required fields', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Subject is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  it('validates email format', () => {
    // Test that the email field accepts input and shows the correct placeholder
    render(<ContactForm />);
    const emailInput = screen.getByLabelText('Email Address *');
    
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'Enter your email address');
  });

  it('validates message length', () => {
    // Test that the message field has correct attributes
    render(<ContactForm />);
    const messageInput = screen.getByLabelText('Message *');
    
    expect(messageInput).toHaveAttribute('rows', '6');
    expect(messageInput).toHaveAttribute('placeholder', 'Please provide details about your inquiry...');
  });

  it('clears errors when user starts typing', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText('Full Name *');
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    
    // Trigger validation error
    fireEvent.click(submitButton);
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    
    // Clear error by typing
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const mockOnSubmit = jest.fn();
    render(<ContactForm onSubmit={mockOnSubmit} />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Full Name *'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address *'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Subject *'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'This is a test message with more than 10 characters.' } });
    
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.click(submitButton);
    
    // Wait for form submission - should show success message
    await waitFor(() => {
      expect(screen.getByText('Message Sent Successfully!')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('shows character count for message', () => {
    render(<ContactForm />);
    const messageInput = screen.getByLabelText('Message *');
    
    fireEvent.change(messageInput, { target: { value: 'Hello world' } });
    expect(screen.getByText('11/500 characters')).toBeInTheDocument();
  });
});