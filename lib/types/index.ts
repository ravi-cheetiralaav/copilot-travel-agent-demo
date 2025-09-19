export interface Trip {
  id: string;
  title: string;
  destination: string;
  description: string;
  price: number;
  duration: number; // in days
  imageUrl: string;
  rating: number;
  category: 'adventure' | 'relaxation' | 'cultural' | 'family' | 'luxury' | 'Food Exploration';
  availableDates: string[];
  included: string[];
}

export interface TravelGuide {
  id: string;
  title: string;
  destination: string;
  content: string;
  imageUrl: string;
  author: string;
  publishedDate: string;
  readTime: number; // in minutes
  tags: string[];
}

export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  trip: Trip;
  bookingDate: string;
  travelDate: string;
  guests: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  specialRequests?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  membershipLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
  bookings: Booking[];
}

export interface SearchFilters {
  destination?: string;
  category?: Trip['category'];
  priceRange?: {
    min?: number;
    max?: number;
  };
  duration?: {
    min?: number;
    max?: number;
  };
  rating?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'payment' | 'travel' | 'account' | 'general';
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  category: 'booking' | 'payment' | 'technical' | 'feedback' | 'other';
  message: string;
}
