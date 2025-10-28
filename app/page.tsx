import Image from 'next/image';
import Link from 'next/link';
import { TripService } from '@/lib/services';
import { TripCard } from '@/components/trips/TripCard';
import { Button } from '@/components/ui/Button';

export default async function HomePage() {
  const featuredTrips = await TripService.getFeaturedTrips();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover Your Next
              <span className="block text-yellow-300 mt-2">Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
              Explore curated travel experiences, manage your bookings, and earn points while creating unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link href="/trips">
                <Button size="lg" variant="glass" className="shadow-2xl hover:scale-105 transition-transform">
                  Explore Trips
                </Button>
              </Link>
              <Link href="/guides">
                <Button size="lg" variant="glass-primary" className="shadow-2xl hover:scale-105 transition-transform">
                  Travel Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked experiences from our most popular destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/trips">
              <Button size="lg" className="shadow-xl hover:shadow-2xl transition-shadow">
                View All Trips
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TravelApp?</h2>
            <p className="text-xl text-gray-600">Everything you need for your perfect trip</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 glass-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Curated Destinations</h3>
              <p className="text-gray-600">Handpicked locations and experiences</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 glass-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure booking process</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 glass-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Travel Guides</h3>
              <p className="text-gray-600">Expert tips and local insights</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 glass-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Loyalty Points</h3>
              <p className="text-gray-600">Earn points with every booking</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join thousands of travelers who trust us with their adventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trips">
              <Button size="lg" variant="glass" className="shadow-2xl hover:scale-105 transition-transform">
                Browse Trips
              </Button>
            </Link>
            <Button size="lg" variant="glass-primary" className="shadow-2xl hover:scale-105 transition-transform">
              Create Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
