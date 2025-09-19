import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/lib/data/supportData';

export default function ContactInfoPage() {
  const { phone, email, address, businessHours, socialMedia } = contactInfo;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Contact Information
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us through any of the following methods. We&apos;re here to help make your travel experience amazing.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone Contact */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Phone Support
                </h3>
                <p className="text-gray-600 mb-3">
                  Speak directly with our travel experts for immediate assistance.
                </p>
                <p className="text-lg font-medium text-primary-600 mb-2">
                  {phone}
                </p>
                <Button size="sm" variant="outline">
                  <a href={`tel:${phone.replace(/\D/g, '')}`}>Call Now</a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Email Contact */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-secondary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-3">
                  Send us a detailed message and we&apos;ll respond within 24 hours.
                </p>
                <p className="text-lg font-medium text-secondary-600 mb-2">
                  {email}
                </p>
                <Button size="sm" variant="outline">
                  <a href={`mailto:${email}`}>Send Email</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Office Address */}
        <Card className="p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Office Location
              </h3>
              <p className="text-gray-600 mb-3">
                Visit us at our headquarters for in-person assistance.
              </p>
              <div className="text-gray-700 space-y-1">
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zipCode}</p>
                <p>{address.country}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Business Hours */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Business Hours
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(businessHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-900">{day}</span>
                <span className="text-gray-600">{hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> During holidays and weekends, response times may be longer. 
              For urgent issues, please call our phone support line.
            </p>
          </div>
        </Card>

        {/* Social Media */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Connect With Us
          </h3>
          <p className="text-gray-600 mb-4">
            Follow us on social media for travel tips, destination highlights, and company updates.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialMedia.facebook && (
              <Button variant="outline" size="sm">
                <a 
                  href={socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>📘</span>
                  <span>Facebook</span>
                </a>
              </Button>
            )}
            {socialMedia.twitter && (
              <Button variant="outline" size="sm">
                <a 
                  href={socialMedia.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
              </Button>
            )}
            {socialMedia.instagram && (
              <Button variant="outline" size="sm">
                <a 
                  href={socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>📷</span>
                  <span>Instagram</span>
                </a>
              </Button>
            )}
            {socialMedia.linkedin && (
              <Button variant="outline" size="sm">
                <a 
                  href={socialMedia.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
              </Button>
            )}
          </div>
        </Card>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Emergency Contact
          </h3>
          <p className="text-red-700 mb-3">
            If you&apos;re currently traveling and need immediate emergency assistance, please contact:
          </p>
          <div className="text-red-800 font-medium">
            <p>🚨 Emergency Hotline: +1 (555) 911-HELP</p>
            <p>Available 24/7 for travelers in distress</p>
          </div>
        </div>
      </div>
    </div>
  );
}