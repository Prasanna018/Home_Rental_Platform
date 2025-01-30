"use client";

import { PropertyCard } from "@/components/property-card";
import { SearchFilters } from "@/components/search-filters";
import { useState } from "react";

// Reusing the sample properties from the home page
const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "Downtown, New York",
    price: 2500,
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 2,
    title: "Luxury Beach House",
    location: "Miami Beach, Florida",
    price: 4500,
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2830",
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 3200,
    beds: 3,
    baths: 2,
    sqft: 1800,
    type: "house",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 4,
    title: "Chic Urban Loft",
    location: "Los Angeles, California",
    price: 3700,
    beds: 2,
    baths: 2,
    sqft: 1500,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1575517111478-7fbb2b36e84a?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 5,
    title: "Spacious Suburban Home",
    location: "Austin, Texas",
    price: 2800,
    beds: 4,
    baths: 3,
    sqft: 2200,
    type: "house",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 6,
    title: "Lakefront Retreat",
    location: "Lake Tahoe, Nevada",
    price: 5000,
    beds: 5,
    baths: 4,
    sqft: 3500,
    type: "house",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 7,
    title: "High-Rise Penthouse",
    location: "Chicago, Illinois",
    price: 6000,
    beds: 3,
    baths: 3,
    sqft: 2100,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1600585152907-04b1dc67f2f8?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 8,
    title: "Rustic Countryside Farmhouse",
    location: "Nashville, Tennessee",
    price: 3100,
    beds: 4,
    baths: 3,
    sqft: 2600,
    type: "house",
    image: "https://images.unsplash.com/photo-1613977257363-4b6b8fd1a48a?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 9,
    title: "Minimalist Studio Apartment",
    location: "San Francisco, California",
    price: 2200,
    beds: 1,
    baths: 1,
    sqft: 700,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1600607680349-1fcdf1f7d8e7?auto=format&fit=crop&q=80&w=2835",
  },
  {
    id: 10,
    title: "Ski Resort Chalet",
    location: "Vail, Colorado",
    price: 5500,
    beds: 6,
    baths: 5,
    sqft: 4000,
    type: "house",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&q=80&w=2835",
  },
];


export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    priceRange: [0, 10000],
    sortBy: "",
  });

  const filteredProperties = SAMPLE_PROPERTIES.filter((property) => {
    const matchesType = !filters.propertyType || property.type === filters.propertyType;
    const matchesBeds = !filters.bedrooms || property.beds === parseInt(filters.bedrooms);
    const matchesBaths = !filters.bathrooms || property.baths === parseInt(filters.bathrooms);
    const matchesPrice =
      property.price >= filters.priceRange[0] &&
      property.price <= filters.priceRange[1];

    return matchesType && matchesBeds && matchesBaths && matchesPrice;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold">Available Properties</h1>
        <SearchFilters filters={filters} setFilters={setFilters} />

        <div className="mt-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
              <p className="mt-2 text-sm text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}