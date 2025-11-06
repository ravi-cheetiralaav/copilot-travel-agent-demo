import Link from 'next/link';

export default function ContactInfoPage() {
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
              <span className="text-gray-900">Contact Information</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with our support team through multiple channels. We&apos;re here to help make your travel experience exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Phone Support */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Phone Support
                </h3>
                
                <div className="space-y-3 text-left">
                  <div>
                    <p className="font-medium text-gray-900">Customer Service</p>
                    <p className="text-primary-600 font-mono">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">Emergency Support</p>
                    <p className="text-primary-600 font-mono">+1 (555) 911-2024</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Email Support
                </h3>
                
                <div className="space-y-3 text-left">
                  <div>
                    <p className="font-medium text-gray-900">General Inquiries</p>
                    <p className="text-primary-600">support@travelapp.com</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">Booking Support</p>
                    <p className="text-primary-600">bookings@travelapp.com</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">Billing Questions</p>
                    <p className="text-primary-600">billing@travelapp.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Office Location
                </h3>
                
                <div className="text-left">
                  <address className="not-italic text-gray-700">
                    <p className="font-medium">TravelApp Headquarters</p>
                    <p>123 Adventure Boulevard</p>
                    <p>Suite 500</p>
                    <p>San Francisco, CA 94105</p>
                    <p>United States</p>
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Business Hours
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Customer Support</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-mono">8:00 AM - 8:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-mono">9:00 AM - 5:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-mono">10:00 AM - 4:00 PM PST</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Emergency Support</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Available 24/7</span>
                    <span className="font-mono">All Days</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Emergency support is available for urgent travel-related issues during your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Times */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-blue-900 mb-2">Phone Support</h4>
              <p className="text-blue-700">Immediate response during business hours</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-green-900 mb-2">Email Support</h4>
              <p className="text-green-700">Response within 24 hours</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <h4 className="font-semibold text-purple-900 mb-2">Contact Form</h4>
              <p className="text-purple-700">Response within 24 hours</p>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Before You Contact Us
            </h3>
            <p className="text-gray-600 mb-4">
              You might find answers to your questions faster by checking these resources:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support/faq"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Browse FAQ
              </Link>
              <Link
                href="/bookings"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Manage Bookings
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Travel Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}