import { FAQ } from '@/lib/types';

export const faqData: FAQ[] = [
  // Booking Category
  {
    id: '1',
    question: 'How do I book a trip?',
    answer: 'To book a trip, browse our available trips on the Search Trips page, select your desired trip, choose your travel dates, and follow the booking process. You\'ll receive a confirmation email once your booking is complete.',
    category: 'booking',
    tags: ['booking', 'reservation', 'trips']
  },
  {
    id: '2',
    question: 'Can I cancel or modify my booking?',
    answer: 'Yes, you can cancel or modify your booking through your My Bookings page. Cancellation policies vary by trip, so please review the specific terms for your reservation. Most trips allow free cancellation up to 24 hours before the travel date.',
    category: 'booking',
    tags: ['cancellation', 'modification', 'policy']
  },
  {
    id: '3',
    question: 'What happens if my trip is cancelled?',
    answer: 'If we need to cancel your trip due to unforeseen circumstances, you will receive a full refund or the option to reschedule to another date. We\'ll notify you as soon as possible and work with you to find the best solution.',
    category: 'booking',
    tags: ['cancellation', 'refund', 'emergency']
  },

  // Payment Category
  {
    id: '4',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Payment is processed securely through our encrypted payment system.',
    category: 'payment',
    tags: ['payment', 'credit card', 'paypal', 'security']
  },
  {
    id: '5',
    question: 'When will I be charged for my booking?',
    answer: 'Your credit card will be charged immediately upon confirmation of your booking. For certain trips, we may offer a deposit option where you pay a portion upfront and the remainder closer to your travel date.',
    category: 'payment',
    tags: ['payment', 'charge', 'deposit', 'timing']
  },
  {
    id: '6',
    question: 'How do I get a refund?',
    answer: 'Refunds are processed according to the cancellation policy of your specific trip. Eligible refunds are typically processed within 5-10 business days back to your original payment method.',
    category: 'payment',
    tags: ['refund', 'cancellation', 'processing time']
  },

  // Travel Category
  {
    id: '7',
    question: 'What is included in my trip package?',
    answer: 'Each trip package includes different amenities. Check the trip details page for specific inclusions such as accommodation, meals, transportation, and activities. All inclusions are clearly listed before booking.',
    category: 'travel',
    tags: ['package', 'inclusions', 'amenities', 'details']
  },
  {
    id: '8',
    question: 'Do I need travel insurance?',
    answer: 'While travel insurance is not mandatory, we highly recommend it to protect your investment and cover unexpected situations. You can purchase travel insurance during the booking process or separately.',
    category: 'travel',
    tags: ['insurance', 'protection', 'recommendation']
  },
  {
    id: '9',
    question: 'What should I pack for my trip?',
    answer: 'Packing recommendations vary by destination and season. You\'ll receive a detailed packing list in your confirmation email and can find destination-specific guides in our Travel Guides section.',
    category: 'travel',
    tags: ['packing', 'preparation', 'guides', 'destination']
  },

  // Account Category
  {
    id: '10',
    question: 'How do I create an account?',
    answer: 'Click the "Sign Up" button in the top right corner of any page. You\'ll need to provide your name, email address, and create a secure password. Account creation is free and gives you access to booking management and loyalty points.',
    category: 'account',
    tags: ['signup', 'registration', 'account creation']
  },
  {
    id: '11',
    question: 'How do loyalty points work?',
    answer: 'Earn points with every booking and use them for discounts on future trips. You earn 1 point for every $1 spent. Points can be redeemed at checkout for trip discounts.',
    category: 'account',
    tags: ['loyalty', 'points', 'rewards', 'discounts']
  },
  {
    id: '12',
    question: 'I forgot my password. How can I reset it?',
    answer: 'Click "Sign In" and then "Forgot Password" on the login page. Enter your email address and we\'ll send you a secure link to reset your password.',
    category: 'account',
    tags: ['password', 'reset', 'security', 'login']
  },

  // General Category
  {
    id: '13',
    question: 'How can I contact customer support?',
    answer: 'You can contact our customer support team through the Contact Us form, email us directly, or call our support hotline. Our contact information is available on the Contact Information page.',
    category: 'general',
    tags: ['support', 'contact', 'help', 'customer service']
  },
  {
    id: '14',
    question: 'Are your trips suitable for families with children?',
    answer: 'Many of our trips are family-friendly! Look for trips with the "Family" category tag. These trips include child-appropriate activities and accommodations. Age restrictions, if any, are clearly stated in trip descriptions.',
    category: 'general',
    tags: ['family', 'children', 'age restrictions', 'activities']
  },
  {
    id: '15',
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer group discounts for bookings of 6 or more people. Contact our support team with your group size and trip preferences for a custom quote.',
    category: 'general',
    tags: ['group', 'discount', 'bulk booking', 'custom quote']
  }
];