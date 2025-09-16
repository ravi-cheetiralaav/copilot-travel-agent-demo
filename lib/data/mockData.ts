import { Trip, TravelGuide, Booking, User, FAQItem, ContactInfo } from '../types';

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

// FAQ Data
export const mockFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a trip?',
    answer: 'To book a trip, browse our available destinations, select your preferred dates, choose the number of guests, and proceed to checkout. You can pay securely online using your credit card or PayPal.',
    category: 'booking',
    tags: ['booking', 'payment', 'process']
  },
  {
    id: 'faq-2',
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible cancellation policies depending on your membership level. Bronze members can cancel up to 48 hours before travel for a full refund, while Gold and Platinum members enjoy free cancellation up to 24 hours before travel.',
    category: 'booking',
    tags: ['cancellation', 'refund', 'policy']
  },
  {
    id: 'faq-3',
    question: 'How do I earn and use loyalty points?',
    answer: 'You earn 10 points for every dollar spent on bookings. Points can be redeemed for discounts on future trips - every 100 points equals $1 in credit. Premium members earn bonus points on all purchases.',
    category: 'account',
    tags: ['points', 'loyalty', 'rewards', 'membership']
  },
  {
    id: 'faq-4',
    question: 'What documents do I need for international travel?',
    answer: 'For international travel, you typically need a valid passport with at least 6 months remaining validity. Some destinations may require a visa - we provide destination-specific information in your booking confirmation.',
    category: 'travel',
    tags: ['documents', 'passport', 'visa', 'international']
  },
  {
    id: 'faq-5',
    question: 'How do I change my booking?',
    answer: 'You can modify your booking by logging into your account and visiting the "My Bookings" section. Changes may incur fees depending on the type of modification and how close to your travel date.',
    category: 'booking',
    tags: ['changes', 'modification', 'booking']
  },
  {
    id: 'faq-6',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Payment is processed securely through encrypted connections.',
    category: 'payment',
    tags: ['payment', 'credit card', 'paypal', 'security']
  },
  {
    id: 'faq-7',
    question: 'Is travel insurance included?',
    answer: 'Basic travel insurance is included with all bookings. This covers trip cancellation, medical emergencies, and lost luggage. Premium insurance options are available for additional coverage.',
    category: 'travel',
    tags: ['insurance', 'coverage', 'medical', 'protection']
  },
  {
    id: 'faq-8',
    question: 'Can I book for someone else?',
    answer: 'Yes, you can book trips for family members or friends. You\'ll need to provide their details during the booking process. The primary booker is responsible for all booking terms and conditions.',
    category: 'booking',
    tags: ['booking', 'family', 'friends', 'guest']
  },
  {
    id: 'faq-9',
    question: 'How do I reset my password?',
    answer: 'Click the "Forgot Password" link on the login page, enter your email address, and we\'ll send you instructions to reset your password. Make sure to check your spam folder if you don\'t see the email.',
    category: 'account',
    tags: ['password', 'account', 'login', 'security']
  },
  {
    id: 'faq-10',
    question: 'What happens if my flight is delayed?',
    answer: 'If your flight is delayed due to weather or airline issues, contact us immediately. We\'ll help coordinate with hotels and activities to minimize disruption to your trip at no extra cost.',
    category: 'travel',
    tags: ['delays', 'flights', 'support', 'disruption']
  }
];

// Contact Information
export const mockContactInfo: ContactInfo = {
  phone: '+1 (555) 123-TRAVEL',
  email: 'support@travelapp.com',
  address: {
    street: '123 Adventure Avenue',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    country: 'United States'
  },
  hours: {
    monday: '8:00 AM - 8:00 PM',
    tuesday: '8:00 AM - 8:00 PM',
    wednesday: '8:00 AM - 8:00 PM',
    thursday: '8:00 AM - 8:00 PM',
    friday: '8:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: '10:00 AM - 4:00 PM'
  },
  socialMedia: {
    facebook: 'https://facebook.com/travelapp',
    twitter: 'https://twitter.com/travelapp',
    instagram: 'https://instagram.com/travelapp',
    linkedin: 'https://linkedin.com/company/travelapp'
  }
};
