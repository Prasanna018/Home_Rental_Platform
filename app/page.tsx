"use client";

import { useState } from "react";
import { SearchFilters } from "@/components/search-filters";
import { PropertyCard } from "@/components/property-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    priceRange: [0, 10000],
    sortBy: "",
  });

  const filteredProperties = SAMPLE_PROPERTIES.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = !filters.propertyType || property.type === filters.propertyType;
    const matchesBeds = !filters.bedrooms || property.beds === parseInt(filters.bedrooms);
    const matchesBaths = !filters.bathrooms || property.baths === parseInt(filters.bathrooms);
    const matchesPrice =
      property.price >= filters.priceRange[0] &&
      property.price <= filters.priceRange[1];

    return matchesSearch && matchesType && matchesBeds && matchesBaths && matchesPrice;
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
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with new background */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Home
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-300">
            Discover thousands of rental properties in your desired location.
          </p>
          <div className="mt-8 flex w-full max-w-3xl items-center gap-2 rounded-lg bg-white p-2">
            <Search className="ml-2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by location, property type, or keywords..."
              className="flex-1 border-0 focus-visible:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}