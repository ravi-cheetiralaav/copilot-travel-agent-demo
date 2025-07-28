import { GuideService } from '@/lib/services';
import { GuideCard } from '@/components/guides/GuideCard';

export default async function GuidesPage() {
  const guides = await GuideService.getTravelGuides();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel Guides</h1>
          <p className="text-gray-600">Expert tips and local insights for your next adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </div>
  );
}
