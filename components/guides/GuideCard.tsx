import Image from 'next/image';
import Link from 'next/link';
import { TravelGuide } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '../ui/Card';

interface GuideCardProps {
  guide: TravelGuide;
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={guide.imageUrl}
          alt={guide.title}
          fill
          className="object-cover"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {guide.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-lg leading-tight">{guide.title}</h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-3">{guide.destination}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{guide.content}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>By {guide.author}</span>
          <span>{guide.readTime} min read</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{formatDate(guide.publishedDate)}</p>
        
        <Link
          href={`/guides/${guide.id}`}
          className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm"
        >
          Read More →
        </Link>
      </CardContent>
    </Card>
  );
}
