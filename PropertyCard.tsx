import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    area: string;
    type: string;
    status: string;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {property.status}
          </span>
          <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-2xl font-bold text-white drop-shadow-md">{property.price}</p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 font-display line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center text-slate-500 mb-4">
          <MapPin className="h-4 w-4 mr-1 shrink-0" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mb-6">
          <div className="flex items-center gap-2 text-slate-600">
            <Bed className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Bath className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Square className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium">{property.area}</span>
          </div>
        </div>
        
        <Link
          href={`/properties/${property.id}`}
          className="block w-full text-center border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-md font-semibold transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
