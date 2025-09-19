import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Support - TravelApp',
  description: 'Get help with your TravelApp experience. Find answers, contact support, or browse our resources.',
};

const supportOptions = [
  {
    title: 'Frequently Asked Questions',
    description: 'Find quick answers to common questions about bookings, payments, and travel.',
    href: '/support/faq',
    icon: '❓',
  },
  {
    title: 'Contact Support',
    description: 'Get personalized help from our support team via our contact form.',
    href: '/support/contact',
    icon: '📞',
  },
  {
    title: 'Contact Information',
    description: 'Find our office locations, hours, and direct contact details.',
    href: '/support/info',
    icon: '📍',
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to assist you with any questions or concerns about your travel experience.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option) => (
              <Card key={option.href} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl" role="img" aria-hidden="true">{option.icon}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {option.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Link href={option.href}>
                  <Button className="w-full">
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-xl text-gray-600">
              Our support team is committed to providing you with the best experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">&lt; 2h</div>
              <p className="text-gray-600">Average Response Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}