import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the support you need for your travel adventures. Find answers to common questions, contact our team, or get in touch directly.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FAQ Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 mb-4">
                Find quick answers to common questions about bookings, travel guides, and more.
              </p>
              <Link href="/support/faq">
                <Button className="w-full">Browse FAQ</Button>
              </Link>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-4">
                Have a specific question or need personalized help? Send us a message.
              </p>
              <Link href="/support/contact">
                <Button className="w-full">Send Message</Button>
              </Link>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-4">
                Get our direct contact details, office hours, and location information.
              </p>
              <Link href="/support/info">
                <Button className="w-full">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Need Immediate Help?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Booking Issues</h3>
                <p className="text-sm text-gray-600">Problems with your reservations</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Help</h3>
                <p className="text-sm text-gray-600">Billing and payment questions</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Travel Changes</h3>
                <p className="text-sm text-gray-600">Modify or cancel your trips</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Account Support</h3>
                <p className="text-sm text-gray-600">Profile and account assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}