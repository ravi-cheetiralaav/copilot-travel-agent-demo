'use client';

import { mockUser } from '@/lib/data/mockData';
import { formatPrice, calculatePointsEarned } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function PointsPage() {
  const user = mockUser;

  const getMembershipColor = (level: string) => {
    switch (level) {
      case 'bronze':
        return 'text-orange-600 bg-orange-100';
      case 'silver':
        return 'text-gray-600 bg-gray-100';
      case 'gold':
        return 'text-yellow-600 bg-yellow-100';
      case 'platinum':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getNextLevel = (currentLevel: string) => {
    const levels = ['bronze', 'silver', 'gold', 'platinum'];
    const currentIndex = levels.indexOf(currentLevel);
    return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
  };

  const getPointsNeededForNextLevel = (currentLevel: string, currentPoints: number) => {
    const levelThresholds = {
      bronze: 1000,
      silver: 2500,
      gold: 5000,
      platinum: 10000,
    };

    const nextLevel = getNextLevel(currentLevel);
    if (!nextLevel) return 0;

    return levelThresholds[nextLevel as keyof typeof levelThresholds] - currentPoints;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Loyalty Points</h1>
          <p className="text-gray-600">Track your points and membership status</p>
        </div>

        {/* Points Overview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <div className="flex items-center mt-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getMembershipColor(
                      user.membershipLevel
                    )}`}
                  >
                    {user.membershipLevel} Member
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-600">{user.points.toLocaleString()}</p>
                <p className="text-gray-600">Total Points</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Membership Progress */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Membership Progress</h3>
            </CardHeader>
            <CardContent>
              {getNextLevel(user.membershipLevel) ? (
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Current: {user.membershipLevel}</span>
                    <span>Next: {getNextLevel(user.membershipLevel)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{
                        width: `${Math.min(
                          (user.points / (user.points + getPointsNeededForNextLevel(user.membershipLevel, user.points))) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {getPointsNeededForNextLevel(user.membershipLevel, user.points).toLocaleString()} more points to reach{' '}
                    {getNextLevel(user.membershipLevel)} level
                  </p>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-lg font-medium text-primary-600">🎉 Maximum Level Reached!</p>
                  <p className="text-gray-600 mt-2">You&apos;re at the highest membership tier</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Points Value */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Points Value</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Balance</span>
                  <span className="font-medium">{user.points.toLocaleString()} points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Value</span>
                  <span className="font-medium">{formatPrice(user.points * 0.01)}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-500">1 point = $0.01 USD</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Earn Points */}
        <Card className="mb-8">
          <CardHeader>
            <h3 className="text-lg font-semibold">How to Earn Points</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Booking Trips</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Earn 1 point for every $1 spent on trip bookings
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>$500 trip</span>
                    <span className="text-primary-600">+500 points</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>$1,200 trip</span>
                    <span className="text-primary-600">+1,200 points</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>$2,500 trip</span>
                    <span className="text-primary-600">+2,500 points</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Bonus Activities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Write a review</span>
                    <span className="text-primary-600">+50 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Refer a friend</span>
                    <span className="text-primary-600">+200 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Social media share</span>
                    <span className="text-primary-600">+25 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complete profile</span>
                    <span className="text-primary-600">+100 points</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Membership Benefits */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Membership Benefits</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-orange-600 font-bold">B</span>
                </div>
                <h4 className="font-medium">Bronze</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>Standard booking</li>
                  <li>Email support</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-bold">S</span>
                </div>
                <h4 className="font-medium">Silver</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>5% points bonus</li>
                  <li>Priority support</li>
                  <li>Early access</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 font-bold">G</span>
                </div>
                <h4 className="font-medium">Gold</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>10% points bonus</li>
                  <li>Free cancellation</li>
                  <li>Exclusive deals</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">P</span>
                </div>
                <h4 className="font-medium">Platinum</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>15% points bonus</li>
                  <li>Personal concierge</li>
                  <li>VIP experiences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
