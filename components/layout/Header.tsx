'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import ThemeSelector from '../ui/ThemeSelector';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-theme-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TravelApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-theme-600 transition-colors">
              Home
            </Link>
            <Link href="/trips" className="text-gray-700 hover:text-theme-600 transition-colors">
              Search Trips
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-theme-600 transition-colors">
              Travel Guides
            </Link>
            <Link href="/bookings" className="text-gray-700 hover:text-theme-600 transition-colors">
              My Bookings
            </Link>
            <Link href="/points" className="text-gray-700 hover:text-theme-600 transition-colors">
              Points
            </Link>
          </nav>

          {/* Desktop CTA and Theme Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSelector />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-theme-600 transition-colors">
                Home
              </Link>
              <Link href="/trips" className="text-gray-700 hover:text-theme-600 transition-colors">
                Search Trips
              </Link>
              <Link href="/guides" className="text-gray-700 hover:text-theme-600 transition-colors">
                Travel Guides
              </Link>
              <Link href="/bookings" className="text-gray-700 hover:text-theme-600 transition-colors">
                My Bookings
              </Link>
              <Link href="/points" className="text-gray-700 hover:text-theme-600 transition-colors">
                Points
              </Link>
              <div className="pt-4">
                <ThemeSelector />
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
