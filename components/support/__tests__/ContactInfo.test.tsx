import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactInfo } from '../ContactInfo';
import { ContactInfo as ContactInfoType } from '@/lib/types';

const mockContactInfo: ContactInfoType = {
  email: 'support@example.com',
  phone: '+1 (555) 123-4567',
  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
  responseTime: 'We typically respond within 24 hours',
  alternativeContact: 'Live chat available during business hours'
};

describe('ContactInfo Component', () => {
  it('renders all contact information', () => {
    render(<ContactInfo contactInfo={mockContactInfo} />);
    
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('support@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('Monday - Friday: 9:00 AM - 6:00 PM EST')).toBeInTheDocument();
    expect(screen.getByText('We typically respond within 24 hours')).toBeInTheDocument();
    expect(screen.getByText('Live chat available during business hours')).toBeInTheDocument();
  });

  it('renders email as clickable link', () => {
    render(<ContactInfo contactInfo={mockContactInfo} />);
    
    const emailLink = screen.getByRole('link', { name: 'support@example.com' });
    expect(emailLink).toHaveAttribute('href', 'mailto:support@example.com');
  });

  it('renders phone as clickable link when provided', () => {
    render(<ContactInfo contactInfo={mockContactInfo} />);
    
    const phoneLink = screen.getByRole('link', { name: '+1 (555) 123-4567' });
    expect(phoneLink).toHaveAttribute('href', 'tel:+1 (555) 123-4567');
  });

  it('renders without phone when not provided', () => {
    const contactInfoWithoutPhone = {
      ...mockContactInfo,
      phone: undefined
    };
    
    render(<ContactInfo contactInfo={contactInfoWithoutPhone} />);
    
    expect(screen.queryByText('Phone')).not.toBeInTheDocument();
    expect(screen.getByText('support@example.com')).toBeInTheDocument();
  });

  it('renders without alternative contact when not provided', () => {
    const contactInfoWithoutAlt = {
      ...mockContactInfo,
      alternativeContact: undefined
    };
    
    render(<ContactInfo contactInfo={contactInfoWithoutAlt} />);
    
    expect(screen.queryByText('Additional Support')).not.toBeInTheDocument();
    expect(screen.getByText('support@example.com')).toBeInTheDocument();
  });

  it('displays emergency contact information', () => {
    render(<ContactInfo contactInfo={mockContactInfo} />);
    
    expect(screen.getByText('Travel Emergency')).toBeInTheDocument();
    expect(screen.getByText(/24\/7 emergency hotline/)).toBeInTheDocument();
    
    const emergencyLink = screen.getByRole('link', { name: '+1 (555) 999-8888' });
    expect(emergencyLink).toHaveAttribute('href', 'tel:+15559998888');
  });
});