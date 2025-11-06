import { FAQComponent } from '@/components/support/FAQComponent';
import { faqData } from '@/lib/data/faqData';
import Link from 'next/link';

export default function FAQPage() {
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
              <span className="text-gray-900">FAQ</span>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find quick answers to the most common questions about our travel services, booking process, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQComponent faqs={faqData} />
        </div>
      </section>
    </div>
  );
}