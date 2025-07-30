'use client';

import { useState } from 'react';
import { SearchFilters } from '@/lib/types';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
  loading?: boolean;
}

export function SearchForm({ onSearch, loading = false }: SearchFormProps) {
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value || undefined
    }));
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = value ? parseInt(value) : undefined;
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: numValue
      }
    }));
  };

  const handleDurationChange = (type: 'min' | 'max', value: string) => {
    const numValue = value ? parseInt(value) : undefined;
    setFilters(prev => ({
      ...prev,
      duration: {
        ...prev.duration,
        [type]: numValue
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Destination
          </label>
          <Input
            id="destination"
            type="text"
            placeholder="Where do you want to go?"
            value={filters.destination || ''}
            onChange={(e) => handleInputChange('destination', e.target.value)}
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <Select
            id="category"
            value={filters.category || ''}
            onChange={(e) => handleInputChange('category', e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="adventure">Adventure</option>
            <option value="relaxation">Relaxation</option>
            <option value="cultural">Cultural</option>
            <option value="family">Family</option>
            <option value="luxury">Luxury</option>
          </Select>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <Select
            id="country"
            value={filters.country || ''}
            onChange={(e) => handleInputChange('country', e.target.value)}
          >
            <option value="">All Countries</option>
            <option value="Japan">Japan</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Switzerland">Switzerland</option>
            <option value="France">France</option>
            <option value="Maldives">Maldives</option>
          </Select>
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Rating
          </label>
          <Select
            id="rating"
            value={filters.rating?.toString() || ''}
            onChange={(e) => handleInputChange('rating', e.target.value)}
          >
            <option value="">Any Rating</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.8">4.8+ Stars</option>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range ($)
          </label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.priceRange?.min || ''}
              onChange={(e) => handlePriceChange('min', e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.priceRange?.max || ''}
              onChange={(e) => handlePriceChange('max', e.target.value)}
            />
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (days)
          </label>
          <div className="flex space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.duration?.min || ''}
              onChange={(e) => handleDurationChange('min', e.target.value)}
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.duration?.max || ''}
              onChange={(e) => handleDurationChange('max', e.target.value)}
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Searching...' : 'Search Trips'}
          </Button>
        </div>
      </div>
    </form>
  );
}
