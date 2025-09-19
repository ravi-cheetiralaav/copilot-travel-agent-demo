import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get assistance with your travel plans, bookings, and account. We&apos;re here to help make your journey smooth.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600 mb-4">
              Find quick answers to common questions about bookings, payments, and travel guides.
            </p>
            <Link href="/support/faq">
              <Button variant="outline" size="sm" className="w-full">
                Browse FAQs
              </Button>
            </Link>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-gray-600 mb-4">
              Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
            <Link href="/support/contact">
              <Button size="sm" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Chat with our support team in real-time during business hours.
            </p>
            <Button variant="outline" size="sm" className="w-full" disabled>
              Coming Soon
            </Button>
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Booking Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/support/faq" className="hover:text-primary-600">How to make a booking</Link></li>
                <li><Link href="/support/faq" className="hover:text-primary-600">Modify reservations</Link></li>
                <li><Link href="/support/faq" className="hover:text-primary-600">Cancellation policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment & Refunds</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/support/faq" className="hover:text-primary-600">Payment methods</Link></li>
                <li><Link href="/support/faq" className="hover:text-primary-600">Refund process</Link></li>
                <li><Link href="/support/faq" className="hover:text-primary-600">Billing questions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Points & Rewards</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/support/faq" className="hover:text-primary-600">Earning points</Link></li>
                <li><Link href="/support/faq" className="hover:text-primary-600">Redeeming rewards</Link></li>
                <li><Link href="/points" className="hover:text-primary-600">View my points</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Travel Guides</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/guides" className="hover:text-primary-600">Browse guides</Link></li>
                <li><Link href="/support/faq" className="hover:text-primary-600">Using guides</Link></li>
                <li><Link href="/support/contact" className="hover:text-primary-600">Request a guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h3 className="text-lg font-medium text-red-900">Travel Emergency</h3>
              <p className="text-red-700">
                For urgent assistance during your trip, call our 24/7 emergency hotline: 
                <a href="tel:+15559998888" className="font-semibold hover:underline ml-1">
                  +1 (555) 999-8888
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}