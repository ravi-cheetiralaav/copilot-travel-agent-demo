import { FAQ } from '@/components/support/FAQ';
import { EnquiryForm } from '@/components/support/EnquiryForm';
import { ContactInfo } from '@/components/support/ContactInfo';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Support Center</h1>
          <p className="text-gray-600">Get help and support for your travel needs</p>
        </div>

        <div className="space-y-12">
          {/* FAQ Section */}
          <section id="faq">
            <FAQ />
          </section>

          {/* Enquiry Form Section */}
          <section id="enquiry">
            <EnquiryForm />
          </section>

          {/* Contact Information Section */}
          <section id="contact">
            <ContactInfo />
          </section>
        </div>
      </div>
    </div>
  );
}