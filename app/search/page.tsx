'use client';

import { useState } from 'react';
import CountryFilter from '../../components/CountryFilter';
import { SearchFilters, Trip } from '../../lib/types';
import { mockTrips } from '../../lib/data/mockData';

export default function SearchTrips() {
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleCountryChange = (country: string) => {
    setFilters((prev: SearchFilters) => ({ ...prev, country }));
  };

  const filteredTrips = mockTrips.filter((trip: Trip) => {
    // Filter by destination
    if (filters.destination && !trip.destination.toLowerCase().includes(filters.destination.toLowerCase())) {
      return false;
    }
    
    // Filter by country
    if (filters.country && trip.country !== filters.country) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Search Trips</h1>
      
      <div className="mb-8 space-y-4">
        <CountryFilter 
          onCountryChange={handleCountryChange}
          selectedCountry={filters.country}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={trip.imageUrl} 
              alt={trip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h3>
              <p className="text-gray-600 mb-2">{trip.destination}</p>
              <p className="text-sm text-gray-500 mb-2">Country: {trip.country}</p>
              <p className="text-gray-700 mb-4">{trip.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${trip.price}</span>
                <span className="text-sm text-gray-500">{trip.duration} days</span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-600 ml-1">{trip.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTrips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No trips found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}