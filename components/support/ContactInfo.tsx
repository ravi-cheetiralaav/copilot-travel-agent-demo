import { ContactInfo as ContactInfoType } from '@/lib/types';

interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

export function ContactInfo({ contactInfo }: ContactInfoProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
      
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Email</p>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        {contactInfo.phone && (
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Phone</p>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        )}

        {/* Business Hours */}
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Business Hours</p>
            <p className="text-sm text-gray-600">{contactInfo.businessHours}</p>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Response Time</p>
            <p className="text-sm text-gray-600">{contactInfo.responseTime}</p>
          </div>
        </div>

        {/* Alternative Contact */}
        {contactInfo.alternativeContact && (
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Additional Support</p>
              <p className="text-sm text-gray-600">{contactInfo.alternativeContact}</p>
            </div>
          </div>
        )}
      </div>

      {/* Emergency Notice */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-blue-900">Travel Emergency</p>
            <p className="text-sm text-blue-700">
              For travel emergencies during your trip, please contact our 24/7 emergency hotline at{' '}
              <a 
                href="tel:+15559998888"
                className="font-semibold hover:underline"
              >
                +1 (555) 999-8888
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}