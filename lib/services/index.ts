import { Trip, TravelGuide, Booking, SearchFilters } from '../types';
import { mockTrips, mockTravelGuides, mockBookings } from '../data/mockData';

export class TripService {
  static async searchTrips(filters: SearchFilters = {}): Promise<Trip[]> {
    let filteredTrips = [...mockTrips];

    if (filters.destination) {
      filteredTrips = filteredTrips.filter(trip => 
        trip.destination.toLowerCase().includes(filters.destination!.toLowerCase())
      );
    }

    if (filters.country) {
      filteredTrips = filteredTrips.filter(trip => trip.country === filters.country);
    }

    if (filters.category) {
      filteredTrips = filteredTrips.filter(trip => trip.category === filters.category);
    }

    if (filters.priceRange) {
      filteredTrips = filteredTrips.filter(trip => {
        const { min, max } = filters.priceRange!;
        return (!min || trip.price >= min) && (!max || trip.price <= max);
      });
    }

    if (filters.duration) {
      filteredTrips = filteredTrips.filter(trip => {
        const { min, max } = filters.duration!;
        return (!min || trip.duration >= min) && (!max || trip.duration <= max);
      });
    }

    if (filters.rating) {
      filteredTrips = filteredTrips.filter(trip => trip.rating >= filters.rating!);
    }

    return filteredTrips;
  }

  static async getTripById(id: string): Promise<Trip | null> {
    const trip = mockTrips.find(trip => trip.id === id);
    return trip || null;
  }

  static async getFeaturedTrips(): Promise<Trip[]> {
    return mockTrips.filter(trip => trip.rating >= 4.7).slice(0, 3);
  }
}

export class GuideService {
  static async getTravelGuides(): Promise<TravelGuide[]> {
    return mockTravelGuides;
  }

  static async getGuideById(id: string): Promise<TravelGuide | null> {
    const guide = mockTravelGuides.find(guide => guide.id === id);
    return guide || null;
  }

  static async getGuidesByDestination(destination: string): Promise<TravelGuide[]> {
    return mockTravelGuides.filter(guide => 
      guide.destination.toLowerCase().includes(destination.toLowerCase())
    );
  }
}

export class BookingService {
  static async createBooking(bookingData: Omit<Booking, 'id'>): Promise<Booking> {
    const newBooking: Booking = {
      ...bookingData,
      id: `booking-${Date.now()}`,
    };
    
    mockBookings.push(newBooking);
    return newBooking;
  }

  static async getUserBookings(userId: string): Promise<Booking[]> {
    return mockBookings.filter(booking => booking.userId === userId);
  }

  static async getBookingById(id: string): Promise<Booking | null> {
    const booking = mockBookings.find(booking => booking.id === id);
    return booking || null;
  }

  static async cancelBooking(id: string): Promise<boolean> {
    const bookingIndex = mockBookings.findIndex(booking => booking.id === id);
    if (bookingIndex > -1) {
      mockBookings[bookingIndex].status = 'cancelled';
      return true;
    }
    return false;
  }
}
