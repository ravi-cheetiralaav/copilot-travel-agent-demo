import { FAQ, ContactInfo } from '@/lib/types';

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I book a trip?',
    answer: 'To book a trip, browse our available trips on the Search Trips page, select your desired trip, choose your travel dates and number of guests, then proceed to checkout. You\'ll need to provide your contact information and payment details to complete the booking.',
    category: 'booking',
    tags: ['booking', 'reservation', 'how-to'],
    helpful: 45,
    orderIndex: 1
  },
  {
    id: '2',
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can cancel or modify your booking depending on the trip\'s cancellation policy. Most bookings can be cancelled up to 48 hours before departure for a full refund. Premium and luxury trips may have different cancellation terms. Check your booking confirmation email for specific details.',
    category: 'booking',
    tags: ['cancellation', 'modification', 'refund'],
    helpful: 38,
    orderIndex: 2
  },
  {
    id: '3',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.',
    category: 'payment',
    tags: ['payment', 'credit-card', 'paypal'],
    helpful: 42,
    orderIndex: 3
  },
  {
    id: '4',
    question: 'How do I earn and redeem loyalty points?',
    answer: 'You earn 1 point for every $1 spent on bookings. Points can be redeemed for discounts on future trips: 100 points = $10 discount. Higher membership tiers (Silver, Gold, Platinum) earn bonus points and receive additional benefits.',
    category: 'account',
    tags: ['loyalty', 'points', 'rewards'],
    helpful: 33,
    orderIndex: 4
  },
  {
    id: '5',
    question: 'What should I pack for my trip?',
    answer: 'Packing recommendations vary by destination and activity type. Check your trip details for specific packing lists and weather information. Generally, bring comfortable walking shoes, weather-appropriate clothing, necessary medications, travel documents, and any specialized gear mentioned in your trip description.',
    category: 'travel',
    tags: ['packing', 'preparation', 'gear'],
    helpful: 29,
    orderIndex: 5
  },
  {
    id: '6',
    question: 'Do I need travel insurance?',
    answer: 'While not required, we highly recommend travel insurance to protect your investment. Travel insurance can cover trip cancellations, medical emergencies, lost luggage, and other unexpected events. We can recommend trusted insurance providers during the booking process.',
    category: 'travel',
    tags: ['insurance', 'protection', 'medical'],
    helpful: 31,
    orderIndex: 6
  },
  {
    id: '7',
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the sign-in page and click "Forgot Password". Enter your email address and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
    category: 'account',
    tags: ['password', 'reset', 'login'],
    helpful: 27,
    orderIndex: 7
  },
  {
    id: '8',
    question: 'What happens if my flight is delayed or cancelled?',
    answer: 'If your flight is delayed or cancelled, please contact us immediately. We\'ll work with you to adjust your trip schedule and help coordinate alternative arrangements. Some trip components may be modified based on availability.',
    category: 'travel',
    tags: ['flight', 'delay', 'cancellation'],
    helpful: 35,
    orderIndex: 8
  },
  {
    id: '9',
    question: 'Can I book for someone else?',
    answer: 'Yes, you can book trips for other people. During checkout, you can specify different traveler details from the account holder. Make sure all traveler information is accurate as it appears on their travel documents.',
    category: 'booking',
    tags: ['booking', 'guest', 'others'],
    helpful: 24,
    orderIndex: 9
  },
  {
    id: '10',
    question: 'How do I contact customer support?',
    answer: 'You can contact us through multiple channels: submit a message through our contact form, call us at (555) 123-4567, email us at support@travelapp.com, or live chat during business hours. We aim to respond to all inquiries within 24 hours.',
    category: 'general',
    tags: ['support', 'contact', 'help'],
    helpful: 41,
    orderIndex: 10
  },
  {
    id: '11',
    question: 'Are meals included in the trip price?',
    answer: 'Meal inclusions vary by trip. Check your specific trip details for what\'s included. Generally, breakfast is included in most accommodations, while lunch and dinner may be included for guided tours or specified in the itinerary.',
    category: 'travel',
    tags: ['meals', 'food', 'included'],
    helpful: 28,
    orderIndex: 11
  },
  {
    id: '12',
    question: 'What if I have dietary restrictions or allergies?',
    answer: 'Please inform us of any dietary restrictions, food allergies, or special meal requirements during booking or by contacting our support team. We\'ll coordinate with local partners to accommodate your needs whenever possible.',
    category: 'travel',
    tags: ['dietary', 'allergies', 'special-needs'],
    helpful: 26,
    orderIndex: 12
  }
];

export const mockContactInfo: ContactInfo[] = [
  {
    id: '1',
    type: 'phone',
    label: 'Customer Support',
    value: '(555) 123-4567',
    description: 'Available 24/7 for urgent matters',
    isPrimary: true,
    orderIndex: 1
  },
  {
    id: '2',
    type: 'phone',
    label: 'Booking Assistance',
    value: '(555) 123-4568',
    description: 'Monday - Friday, 8 AM - 8 PM EST',
    isPrimary: false,
    orderIndex: 2
  },
  {
    id: '3',
    type: 'email',
    label: 'General Inquiries',
    value: 'support@travelapp.com',
    description: 'Response within 24 hours',
    isPrimary: true,
    orderIndex: 3
  },
  {
    id: '4',
    type: 'email',
    label: 'Booking Support',
    value: 'bookings@travelapp.com',
    description: 'For reservation-related questions',
    isPrimary: false,
    orderIndex: 4
  },
  {
    id: '5',
    type: 'address',
    label: 'Headquarters',
    value: '123 Travel Plaza, Suite 400\nNew York, NY 10001\nUnited States',
    description: 'Office visits by appointment only',
    isPrimary: true,
    orderIndex: 5
  },
  {
    id: '6',
    type: 'hours',
    label: 'Customer Support Hours',
    value: 'Monday - Friday: 6 AM - 10 PM EST\nSaturday - Sunday: 8 AM - 6 PM EST',
    description: 'Emergency support available 24/7',
    isPrimary: true,
    orderIndex: 6
  },
  {
    id: '7',
    type: 'hours',
    label: 'Live Chat',
    value: 'Monday - Friday: 8 AM - 8 PM EST\nSaturday: 9 AM - 5 PM EST',
    description: 'Instant assistance for quick questions',
    isPrimary: false,
    orderIndex: 7
  }
];