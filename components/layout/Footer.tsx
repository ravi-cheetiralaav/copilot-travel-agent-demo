import Link from 'next/link';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TravelApp</span>
            </div>
            <p className="text-gray-400 text-sm">
              Discover amazing destinations and create unforgettable memories with our curated travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trips" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Search Trips
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/points" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Loyalty Points
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-all duration-200 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest travel deals and destination guides.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 glass-dark rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all placeholder-gray-400 text-white"
              />
              <Button variant="glass-primary" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 TravelApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
