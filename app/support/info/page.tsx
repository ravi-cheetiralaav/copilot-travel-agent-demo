import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { mockContactInfo } from '@/lib/data/mockData';

export default function ContactInfoPage() {
  const { phone, email, address, hours, socialMedia } = mockContactInfo;

  const formatHours = (day: string, timeString: string) => {
    return (
      <div key={day} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
        <span className="font-medium capitalize">{day}</span>
        <span className="text-gray-600">{timeString}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/support" className="hover:text-primary-600">
                  Support
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-medium">Contact Information</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Information
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch with us through any of these channels. We&apos;re here to help with all your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            {/* Phone */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone Support</h3>
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                  className="text-lg font-medium text-primary-600 hover:text-primary-700"
                >
                  {phone}
                </a>
                <p className="text-gray-600 mt-2">
                  Call us for immediate assistance. Available during business hours for urgent matters.
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Support</h3>
                </div>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${email}`}
                  className="text-lg font-medium text-primary-600 hover:text-primary-700"
                >
                  {email}
                </a>
                <p className="text-gray-600 mt-2">
                  Send us an email for detailed inquiries. We respond within 2-4 hours during business hours.
                </p>
              </CardContent>
            </Card>

            {/* Office Address */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Office Address</h3>
                </div>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-gray-900">
                  <div>{address.street}</div>
                  <div>{address.city}, {address.state} {address.zip}</div>
                  <div>{address.country}</div>
                </address>
                <p className="text-gray-600 mt-2">
                  Visit us in person for personalized travel planning assistance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours & Social Media */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-0">
                  {Object.entries(hours).map(([day, time]) => formatHours(day, time))}
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  * Hours may vary on holidays. Please call ahead to confirm availability.
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4h10M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Follow Us</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stay connected with us on social media for travel tips, deals, and updates.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.facebook && (
                    <a
                      href={socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                  )}
                  
                  {socialMedia.twitter && (
                    <a
                      href={socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </a>
                  )}
                  
                  {socialMedia.instagram && (
                    <a
                      href={socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-pink-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.247 7.052 7.757 8.349 7.757s2.448.49 3.324 1.297c.806.876 1.297 2.027 1.297 3.324s-.49 2.448-1.297 3.324c-.876.806-2.027 1.297-3.324 1.297zm7.598 0c-1.297 0-2.448-.49-3.324-1.297-.806-.876-1.297-2.027-1.297-3.324s.49-2.448 1.297-3.324C13.599 8.247 14.75 7.757 16.047 7.757s2.448.49 3.324 1.297c.806.876 1.297 2.027 1.297 3.324s-.49 2.448-1.297 3.324c-.876.806-2.027 1.297-3.324 1.297z"/>
                      </svg>
                      Instagram
                    </a>
                  )}
                  
                  {socialMedia.linkedin && (
                    <a
                      href={socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-blue-700 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to get in touch?
            </h2>
            <p className="text-gray-600">
              Choose the best way to reach us for your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/support/contact"
              className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a Message
            </Link>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <Link
              href="/support"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}