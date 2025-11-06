import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata = {
  title: 'Support - TravelApp',
  description: 'Get help with your travel bookings, browse FAQs, and contact our support team.',
};

export default function SupportPage() {
  const supportOptions = [
    {
      title: 'Frequently Asked Questions',
      description: 'Find quick answers to common questions about bookings, payments, and travel.',
      href: '/support/faq',
      icon: '❓',
    },
    {
      title: 'Contact Us',
      description: 'Send us a message and our support team will get back to you within 24 hours.',
      href: '/support/contact',
      icon: '✉️',
    },
    {
      title: 'Contact Information',
      description: 'Find our phone numbers, office hours, and other ways to reach us.',
      href: '/support/contact-info',
      icon: '📞',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help you with any questions or issues you might have. 
            Choose the support option that best fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option) => (
            <Link key={option.href} href={option.href} className="group">
              <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 group-hover:border-primary-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need immediate assistance?
          </h2>
          <p className="text-gray-600 mb-6">
            For urgent issues or questions, you can reach our support team directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-800-TRAVEL-1" 
              className="inline-flex items-center px-6 py-3 border border-primary-300 text-primary-700 rounded-md hover:bg-primary-50 transition-colors"
            >
              📞 Call: +1-800-TRAVEL-1
            </a>
            <a 
              href="mailto:support@travelapp.com" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              ✉️ Email: support@travelapp.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}