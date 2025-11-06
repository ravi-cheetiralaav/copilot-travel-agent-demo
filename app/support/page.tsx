import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to your questions, get in touch with our support team, or access our resources
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* FAQ Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Frequently Asked Questions
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center mb-6">
                Browse our most common questions and find quick answers to help you get started.
              </p>
              <Link href="/support/faq" className="block">
                <Button className="w-full">
                  View FAQ
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Contact Us
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center mb-6">
                Have a specific question or need personalized help? Send us a message directly.
              </p>
              <Link href="/support/contact" className="block">
                <Button className="w-full" variant="secondary">
                  Contact Form
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                Contact Information
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center mb-6">
                Find our phone numbers, office hours, and other ways to reach us.
              </p>
              <Link href="/support/info" className="block">
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Help Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Need immediate assistance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">✓</span>
              </div>
              <h4 className="font-medium mb-1">24/7 Support</h4>
              <p className="text-sm text-gray-600">
                Our support team is available around the clock
              </p>
            </div>
            <div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">⚡</span>
              </div>
              <h4 className="font-medium mb-1">Quick Response</h4>
              <p className="text-sm text-gray-600">
                Average response time under 2 hours
              </p>
            </div>
            <div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-orange-600 font-bold">🎯</span>
              </div>
              <h4 className="font-medium mb-1">Expert Help</h4>
              <p className="text-sm text-gray-600">
                Knowledgeable travel specialists ready to assist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}