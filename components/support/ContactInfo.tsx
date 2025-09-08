export function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "24/7 customer support hotline",
      available: "Available 24/7"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Support",
      details: "support@travelapp.com",
      description: "Send us an email for detailed inquiries",
      available: "Response within 24 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      details: "Available on website",
      description: "Chat with our support team in real-time",
      available: "Mon-Fri 9 AM - 6 PM EST"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office Address",
      details: "123 Travel Street, Suite 456",
      description: "New York, NY 10001, USA",
      available: "Visits by appointment only"
    }
  ];

  const emergencyContact = {
    title: "Emergency Travel Assistance",
    phone: "+1 (555) 911-HELP",
    description: "For urgent travel-related emergencies during your trip"
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          We&apos;re here to help! Reach out to us through any of the following channels and our friendly support team will assist you.
        </p>
      </div>

      {/* Main Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactDetails.map((contact, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                  {contact.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h3>
                <p className="text-primary-600 font-medium mb-1">{contact.details}</p>
                <p className="text-gray-600 text-sm mb-2">{contact.description}</p>
                <p className="text-xs text-gray-500">{contact.available}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-900 mb-1">{emergencyContact.title}</h3>
            <p className="text-red-700 font-medium mb-1">{emergencyContact.phone}</p>
            <p className="text-red-600 text-sm">{emergencyContact.description}</p>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-900">Customer Support</p>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Emergency Assistance</p>
            <p className="text-gray-600">Available 24/7</p>
            <p className="text-gray-600">For travelers in urgent situations</p>
          </div>
        </div>
      </div>
    </div>
  );
}