'use client';

import React from 'react';
import { useTheme, ThemeColor } from '../../lib/contexts/ThemeContext';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { value: ThemeColor; label: string; colors: string[] }[] = [
    {
      value: 'blue',
      label: 'Ocean Blue',
      colors: ['#eff6ff', '#3b82f6', '#1d4ed8'],
    },
    {
      value: 'green',
      label: 'Nature Green',
      colors: ['#f0fdf4', '#22c55e', '#15803d'],
    },
    {
      value: 'red',
      label: 'Sunset Red',
      colors: ['#fef2f2', '#ef4444', '#b91c1c'],
    },
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Theme:</span>
      <div className="flex space-x-2">
        {themes.map((themeOption) => (
          <button
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value)}
            className={`group relative flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
              theme === themeOption.value
                ? 'bg-theme-100 text-theme-800 ring-2 ring-theme-500'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label={`Switch to ${themeOption.label} theme`}
          >
            {/* Color preview circles */}
            <div className="flex space-x-1">
              {themeOption.colors.map((color, index) => (
                <div
                  key={index}
                  className="h-3 w-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span className="hidden sm:inline">{themeOption.label}</span>
            
            {/* Selected indicator */}
            {theme === themeOption.value && (
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-theme-500 ring-2 ring-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
