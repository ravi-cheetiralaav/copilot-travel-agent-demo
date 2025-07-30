'use client';

import { useState } from 'react';

interface CountryFilterProps {
  onCountryChange: (country: string) => void;
  selectedCountry?: string;
}

const countries = [
  'All Countries',
  'Japan',
  'Indonesia', 
  'Switzerland',
  'France',
  'Maldives'
];

export default function CountryFilter({ onCountryChange, selectedCountry }: CountryFilterProps) {
  return (
    <div className="mb-4">
      <label htmlFor="country-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Country
      </label>
      <select
        id="country-filter"
        value={selectedCountry || 'All Countries'}
        onChange={(e) => onCountryChange(e.target.value === 'All Countries' ? '' : e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}