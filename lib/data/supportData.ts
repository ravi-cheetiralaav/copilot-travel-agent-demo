import { FAQ, ContactInfo, FAQCategory } from '@/lib/types';

export const faqs: FAQ[] = [
  // General Questions
  {
    id: '1',
    question: 'How do I create an account?',
    answer: 'To create an account, click on the "Sign Up" button in the top right corner of the page. Fill in your personal information, including your name, email, and password. You\'ll receive a confirmation email to verify your account.',
    category: 'general',
    isPopular: true,
  },
  {
    id: '2',
    question: 'What destinations do you offer?',
    answer: 'We offer trips to over 100 destinations worldwide, including popular locations in Europe, Asia, Africa, North America, South America, and Oceania. You can browse all available destinations on our Search Trips page.',
    category: 'general',
    isPopular: true,
  },
  {
    id: '3',
    question: 'How does the points system work?',
    answer: 'You earn points for every trip you book (10% of the trip value). Points can be redeemed for discounts on future bookings. Bronze members get 1x points, Silver gets 1.2x, Gold gets 1.5x, and Platinum gets 2x points.',
    category: 'general',
    isPopular: false,
  },

  // Booking Questions
  {
    id: '4',
    question: 'How do I book a trip?',
    answer: 'Browse our available trips, select your preferred destination and dates, choose the number of guests, and click "Book Now". You\'ll be guided through the payment process and receive a confirmation email.',
    category: 'bookings',
    isPopular: true,
  },
  {
    id: '5',
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can cancel or modify your booking up to 48 hours before your travel date. Go to "My Bookings" to manage your reservations. Cancellation fees may apply depending on the timing.',
    category: 'bookings',
    isPopular: true,
  },
  {
    id: '6',
    question: 'What happens if I need to change my travel dates?',
    answer: 'You can change your travel dates subject to availability. Additional charges may apply if the new dates have different pricing. Contact our support team for assistance with date changes.',
    category: 'bookings',
    isPopular: false,
  },
  {
    id: '7',
    question: 'Can I add special requests to my booking?',
    answer: 'Yes, during the booking process, you can add special requests such as dietary requirements, accessibility needs, or room preferences. We\'ll do our best to accommodate your requests.',
    category: 'bookings',
    isPopular: false,
  },

  // Payment Questions
  {
    id: '8',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment gateway.',
    category: 'payments',
    isPopular: true,
  },
  {
    id: '9',
    question: 'When will I be charged for my booking?',
    answer: 'Your payment is processed immediately upon booking confirmation. For some premium trips, we may require a deposit upfront with the remaining balance due closer to your travel date.',
    category: 'payments',
    isPopular: false,
  },
  {
    id: '10',
    question: 'Can I get a refund if I cancel my trip?',
    answer: 'Refund policies vary by trip type and cancellation timing. Generally, cancellations made more than 7 days in advance receive a full refund, while later cancellations may incur fees. Check the specific terms for your booking.',
    category: 'payments',
    isPopular: false,
  },

  // Travel Questions
  {
    id: '11',
    question: 'What should I pack for my trip?',
    answer: 'Packing recommendations vary by destination and season. Each trip includes a detailed packing list in your booking confirmation. Generally, pack comfortable walking shoes, weather-appropriate clothing, and any personal medications.',
    category: 'travel',
    isPopular: false,
  },
  {
    id: '12',
    question: 'Do I need travel insurance?',
    answer: 'While travel insurance is not required, we highly recommend it to protect against unexpected events like medical emergencies, trip cancellations, or lost luggage. We can help you find suitable coverage.',
    category: 'travel',
    isPopular: true,
  },
  {
    id: '13',
    question: 'What documents do I need for international travel?',
    answer: 'For international trips, you\'ll need a valid passport and may require a visa depending on your destination. Check visa requirements well in advance as processing times vary. We provide detailed documentation requirements for each trip.',
    category: 'travel',
    isPopular: true,
  },

  // Account Questions
  {
    id: '14',
    question: 'How do I reset my password?',
    answer: 'Click "Sign In" then "Forgot Password" and enter your email address. You\'ll receive a password reset link via email. Follow the link to create a new password.',
    category: 'account',
    isPopular: false,
  },
  {
    id: '15',
    question: 'How can I update my profile information?',
    answer: 'Log in to your account and go to your profile settings. You can update your personal information, contact details, and preferences. Make sure to save your changes.',
    category: 'account',
    isPopular: false,
  },
  {
    id: '16',
    question: 'How do I check my membership level?',
    answer: 'Your current membership level (Bronze, Silver, Gold, or Platinum) is displayed in your account dashboard. Levels are based on your total bookings and points earned.',
    category: 'account',
    isPopular: false,
  },
];

export const contactInfo: ContactInfo = {
  phone: '+1 (555) 123-TRAVEL',
  email: 'support@travelapp.com',
  address: {
    street: '123 Adventure Avenue',
    city: 'San Francisco',
    state: 'California',
    zipCode: '94105',
    country: 'United States',
  },
  businessHours: {
    'Monday - Friday': '9:00 AM - 8:00 PM PST',
    'Saturday': '10:00 AM - 6:00 PM PST', 
    'Sunday': '10:00 AM - 4:00 PM PST',
    'Holidays': 'Closed',
  },
  socialMedia: {
    facebook: 'https://facebook.com/travelapp',
    twitter: 'https://twitter.com/travelapp',
    instagram: 'https://instagram.com/travelapp',
    linkedin: 'https://linkedin.com/company/travelapp',
  },
};

export const faqCategories: { value: FAQCategory; label: string }[] = [
  { value: 'general', label: 'General' },
  { value: 'bookings', label: 'Bookings' },
  { value: 'payments', label: 'Payments' },
  { value: 'travel', label: 'Travel' },
  { value: 'account', label: 'Account' },
];