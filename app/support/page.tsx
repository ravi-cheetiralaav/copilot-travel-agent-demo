import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SupportPage() {
  const supportOptions = [
    {
      title: 'Frequently Asked Questions',
      description: 'Find quick answers to common questions about bookings, payments, travel, and more.',
      href: '/support/faq',
      icon: '❓',
      buttonText: 'Browse FAQs',
    },
    {
      title: 'Contact Support',
      description: 'Get personalized help by submitting a support ticket. Our team will respond within 24 hours.',
      href: '/support/contact',
      icon: '💬',
      buttonText: 'Contact Us',
    },
    {
      title: 'Contact Information',
      description: 'Find our phone number, email address, office hours, and location details.',
      href: '/support/info',
      icon: '📞',
      buttonText: 'View Details',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              How can we help you?
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to assist you with any questions or issues you may have. 
              Choose from the options below to get the help you need.
            </p>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option) => (
            <Card key={option.href} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{option.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {option.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              <Link href={option.href}>
                <Button className="w-full">
                  {option.buttonText}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              We&apos;re here to help
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our support team is dedicated to providing you with the best service possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Support Available</div>
              <div className="text-gray-600">Get help whenever you need it</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">&lt; 24h</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Response Time</div>
              <div className="text-gray-600">We respond to all inquiries quickly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Customer Satisfaction</div>
              <div className="text-gray-600">High-quality support you can trust</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}