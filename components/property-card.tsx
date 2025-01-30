"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  property: {
    title: string;
    location: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    type?: string;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg">{property.title}</h3>
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-3">
            <span className="text-2xl font-bold">${property.price}</span>
            <span className="text-sm text-gray-500">/month</span>
          </div>

          <div className="flex items-center justify-between border-t pt-3">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{property.baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4 text-gray-400" />
              <span className="text-sm">{property.sqft} sqft</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}