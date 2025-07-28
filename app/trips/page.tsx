'use client';

import { useState, useEffect } from 'react';
import { Trip, SearchFilters } from '@/lib/types';
import { TripService } from '@/lib/services';
import { TripCard } from '@/components/trips/TripCard';
import { SearchForm } from '@/components/trips/SearchForm';

export default function TripsPage() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      setLoading(true);
      const data = await TripService.searchTrips();
      setTrips(data);
    } catch (error) {
      console.error('Error loading trips:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (filters: SearchFilters) => {
    try {
      setSearchLoading(true);
      const data = await TripService.searchTrips(filters);
      setTrips(data);
    } catch (error) {
      console.error('Error searching trips:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-32 bg-gray-300 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Trips</h1>
          <p className="text-gray-600">Find your perfect travel experience</p>
        </div>

        <div className="mb-8">
          <SearchForm onSearch={handleSearch} loading={searchLoading} />
        </div>

        <div className="mb-4">
          <p className="text-gray-600">
            {trips.length} {trips.length === 1 ? 'trip' : 'trips'} found
          </p>
        </div>

        {trips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No trips found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
