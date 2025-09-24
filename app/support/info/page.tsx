import { mockContactInfo } from '@/lib/data/mockData';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactInfoPage() {
  const info = mockContactInfo;

  const formatHours = (hours: string) => {
    return hours;
  };

  const getDayStatus = (dayHours: string) => {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Simple status check - in a real app, you'd parse the actual hours
    if (dayHours.includes('Closed')) {
      return { status: 'closed', text: 'Closed' };
    }
    
    // Mock status based on typical business hours
    if (currentHour >= 9 && currentHour < 20) {
      return { status: 'open', text: 'Open Now' };
    } else {
      return { status: 'closed', text: 'Currently Closed' };
    }
  };

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = info.hours[today as keyof typeof info.hours];
  const todayStatus = getDayStatus(todayHours);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with our support team through multiple channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Contact Details</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600">📞</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">{info.phone}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`w-2 h-2 rounded-full ${
                      todayStatus.status === 'open' ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className={`text-sm ${
                      todayStatus.status === 'open' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {todayStatus.text}
                    </span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-secondary-600">📧</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">{info.email}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    We respond within 2 hours during business hours
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Office Address</h3>
                  <div className="text-gray-600">
                    <p>{info.address.street}</p>
                    <p>{info.address.city}, {info.address.state} {info.address.zipCode}</p>
                    <p>{info.address.country}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Business Hours</h2>
              <p className="text-gray-600">All times in Pacific Standard Time (PST)</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(info.hours).map(([day, hours]) => {
                  const isToday = day === today;
                  const dayStatus = getDayStatus(hours);
                  
                  return (
                    <div
                      key={day}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        isToday ? 'bg-primary-50 border border-primary-200' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium capitalize ${
                          isToday ? 'text-primary-700' : 'text-gray-900'
                        }`}>
                          {day}
                        </span>
                        {isToday && (
                          <span className="text-xs bg-primary-200 text-primary-700 px-2 py-1 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className={`${isToday ? 'text-primary-700' : 'text-gray-600'}`}>
                          {formatHours(hours)}
                        </div>
                        {isToday && (
                          <div className={`text-xs ${
                            dayStatus.status === 'open' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {dayStatus.text}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Media */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Follow Us</h2>
              <p className="text-gray-600">Stay connected on social media</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {info.socialMedia.facebook && (
                  <a
                    href={info.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">📘</span>
                    <span className="font-medium text-blue-700">Facebook</span>
                  </a>
                )}
                
                {info.socialMedia.twitter && (
                  <a
                    href={info.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">🐦</span>
                    <span className="font-medium text-sky-700">Twitter</span>
                  </a>
                )}
                
                {info.socialMedia.instagram && (
                  <a
                    href={info.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">📷</span>
                    <span className="font-medium text-pink-700">Instagram</span>
                  </a>
                )}
                
                {info.socialMedia.linkedin && (
                  <a
                    href={info.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <span className="text-2xl">💼</span>
                    <span className="font-medium text-blue-700">LinkedIn</span>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-semibold">Quick Actions</h2>
              <p className="text-gray-600">Get help right away</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" size="lg">
                <span className="mr-3">💬</span>
                Start Live Chat
              </Button>
              
              <Button variant="outline" className="w-full justify-start" size="lg">
                <span className="mr-3">📝</span>
                Submit Support Ticket
              </Button>
              
              <Button variant="outline" className="w-full justify-start" size="lg">
                <span className="mr-3">❓</span>
                Browse FAQ
              </Button>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-600 text-xl">⚡</span>
                  <div>
                    <h4 className="font-medium text-yellow-800">Emergency Support</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      For urgent travel emergencies, call our 24/7 hotline at {info.phone}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}