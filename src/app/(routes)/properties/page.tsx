"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Maximize2, Bed, Bath, Filter, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { PropertyCategory } from "@/types/property";

const allProperties = [
  {
    id: "1",
    title: "Optimal Crown Heights",
    location: "Ikoyi, Lagos",
    price: 450000000,
    status: "UNDER_DEVELOPMENT",
    category: "RESIDENTIAL" as PropertyCategory,
    areaSqm: 580,
    bedrooms: 5,
    bathrooms: 6,
    image: "/images/placeholder-property.jpg",
  },
  {
    id: "2",
    title: "The Paragon Engineering Tower",
    location: "Victoria Island, Lagos",
    price: 1200000000,
    status: "FOR_SALE",
    category: "COMMERCIAL" as PropertyCategory,
    areaSqm: 1450,
    bedrooms: 0,
    bathrooms: 12,
    image: "/images/placeholder-property.jpg",
  },
  {
    id: "3",
    title: "Grand Horizon Estate",
    location: "Lekki Phase 1, Lagos",
    price: 280000000,
    status: "COMPLETED",
    category: "RESIDENTIAL" as PropertyCategory,
    areaSqm: 420,
    bedrooms: 4,
    bathrooms: 5,
    image: "/images/placeholder-property.jpg",
  },
  {
    id: "4",
    title: "Optimal Logistics Hub & Industrial Park",
    location: "Ibeju-Lekki, Lagos",
    price: 850000000,
    status: "FOR_SALE",
    category: "FACILITY" as PropertyCategory,
    areaSqm: 3200,
    bedrooms: 0,
    bathrooms: 8,
    image: "/images/placeholder-property.jpg",
  },
];

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredProperties = selectedCategory === "ALL"
    ? allProperties
    : allProperties.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">
          Prime Real Estate & Facilities
        </span>
        <h1 className="text-4xl font-heading font-bold text-white">
          Featured Developments & Asset Portfolio
        </h1>
        <p className="text-gray-400 text-sm">
          Browse our structured portfolio of high-rise commercial spaces, luxury residential estates, and turnkey managed facilities.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-6">
        <div className="flex items-center space-x-2 text-gold text-xs font-semibold uppercase tracking-wider mr-4">
          <Filter className="w-4 h-4" />
          <span>Category:</span>
        </div>
        {["ALL", "RESIDENTIAL", "COMMERCIAL", "FACILITY"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
              selectedCategory === category
                ? "bg-gold text-obsidian font-bold"
                : "bg-obsidian-light text-gray-300 border border-white/10 hover:border-gold/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-obsidian-light border border-white/10 rounded-sm overflow-hidden group hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Frame */}
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

              {/* Specs */}
              <div className="p-6 space-y-4">
                <div className="flex items-center text-gray-400 text-xs">
                  <MapPin className="w-4 h-4 text-gold mr-1" />
                  <span>{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-xs text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                    <span>{property.areaSqm} sqm</span>
                  </div>
                  {property.bedrooms > 0 && (
                    <div className="flex items-center space-x-1">
                      <Bed className="w-3.5 h-3.5 text-gold" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Bath className="w-3.5 h-3.5 text-gold" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing & Inspection Link */}
            <div className="p-6 pt-0 flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase text-gray-400 block">
                  Guide Price
                </span>
                <span className="text-lg font-bold text-gold">
                  {formatCurrency(property.price)}
                </span>
              </div>
              <Link
                href="/contact"
                className="bg-white/5 hover:bg-gold hover:text-obsidian text-white font-semibold px-4 py-2 rounded-xs text-xs uppercase tracking-wider transition-all flex items-center space-x-1"
              >
                <span>Inspect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}