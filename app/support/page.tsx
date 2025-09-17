import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the support you need for your travel experience. Find answers, contact us, or browse our help resources.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">❓</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 mb-6">
              Find quick answers to common questions about bookings, payments, and travel policies.
            </p>
            <Link href="/support/faq">
              <Button className="w-full">
                Browse FAQ
              </Button>
            </Link>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-6">
              Have a specific question? Send us a message and we'll get back to you as soon as possible.
            </p>
            <Link href="/support/contact">
              <Button className="w-full">
                Send Message
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-6">
              Find our phone numbers, email addresses, office locations, and business hours.
            </p>
            <Link href="/support/info">
              <Button className="w-full">
                View Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📋</span>
              </div>
              <h4 className="font-semibold mb-2">Booking Help</h4>
              <Link href="/support/faq?category=booking" className="text-primary-600 hover:text-primary-700 text-sm">
                View booking FAQs
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💳</span>
              </div>
              <h4 className="font-semibold mb-2">Payment Issues</h4>
              <Link href="/support/faq?category=payment" className="text-primary-600 hover:text-primary-700 text-sm">
                View payment FAQs
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✈️</span>
              </div>
              <h4 className="font-semibold mb-2">Travel Info</h4>
              <Link href="/support/faq?category=travel" className="text-primary-600 hover:text-primary-700 text-sm">
                View travel FAQs
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👤</span>
              </div>
              <h4 className="font-semibold mb-2">Account Help</h4>
              <Link href="/support/faq?category=account" className="text-primary-600 hover:text-primary-700 text-sm">
                View account FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}