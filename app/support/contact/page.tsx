'use client';

import { useState } from 'react';
import { ContactForm } from '@/components/support/ContactForm';
import { ContactForm as ContactFormType } from '@/lib/types';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Contact form submitted:', data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav className="text-sm mb-6">
                <Link href="/support" className="text-primary-600 hover:text-primary-700">
                  Support
                </Link>
                <span className="text-gray-500 mx-2">→</span>
                <span className="text-gray-900">Contact</span>
              </nav>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for contacting us. We&apos;ve received your message and will respond within 24 hours during business days.
                </p>
                <div className="space-x-4">
                  <Link 
                    href="/support" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                  >
                    Back to Support
                  </Link>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsSubmitting(false);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6">
              <Link href="/support" className="text-primary-600 hover:text-primary-700">
                Support
              </Link>
              <span className="text-gray-500 mx-2">→</span>
              <span className="text-gray-900">Contact</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Our Support Team
            </h1>
            <p className="text-xl text-gray-600">
              Have a question or need help with your booking? Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
          
          {/* Additional Help */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">
                We typically respond within 24 hours during business days
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Check FAQ</h3>
              <p className="text-sm text-gray-600">
                Many questions are answered in our{' '}
                <Link href="/support/faq" className="text-primary-600 hover:text-primary-700">
                  FAQ section
                </Link>
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600">
                For urgent matters, check our{' '}
                <Link href="/support/info" className="text-primary-600 hover:text-primary-700">
                  contact information
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}