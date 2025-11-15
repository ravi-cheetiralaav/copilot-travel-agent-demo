import Image from 'next/image';
import Link from 'next/link';
import { Trip } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';

interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={trip.imageUrl}
          alt={`${trip.destination} - ${trip.title}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 glass-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg backdrop-blur-md">
          ⭐ {trip.rating}
        </div>
        <div className="absolute top-4 left-4 glass-primary px-3 py-1 rounded-full text-xs font-semibold capitalize shadow-lg backdrop-blur-md">
          {trip.category}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors">{trip.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{trip.destination}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{trip.description}</p>
        
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span className="font-medium">{trip.duration} days</span>
          <span className="font-bold text-lg text-primary-600">
            {formatPrice(trip.price)}
          </span>
        </div>
        
        <div className="text-xs text-gray-500 mb-4">
          <p className="font-medium mb-1">Included:</p>
          <ul className="list-disc list-inside space-y-1">
            {trip.included.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {trip.included.length > 3 && (
              <li className="text-primary-600 font-medium">+ {trip.included.length - 3} more</li>
            )}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Link href={`/trips/${trip.id}`} className="flex-1">
            <Button variant="glass" className="w-full">
              View Details
            </Button>
          </Link>
          <Button className="flex-1">
            Book Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
