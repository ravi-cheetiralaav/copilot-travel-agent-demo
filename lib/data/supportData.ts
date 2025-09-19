import type { FAQ, ContactInfo } from '@/lib/types';

export const mockFAQs: FAQ[] = [
  // Booking Category
  {
    id: 'faq-1',
    question: 'How do I book a trip?',
    answer: 'To book a trip, browse our available trips on the Search Trips page, select your desired trip, choose your travel dates, and complete the booking process by providing your details and payment information.',
    category: 'booking',
    isPopular: true,
  },
  {
    id: 'faq-2',
    question: 'Can I modify or cancel my booking?',
    answer: 'Yes, you can modify or cancel your booking up to 48 hours before your travel date. Visit the My Bookings page to manage your reservations. Cancellation fees may apply depending on the trip type and timing.',
    category: 'booking',
    isPopular: true,
  },
  {
    id: 'faq-3',
    question: 'What happens if I need to cancel due to an emergency?',
    answer: 'We understand that emergencies happen. Please contact our support team immediately if you need to cancel due to a medical emergency or other unforeseen circumstances. We will work with you to find the best solution.',
    category: 'booking',
  },
  {
    id: 'faq-4',
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-4 weeks in advance for domestic trips and 6-8 weeks for international trips to ensure availability and better rates.',
    category: 'booking',
  },

  // Payment Category
  {
    id: 'faq-5',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely using industry-standard encryption.',
    category: 'payment',
    isPopular: true,
  },
  {
    id: 'faq-6',
    question: 'Is my payment information secure?',
    answer: 'Absolutely! We use SSL encryption and comply with PCI DSS standards to ensure your payment information is completely secure. We never store your full credit card details on our servers.',
    category: 'payment',
  },
  {
    id: 'faq-7',
    question: 'Do you offer payment plans?',
    answer: 'Yes, for trips over $1000, we offer flexible payment plans. You can pay 50% at booking and the remainder 30 days before your travel date.',
    category: 'payment',
  },

  // Travel Category
  {
    id: 'faq-8',
    question: 'What documents do I need for international travel?',
    answer: 'For international travel, you typically need a valid passport (valid for at least 6 months beyond your travel date) and any required visas. We recommend checking with the embassy or consulate of your destination country for specific requirements.',
    category: 'travel',
    isPopular: true,
  },
  {
    id: 'faq-9',
    question: 'What should I pack for my trip?',
    answer: 'Packing recommendations vary by destination and season. We provide detailed packing lists with your booking confirmation. Generally, pack comfortable walking shoes, weather-appropriate clothing, and any necessary medications.',
    category: 'travel',
  },
  {
    id: 'faq-10',
    question: 'Do you provide travel insurance?',
    answer: 'We highly recommend travel insurance and can help you find the right coverage. Travel insurance can protect you against trip cancellations, medical emergencies, lost luggage, and other unforeseen events.',
    category: 'travel',
  },
  {
    id: 'faq-11',
    question: 'What happens if my flight is delayed or cancelled?',
    answer: 'If your flight is delayed or cancelled, please contact us immediately. We will work with you to adjust your itinerary and help minimize any disruption to your trip. Additional costs may apply in some cases.',
    category: 'travel',
  },

  // Account Category
  {
    id: 'faq-12',
    question: 'How do I create an account?',
    answer: 'You can create an account by clicking the Sign Up button in the header. Fill in your details, verify your email address, and you\'re ready to start booking amazing trips!',
    category: 'account',
  },
  {
    id: 'faq-13',
    question: 'How does the loyalty points system work?',
    answer: 'You earn points for every booking based on the trip value. Points can be redeemed for discounts on future trips. Bronze members earn 1 point per dollar, Silver earns 1.5 points, Gold earns 2 points, and Platinum earns 3 points per dollar spent.',
    category: 'account',
    isPopular: true,
  },
  {
    id: 'faq-14',
    question: 'How do I reset my password?',
    answer: 'Click on "Forgot Password" on the sign-in page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
    category: 'account',
  },

  // General Category
  {
    id: 'faq-15',
    question: 'How do I contact customer support?',
    answer: 'You can contact our support team via email at support@travelapp.com, call us at +1-800-TRAVEL-1, or use the contact form on our support page. Our support hours are Monday-Friday 8 AM to 8 PM EST.',
    category: 'general',
    isPopular: true,
  },
  {
    id: 'faq-16',
    question: 'Do you offer group discounts?',
    answer: 'Yes! We offer special rates for groups of 8 or more people. Contact our support team with your group details and preferred destinations for a custom quote.',
    category: 'general',
  },
  {
    id: 'faq-17',
    question: 'Are your trips suitable for people with disabilities?',
    answer: 'We are committed to providing accessible travel experiences. Many of our trips can be adapted for travelers with disabilities. Please contact us to discuss your specific needs and we\'ll help find suitable options.',
    category: 'general',
  },
];

export const mockContactInfo: ContactInfo = {
  email: 'support@travelapp.com',
  phone: '+1-800-TRAVEL-1',
  address: {
    street: '123 Adventure Avenue',
    city: 'Travel City',
    state: 'TX',
    country: 'United States',
    zipCode: '75001',
  },
  officeHours: {
    weekdays: 'Monday - Friday: 8:00 AM - 8:00 PM EST',
    weekends: 'Saturday - Sunday: 10:00 AM - 6:00 PM EST',
    timezone: 'Eastern Standard Time (EST)',
  },
  socialMedia: {
    facebook: 'https://facebook.com/travelapp',
    twitter: 'https://twitter.com/travelapp',
    instagram: 'https://instagram.com/travelapp',
    linkedin: 'https://linkedin.com/company/travelapp',
  },
};