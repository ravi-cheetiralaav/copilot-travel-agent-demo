import { Trip, TravelGuide, Booking, User, FAQ } from '../types';

export const mockTrips: Trip[] = [
  {
    id: '1',
    title: 'Tokyo Adventure',
    destination: 'Tokyo, Japan',
    description: 'Experience the vibrant culture, amazing food, and modern attractions of Tokyo.',
    price: 1299,
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    rating: 4.8,
    category: 'cultural',
    availableDates: ['2024-03-15', '2024-04-20', '2024-05-18'],
    included: ['Flights', 'Hotel', 'City Tour', 'Traditional Dinner']
  },
  {
    id: '2',
    title: 'Bali Beach Retreat',
    destination: 'Bali, Indonesia',
    description: 'Relax on pristine beaches and immerse yourself in Balinese culture.',
    price: 899,
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    rating: 4.6,
    category: 'relaxation',
    availableDates: ['2024-02-10', '2024-03-25', '2024-04-15'],
    included: ['Flights', 'Resort Stay', 'Spa Treatment', 'Beach Activities']
  },
  {
    id: '3',
    title: 'Swiss Alps Adventure',
    destination: 'Swiss Alps, Switzerland',
    description: 'Hiking, skiing, and breathtaking mountain views await in the Swiss Alps.',
    price: 1599,
    duration: 8,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    category: 'adventure',
    availableDates: ['2024-01-20', '2024-02-28', '2024-12-15'],
    included: ['Flights', 'Mountain Lodge', 'Ski Pass', 'Guided Tours']
  },
  {
    id: '4',
    title: 'Paris Family Fun',
    destination: 'Paris, France',
    description: 'Perfect family vacation with visits to iconic landmarks and family-friendly activities.',
    price: 1199,
    duration: 6,
    imageUrl: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800',
    rating: 4.7,
    category: 'family',
    availableDates: ['2024-04-10', '2024-05-22', '2024-06-30'],
    included: ['Flights', 'Family Hotel', 'Museum Passes', 'Seine River Cruise']
  },
  {
    id: '5',
    title: 'Maldives Luxury Escape',
    destination: 'Maldives',
    description: 'Ultimate luxury experience with overwater villas and pristine waters.',
    price: 2999,
    duration: 10,
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
    rating: 5.0,
    category: 'luxury',
    availableDates: ['2024-03-01', '2024-04-05', '2024-11-15'],
    included: ['Flights', 'Overwater Villa', 'All Meals', 'Private Butler', 'Spa Credits']
  },
  {
    id: '6',
    title: 'New York City Explorer',
    destination: 'New York, USA',
    description: 'Discover the iconic sights, Broadway shows, and world-class dining in NYC.',
    price: 1399,
    duration: 6,
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800',
    rating: 4.5,
    category: 'cultural',
    availableDates: ['2024-05-10', '2024-06-15', '2024-09-01'],
    included: ['Flights', 'Hotel', 'City Pass', 'Broadway Tickets']
  },
  {
    id: '7',
    title: 'Kenya Safari Adventure',
    destination: 'Maasai Mara, Kenya',
    description: 'Experience the thrill of African wildlife and stunning landscapes on safari.',
    price: 1899,
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800',
    rating: 4.9,
    category: 'adventure',
    availableDates: ['2024-07-05', '2024-08-12', '2024-09-20'],
    included: ['Flights', 'Safari Lodge', 'Game Drives', 'Cultural Tour']
  },
  {
    id: '8',
    title: 'Rome Historical Journey',
    destination: 'Rome, Italy',
    description: 'Walk through history with guided tours of ancient Roman sites and cuisine.',
    price: 1099,
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
    rating: 4.7,
    category: 'cultural',
    availableDates: ['2024-03-18', '2024-04-25', '2024-10-10'],
    included: ['Flights', 'Hotel', 'Guided Tours', 'Food Tasting']
  },
  {
    id: '9',
    title: 'Sydney Coastal Escape',
    destination: 'Sydney, Australia',
    description: 'Enjoy the beaches, harbor cruises, and vibrant city life of Sydney.',
    price: 1499,
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
    rating: 4.6,
    category: 'relaxation',
    availableDates: ['2024-02-15', '2024-03-30', '2024-12-05'],
    included: ['Flights', 'Hotel', 'Harbor Cruise', 'Beach Activities']
  },
  {
    id: '10',
    title: 'Bangkok Foodie Tour',
    destination: 'Bangkok, Thailand',
    description: 'Explore the vibrant street food scene and culinary delights of Bangkok with guided tastings and cooking classes.',
    price: 999,
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    rating: 4.8,
    category: 'Food Exploration',
    availableDates: ['2024-05-05', '2024-06-10', '2024-09-15'],
    included: ['Flights', 'Hotel', 'Street Food Tour', 'Cooking Class', 'Local Guide']
  },
  {
    id: '8',
    title: 'Rome Historical Journey',
    destination: 'Rome, Italy',
    description: 'Walk through history with guided tours of ancient Roman sites and cuisine.',
    price: 1099,
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
    rating: 4.7,
    category: 'cultural',
    availableDates: ['2024-03-18', '2024-04-25', '2024-10-10'],
    included: ['Flights', 'Hotel', 'Guided Tours', 'Food Tasting']
  },
  {
    id: '9',
    title: 'Sydney Coastal Escape',
    destination: 'Sydney, Australia',
    description: 'Enjoy the beaches, harbor cruises, and vibrant city life of Sydney.',
    price: 1499,
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
    rating: 4.6,
    category: 'relaxation',
    availableDates: ['2024-02-15', '2024-03-30', '2024-12-05'],
    included: ['Flights', 'Hotel', 'Harbor Cruise', 'Beach Activities']
  }
];

export const mockTravelGuides: TravelGuide[] = [
  {
    id: '1',
    title: 'Ultimate Guide to Tokyo Street Food',
    destination: 'Tokyo, Japan',
    content: 'Discover the best street food experiences in Tokyo, from traditional ramen shops to modern food trucks...',
    imageUrl: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800',
    author: 'Sakura Tanaka',
    publishedDate: '2024-01-15',
    readTime: 8,
    tags: ['food', 'culture', 'tokyo', 'street-food']
  },
  {
    id: '2',
    title: 'Hidden Beaches of Bali',
    destination: 'Bali, Indonesia',
    content: 'Explore the secret beaches of Bali that most tourists never discover...',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    author: 'Made Wijaya',
    publishedDate: '2024-01-20',
    readTime: 6,
    tags: ['beaches', 'hidden-gems', 'bali', 'nature']
  },
  {
    id: '3',
    title: 'Alpine Hiking Safety Tips',
    destination: 'Swiss Alps, Switzerland',
    content: 'Essential safety guidelines for hiking in the Swiss Alps during different seasons...',
    imageUrl: 'https://images.unsplash.com/photo-1464822759844-d150065e7dc8?w=800',
    author: 'Hans Mueller',
    publishedDate: '2024-01-10',
    readTime: 12,
    tags: ['hiking', 'safety', 'alps', 'adventure']
  }
];

export const mockUser: User = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  points: 2500,
  membershipLevel: 'gold',
  bookings: []
};

export const mockBookings: Booking[] = [
  {
    id: 'booking-1',
    tripId: '1',
    userId: 'user-1',
    trip: mockTrips[0],
    bookingDate: '2024-01-05',
    travelDate: '2024-03-15',
    guests: 2,
    totalPrice: 2598,
    status: 'confirmed',
    specialRequests: 'Vegetarian meals preferred'
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I cancel my booking?',
    answer: 'You can cancel your booking up to 48 hours before departure through your booking management page. Cancellation fees may apply depending on the timing and trip type.',
    category: 'booking',
    tags: ['cancel', 'booking', 'refund', 'policy']
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. Payment is processed securely through our encrypted payment system.',
    category: 'payment',
    tags: ['payment', 'credit card', 'paypal', 'security']
  },
  {
    id: '3',
    question: 'Do I need travel insurance?',
    answer: 'While travel insurance is not mandatory, we highly recommend it. We offer comprehensive travel insurance options that cover medical emergencies, trip cancellation, and lost luggage.',
    category: 'travel',
    tags: ['insurance', 'coverage', 'medical', 'protection']
  },
  {
    id: '4',
    question: 'How do I earn loyalty points?',
    answer: 'You earn 10% of your booking value in loyalty points. Points can be redeemed for discounts on future bookings. Premium members earn bonus points.',
    category: 'account',
    tags: ['points', 'loyalty', 'rewards', 'membership']
  },
  {
    id: '5',
    question: 'Can I modify my booking after confirmation?',
    answer: 'Yes, you can modify your booking subject to availability and any applicable change fees. Contact our support team for assistance with modifications.',
    category: 'booking',
    tags: ['modify', 'change', 'booking', 'fees']
  },
  {
    id: '6',
    question: 'What happens if my flight is delayed?',
    answer: 'If your flight is delayed, please contact our 24/7 support team immediately. We will help you reschedule activities and provide necessary accommodations.',
    category: 'travel',
    tags: ['delay', 'flight', 'support', 'reschedule']
  },
  {
    id: '7',
    question: 'Is there a mobile app available?',
    answer: 'Yes, our mobile app is available for both iOS and Android. You can manage bookings, access travel documents, and get real-time updates on your trips.',
    category: 'general',
    tags: ['app', 'mobile', 'documents', 'updates']
  },
  {
    id: '8',
    question: 'What is included in the trip price?',
    answer: 'Trip prices typically include flights, accommodation, and selected activities as listed in the trip details. Meals, additional activities, and personal expenses are usually extra unless specified.',
    category: 'booking',
    tags: ['price', 'included', 'flights', 'accommodation']
  },
  {
    id: '9',
    question: 'How secure is my personal information?',
    answer: 'We take data security seriously and use industry-standard encryption to protect your personal information. We comply with GDPR and other privacy regulations.',
    category: 'general',
    tags: ['security', 'privacy', 'data', 'protection']
  },
  {
    id: '10',
    question: 'Can I book for a group?',
    answer: 'Yes, we offer special group rates for bookings of 8 or more people. Contact our group booking specialists for customized packages and special rates.',
    category: 'booking',
    tags: ['group', 'rates', 'customized', 'special']
  },
  {
    id: '11',
    question: 'What if I need special dietary accommodations?',
    answer: 'We can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and religious dietary needs. Please specify your requirements when booking.',
    category: 'travel',
    tags: ['dietary', 'vegetarian', 'vegan', 'requirements']
  },
  {
    id: '12',
    question: 'How do I contact customer support?',
    answer: 'Our customer support is available 24/7 via live chat, email, or phone. You can also submit a request through your account dashboard for non-urgent matters.',
    category: 'general',
    tags: ['support', 'contact', 'chat', 'phone']
  }
];
