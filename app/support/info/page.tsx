import Link from 'next/link';
import { mockContactInfo } from '@/lib/data/supportData';
import { ContactInfo } from '@/lib/types';

export default function ContactInfoPage() {
  const getIcon = (type: ContactInfo['type']) => {
    const icons = {
      phone: '📞',
      email: '✉️',
      address: '📍',
      hours: '🕒'
    };
    return icons[type] || '📞';
  };

  const formatValue = (contact: ContactInfo) => {
    if (contact.type === 'address' || contact.type === 'hours') {
      return contact.value.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < contact.value.split('\n').length - 1 && <br />}
        </span>
      ));
    }
    return contact.value;
  };

  const getActionButton = (contact: ContactInfo) => {
    if (contact.type === 'phone') {
      return (
        <a
          href={`tel:${contact.value.replace(/\D/g, '')}`}
          className="inline-flex items-center px-3 py-1 border border-primary-600 text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
        >
          Call Now
        </a>
      );
    }
    if (contact.type === 'email') {
      return (
        <a
          href={`mailto:${contact.value}`}
          className="inline-flex items-center px-3 py-1 border border-primary-600 text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
        >
          Send Email
        </a>
      );
    }
    return null;
  };

  // Group contacts by type for better organization
  const groupedContacts = mockContactInfo.reduce((groups, contact) => {
    const type = contact.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(contact);
    return groups;
  }, {} as Record<ContactInfo['type'], ContactInfo[]>);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/support" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Support
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Information
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch with our support team through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {mockContactInfo
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .map((contact) => (
              <div
                key={contact.id}
                className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
                  contact.isPrimary ? 'ring-2 ring-primary-200 border-primary-200' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{getIcon(contact.type)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {contact.label}
                      </h3>
                      {contact.isPrimary && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          Primary
                        </span>
                      )}
                    </div>
                  </div>
                  {getActionButton(contact)}
                </div>

                <div className="mb-3">
                  <p className="text-gray-900 font-medium leading-relaxed">
                    {formatValue(contact)}
                  </p>
                </div>

                {contact.description && (
                  <p className="text-sm text-gray-600">
                    {contact.description}
                  </p>
                )}
              </div>
            ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="font-semibold mb-2">Browse FAQ</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find quick answers to common questions
              </p>
              <Link 
                href="/support/faq"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View FAQ
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold mb-2">Send Message</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contact us with your specific question
              </p>
              <Link 
                href="/support/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-semibold mb-2">Emergency Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                24/7 urgent assistance available
              </p>
              <a 
                href="tel:5551234567"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Office Map Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Visit Our Office
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Headquarters</h3>
              <div className="space-y-2 text-gray-600">
                <p>123 Travel Plaza, Suite 400</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Office visits by appointment only. Please call ahead to schedule a meeting.
              </p>
              <div className="mt-4">
                <a
                  href="https://maps.google.com/?q=123+Travel+Plaza+Suite+400+New+York+NY+10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  View on Google Maps
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">
                Interactive map would be displayed here in a real application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}