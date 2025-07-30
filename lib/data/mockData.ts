import { Trip, TravelGuide, Booking, User } from '../types';

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
    included: ['Flights', 'Hotel', 'City Tour', 'Traditional Dinner'],
    country: 'Japan'
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
    included: ['Flights', 'Resort Stay', 'Spa Treatment', 'Beach Activities'],
    country: 'Indonesia'
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
    included: ['Flights', 'Mountain Lodge', 'Ski Pass', 'Guided Tours'],
    country: 'Switzerland'
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
    included: ['Flights', 'Family Hotel', 'Museum Passes', 'Seine River Cruise'],
    country: 'France'
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
    included: ['Flights', 'Overwater Villa', 'All Meals', 'Private Butler', 'Spa Credits'],
    country: 'Maldives'
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
