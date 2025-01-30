"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface SearchFiltersProps {
  filters: {
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    priceRange: number[];
    sortBy: string;
  };
  setFilters: (filters: any) => void;
}

export function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const handleReset = () => {
    setFilters({
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      priceRange: [0, 10000],
      sortBy: "",
    });
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg border bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Property Type</label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bedrooms</label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bathrooms</label>
          <Select
            value={filters.bathrooms}
            onValueChange={(value) => setFilters({ ...filters, bathrooms: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select bathrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Sort By</label>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort properties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <div className="pt-2">
          <Slider
            defaultValue={[0, 10000]}
            max={10000}
            step={100}
            value={filters.priceRange}
            onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          className="w-full sm:w-auto"
          onClick={handleReset}
          variant="outline"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}