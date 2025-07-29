export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Customer Service */}
        <div className="text-center md:text-left">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Service</h3>
          <p className="text-gray-600 mb-2">Available 24/7 for your support needs</p>
          <p className="text-primary-600 font-medium">+1 (555) 123-4567</p>
          <p className="text-gray-500 text-sm">International: +1 (555) 123-4568</p>
        </div>

        {/* Email Support */}
        <div className="text-center md:text-left">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
          <p className="text-gray-600 mb-2">We&apos;ll respond within 24 hours</p>
          <p className="text-primary-600 font-medium">support@travelapp.com</p>
          <p className="text-gray-500 text-sm">bookings@travelapp.com</p>
        </div>

        {/* Live Chat */}
        <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-2">Monday - Friday, 9am - 6pm EST</p>
          <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
            Start Live Chat
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Office Address */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Office</h4>
            <div className="text-gray-600 space-y-1">
              <p>TravelApp Headquarters</p>
              <p>123 Adventure Boulevard</p>
              <p>Travel City, TC 12345</p>
              <p>United States</p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Hours</h4>
            <div className="text-gray-600 space-y-1">
              <p><span className="font-medium">Customer Service:</span> 24/7</p>
              <p><span className="font-medium">Live Chat:</span> Mon-Fri, 9am-6pm EST</p>
              <p><span className="font-medium">Office:</span> Mon-Fri, 8am-7pm EST</p>
              <p><span className="font-medium">Weekend:</span> Sat-Sun, 10am-4pm EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h4>
        <p className="text-red-700 mb-2">
          If you&apos;re currently traveling and need immediate assistance:
        </p>
        <p className="text-red-800 font-bold text-lg">+1 (555) 911-HELP</p>
        <p className="text-red-600 text-sm">Available 24/7 for travelers in distress</p>
      </div>
    </div>
  );
}