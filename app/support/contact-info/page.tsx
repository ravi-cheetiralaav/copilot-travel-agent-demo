import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { mockContactInfo } from '@/lib/data/supportData';

export const metadata = {
  title: 'Contact Information - TravelApp',
  description: 'Find our phone numbers, office hours, address, and other ways to reach us.',
};

export default function ContactInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex text-sm text-gray-500 mb-4">
            <Link href="/support" className="hover:text-primary-600">Support</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Contact Information</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h1>
          <p className="text-gray-600">
            Get in touch with our support team using any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Primary Contact Methods */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone Support</h3>
                  <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                  <a 
                    href={`tel:${mockContactInfo.phone}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-lg"
                  >
                    {mockContactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email Support</h3>
                  <p className="text-gray-600 mb-2">Send us an email and we&apos;ll respond within 24 hours</p>
                  <a 
                    href={`mailto:${mockContactInfo.email}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-lg"
                  >
                    {mockContactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Contact Form</h3>
                  <p className="text-gray-600 mb-3">Send us a detailed message through our contact form</p>
                  <Link 
                    href="/support/contact"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Office Hours */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Hours</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🕒</div>
                <div>
                  <p className="font-medium text-gray-900">Weekdays</p>
                  <p className="text-gray-600">{mockContactInfo.officeHours.weekdays}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-2xl">📅</div>
                <div>
                  <p className="font-medium text-gray-900">Weekends</p>
                  <p className="text-gray-600">{mockContactInfo.officeHours.weekends}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-2xl">🌎</div>
                <div>
                  <p className="font-medium text-gray-900">Timezone</p>
                  <p className="text-gray-600">{mockContactInfo.officeHours.timezone}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Note:</strong> For urgent issues outside business hours, 
                please send an email and we&apos;ll respond as soon as possible.
              </p>
            </div>
          </Card>

          {/* Physical Address */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Location</h2>
            
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Headquarters</h3>
                <address className="not-italic text-gray-700 space-y-1">
                  <p>{mockContactInfo.address.street}</p>
                  <p>{mockContactInfo.address.city}, {mockContactInfo.address.state} {mockContactInfo.address.zipCode}</p>
                  <p>{mockContactInfo.address.country}</p>
                </address>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-4">
                While we primarily operate online, visitors are welcome by appointment.
                Please contact us in advance to schedule a visit.
              </p>
              <a 
                href={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${mockContactInfo.address.street}, ${mockContactInfo.address.city}, ${mockContactInfo.address.state} ${mockContactInfo.address.zipCode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-primary-300 text-primary-700 rounded-md hover:bg-primary-50 transition-colors"
              >
                📍 View on Map
              </a>
            </div>
          </Card>

          {/* Social Media */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {mockContactInfo.socialMedia.facebook && (
                <a 
                  href={mockContactInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl">📘</div>
                  <div>
                    <p className="font-medium text-gray-900">Facebook</p>
                    <p className="text-sm text-gray-600">Latest updates</p>
                  </div>
                </a>
              )}

              {mockContactInfo.socialMedia.twitter && (
                <a 
                  href={mockContactInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl">🐦</div>
                  <div>
                    <p className="font-medium text-gray-900">Twitter</p>
                    <p className="text-sm text-gray-600">Quick updates</p>
                  </div>
                </a>
              )}

              {mockContactInfo.socialMedia.instagram && (
                <a 
                  href={mockContactInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl">📸</div>
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
                    <p className="text-sm text-gray-600">Travel photos</p>
                  </div>
                </a>
              )}

              {mockContactInfo.socialMedia.linkedin && (
                <a 
                  href={mockContactInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-2xl">💼</div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">Company news</p>
                  </div>
                </a>
              )}
            </div>
          </Card>
        </div>

        {/* FAQ and Support Links */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out our FAQ section for answers to common questions, 
            or browse our full support resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/support/faq"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Browse FAQ
            </Link>
            <Link 
              href="/support"
              className="inline-flex items-center px-6 py-3 border border-primary-300 text-primary-700 rounded-md hover:bg-primary-50 transition-colors"
            >
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}