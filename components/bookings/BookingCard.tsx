import { Booking } from '@/lib/types';
import { formatDate, formatPrice } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

interface BookingCardProps {
  booking: Booking;
  onCancel?: (bookingId: string) => void;
}

export function BookingCard({ booking, onCancel }: BookingCardProps) {
  const getStatusColor = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{booking.trip.title}</h3>
          <p className="text-gray-600">{booking.trip.destination}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(booking.status)}`}>
          {booking.status}
        </span>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Booking Date</p>
            <p className="font-medium">{formatDate(booking.bookingDate)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Travel Date</p>
            <p className="font-medium">{formatDate(booking.travelDate)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Guests</p>
            <p className="font-medium">{booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="font-medium text-primary-600">{formatPrice(booking.totalPrice)}</p>
          </div>
        </div>
        
        {booking.specialRequests && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">Special Requests</p>
            <p className="text-sm">{booking.specialRequests}</p>
          </div>
        )}
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            View Details
          </Button>
          {booking.status === 'confirmed' && onCancel && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onCancel(booking.id)}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Cancel Booking
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
