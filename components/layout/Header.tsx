'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-theme-primary-600 rounded-full flex items-center justify-center theme-transition">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TravelApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
              Home
            </Link>
            <Link href="/trips" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
              Search Trips
            </Link>
            <Link href="/guides" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
              Travel Guides
            </Link>
            <Link href="/bookings" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
              My Bookings
            </Link>
            <Link href="/points" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
              Points
            </Link>
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
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
              <Link href="/" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
                Home
              </Link>
              <Link href="/trips" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
                Search Trips
              </Link>
              <Link href="/guides" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
                Travel Guides
              </Link>
              <Link href="/bookings" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
                My Bookings
              </Link>
              <Link href="/points" className="text-gray-700 hover:text-theme-primary-600 transition-colors theme-transition">
                Points
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <div className="flex justify-start">
                  <ThemeToggle />
                </div>
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
