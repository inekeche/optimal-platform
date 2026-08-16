import React from "react";
import Link from "next/link";
import { MapPin, Maximize2, Bed, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const sampleProperties = [
  {
    id: "1",
    title: "Optimal Crown Heights",
    location: "Ikoyi, Lagos",
    price: 450000000,
    status: "UNDER_DEVELOPMENT",
    category: "Luxury Residential",
    areaSqm: 580,
    bedrooms: 5,
    image: "/images/placeholder-property.jpg",
  },
  {
    id: "2",
    title: "The Paragon Engineering Tower",
    location: "Victoria Island, Lagos",
    price: 1200000000,
    status: "FOR_SALE",
    category: "Commercial High-Rise",
    areaSqm: 1450,
    bedrooms: 0,
    image: "/images/placeholder-property.jpg",
  },
  {
    id: "3",
    title: "Grand Horizon Estate",
    location: "Lekki Phase 1, Lagos",
    price: 280000000,
    status: "COMPLETED",
    category: "Facility Managed Living",
    areaSqm: 420,
    bedrooms: 4,
    image: "/images/placeholder-property.jpg",
  },
];

export const FeaturedGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Premier Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-1">
            Featured Developments
          </h2>
        </div>
        <Link
          href="/properties"
          className="inline-flex items-center space-x-2 text-gold hover:text-white font-semibold text-sm uppercase tracking-wider mt-4 md:mt-0 transition-colors"
        >
          <span>View All Listings</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sampleProperties.map((property) => (
          <div
            key={property.id}
            className="bg-obsidian-light border border-white/10 rounded-sm overflow-hidden group hover:border-gold/50 transition-all duration-300"
          >
            {/* Image Placeholder Frame */}
            <div className="relative h-64 bg-zinc-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 bg-gold text-obsidian text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs">
                {property.status.replace("_", " ")}
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                  {property.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  {property.title}
                </h3>
              </div>
            </div>

            {/* Property Specs */}
            <div className="p-6 space-y-4">
              <div className="flex items-center text-gray-400 text-xs">
                <MapPin className="w-4 h-4 text-gold mr-1" />
                <span>{property.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/10 text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <Maximize2 className="w-4 h-4 text-gold" />
                  <span>{property.areaSqm} sqm</span>
                </div>
                {property.bedrooms > 0 && (
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-gold" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                <div>
                  <span className="text-[10px] uppercase text-gray-400 block">
                    Starting From
                  </span>
                  <span className="text-lg font-bold text-gold">
                    {formatCurrency(property.price)}
                  </span>
                </div>
                <Link
                  href={`/properties/${property.id}`}
                  className="bg-white/5 hover:bg-gold hover:text-obsidian text-white font-semibold px-4 py-2 rounded-xs text-xs uppercase tracking-wider transition-all"
                >
                  Inspect
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};