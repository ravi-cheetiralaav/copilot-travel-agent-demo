import { TripService } from '../lib/services';
import { mockTrips } from '../lib/data/mockData';

describe('TripService', () => {
  describe('searchTrips', () => {
    it('returns all trips when no filters are provided', async () => {
      const trips = await TripService.searchTrips();
      expect(trips).toHaveLength(mockTrips.length);
    });

    it('filters trips by destination', async () => {
      const trips = await TripService.searchTrips({ destination: 'Tokyo' });
      expect(trips).toHaveLength(1);
      expect(trips[0].destination).toContain('Tokyo');
    });

    it('filters trips by category', async () => {
      const trips = await TripService.searchTrips({ category: 'cultural' });
      expect(trips.every(trip => trip.category === 'cultural')).toBe(true);
    });

    it('filters trips by price range', async () => {
      const trips = await TripService.searchTrips({ 
        priceRange: { min: 1000, max: 1500 } 
      });
      expect(trips.every(trip => trip.price >= 1000 && trip.price <= 1500)).toBe(true);
    });

    it('filters trips by minimum price only', async () => {
      const trips = await TripService.searchTrips({ 
        priceRange: { min: 1500 } 
      });
      expect(trips.every(trip => trip.price >= 1500)).toBe(true);
    });

    it('filters trips by maximum price only', async () => {
      const trips = await TripService.searchTrips({ 
        priceRange: { max: 1200 } 
      });
      expect(trips.every(trip => trip.price <= 1200)).toBe(true);
    });

    it('filters trips by minimum rating', async () => {
      const trips = await TripService.searchTrips({ rating: 4.8 });
      expect(trips.every(trip => trip.rating >= 4.8)).toBe(true);
      expect(trips).toHaveLength(5); // Tokyo Adventure (4.8), Swiss Alps Adventure (4.9), Maldives Luxury Escape (5.0), Kenya Safari Adventure (4.9), Bangkok Foodie Tour (4.8)
    });

    it('filters trips by rating 4.5+ correctly', async () => {
      const trips = await TripService.searchTrips({ rating: 4.5 });
      expect(trips.every(trip => trip.rating >= 4.5)).toBe(true);
      expect(trips).toHaveLength(10); // All 10 trips have rating >= 4.5
    });

    it('filters trips by rating 4.9+ correctly', async () => {
      const trips = await TripService.searchTrips({ rating: 4.9 });
      expect(trips.every(trip => trip.rating >= 4.9)).toBe(true);
      expect(trips).toHaveLength(3); // Swiss Alps Adventure (4.9), Kenya Safari Adventure (4.9), Maldives Luxury Escape (5.0)
    });
  });

  describe('getTripById', () => {
    it('returns trip when found', async () => {
      const trip = await TripService.getTripById('1');
      expect(trip).toBeDefined();
      expect(trip?.id).toBe('1');
    });

    it('returns null when trip not found', async () => {
      const trip = await TripService.getTripById('nonexistent');
      expect(trip).toBeNull();
    });
  });

  describe('getFeaturedTrips', () => {
    it('returns trips with rating >= 4.7', async () => {
      const trips = await TripService.getFeaturedTrips();
      expect(trips.every(trip => trip.rating >= 4.7)).toBe(true);
    });

    it('returns maximum of 3 trips', async () => {
      const trips = await TripService.getFeaturedTrips();
      expect(trips.length).toBeLessThanOrEqual(3);
    });
  });
});
