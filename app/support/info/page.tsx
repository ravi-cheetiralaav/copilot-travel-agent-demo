import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Contact Information - TravelApp Support',
  description: 'Find our office locations, contact numbers, email addresses, and business hours.',
};

const contactMethods = [
  {
    title: '24/7 Support Hotline',
    description: 'For urgent booking issues and travel emergencies',
    contact: '+1 (800) 555-TRAVEL',
    availability: 'Available 24/7',
    icon: '📞',
  },
  {
    title: 'General Inquiries',
    description: 'For general questions and non-urgent matters',
    contact: 'support@travelapp.com',
    availability: 'Response within 24 hours',
    icon: '📧',
  },
  {
    title: 'Booking Support',
    description: 'For booking modifications and trip planning',
    contact: 'bookings@travelapp.com',
    availability: 'Response within 4 hours',
    icon: '🎫',
  },
];

const offices = [
  {
    city: 'New York (Headquarters)',
    address: '123 Travel Avenue, Suite 500\nNew York, NY 10001',
    phone: '+1 (212) 555-0100',
    hours: 'Mon-Fri: 9:00 AM - 8:00 PM EST\nSat-Sun: 10:00 AM - 6:00 PM EST',
  },
  {
    city: 'Los Angeles',
    address: '456 Sunset Boulevard, Floor 12\nLos Angeles, CA 90028',
    phone: '+1 (323) 555-0200',
    hours: 'Mon-Fri: 9:00 AM - 8:00 PM PST\nSat-Sun: 10:00 AM - 6:00 PM PST',
  },
  {
    city: 'London',
    address: '789 Travel Lane, 3rd Floor\nLondon, UK SW1A 1AA',
    phone: '+44 20 7946 0001',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT\nSat: 10:00 AM - 4:00 PM GMT',
  },
];

const departments = [
  {
    department: 'Customer Service',
    email: 'support@travelapp.com',
    phone: '+1 (800) 555-TRAVEL',
    description: 'General inquiries and support',
  },
  {
    department: 'Booking & Reservations',
    email: 'bookings@travelapp.com',
    phone: '+1 (800) 555-BOOK',
    description: 'New bookings and modifications',
  },
  {
    department: 'Payment & Billing',
    email: 'billing@travelapp.com',
    phone: '+1 (800) 555-BILL',
    description: 'Payment issues and billing questions',
  },
  {
    department: 'Group Travel',
    email: 'groups@travelapp.com',
    phone: '+1 (800) 555-GROUP',
    description: 'Group bookings (8+ travelers)',
  },
  {
    department: 'Travel Insurance',
    email: 'insurance@travelapp.com',
    phone: '+1 (800) 555-INSURE',
    description: 'Insurance claims and questions',
  },
];

export default function ContactInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/support" className="hover:text-primary-600 transition-colors">
              Support
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Contact Information</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find the best way to reach us based on your needs. Our support team is here to help you 24/7.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Contact Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl" role="img" aria-hidden="true">{method.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-primary-600 font-medium text-lg mb-2">
                  {method.contact}
                </p>
                <p className="text-xs text-gray-500">
                  {method.availability}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Office Locations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Office Locations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <Card key={office.city} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {office.city}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {office.address}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-primary-600 font-medium">
                      {office.phone}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {office.hours}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Department Directory */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Department Directory</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {departments.map((dept) => (
                <div key={dept.department} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {dept.department}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {dept.description}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 text-sm">
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {dept.email}
                      </a>
                      <a 
                        href={`tel:${dept.phone.replace(/[^\d+]/g, '')}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-16">
          <Card className="p-8 bg-red-50 border-red-200">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-2xl" role="img" aria-label="Emergency">🚨</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-4">
                  Emergency Travel Assistance
                </h2>
                <p className="text-red-700 mb-4">
                  If you&apos;re experiencing a travel emergency while on your trip (medical emergency, 
                  natural disaster, security concerns), call our emergency hotline immediately.
                </p>
                <div className="space-y-2">
                  <p className="text-red-900 font-semibold text-lg">
                    Emergency Hotline: +1 (800) 911-TRAVEL
                  </p>
                  <p className="text-red-700 text-sm">
                    Available 24/7 worldwide • Multilingual support available
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 mb-4">
                Find quick answers to common questions about bookings, payments, and travel.
              </p>
              <Link href="/support/faq">
                <span className="text-primary-600 hover:text-primary-700 font-medium">
                  Browse FAQ →
                </span>
              </Link>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Form
              </h3>
              <p className="text-gray-600 mb-4">
                Send us a detailed message through our contact form for non-urgent inquiries.
              </p>
              <Link href="/support/contact">
                <span className="text-primary-600 hover:text-primary-700 font-medium">
                  Send Message →
                </span>
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}