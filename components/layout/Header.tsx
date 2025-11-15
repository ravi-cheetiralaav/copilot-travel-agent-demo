'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-white shadow-lg border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TravelApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium hover:scale-105">
              Home
            </Link>
            <Link href="/trips" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium hover:scale-105">
              Search Trips
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium hover:scale-105">
              Travel Guides
            </Link>
            <Link href="/bookings" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium hover:scale-105">
              My Bookings
            </Link>
            <Link href="/points" className="text-gray-700 hover:text-primary-600 transition-all duration-200 font-medium hover:scale-105">
              Points
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="glass" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-white/50 transition-all duration-200"
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
          <div className="md:hidden py-4 border-t border-white/30 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-md hover:bg-white/50">
                Home
              </Link>
              <Link href="/trips" className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-md hover:bg-white/50">
                Search Trips
              </Link>
              <Link href="/guides" className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-md hover:bg-white/50">
                Travel Guides
              </Link>
              <Link href="/bookings" className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-md hover:bg-white/50">
                My Bookings
              </Link>
              <Link href="/points" className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-3 rounded-md hover:bg-white/50">
                Points
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="glass" size="sm">
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
