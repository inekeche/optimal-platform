"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Maximize2, 
  Bed, 
  Bath, 
  CheckCircle2, 
  Calendar, 
  Send, 
  ShieldCheck, 
  ArrowLeft 
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Mock property data store
const propertiesData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Optimal Crown Heights",
    tagline: "Luxury High-Rise Living with Smart Facility Automation",
    location: "Ikoyi, Lagos",
    price: 450000000,
    status: "UNDER_DEVELOPMENT",
    category: "RESIDENTIAL",
    areaSqm: 580,
    bedrooms: 5,
    bathrooms: 6,
    completionDate: "Q3 2027",
    description:
      "Optimal Crown Heights offers non-compromised structural engineering combined with luxury living. Featuring post-tensioned slab construction, integrated smart security systems, and high-efficiency dual-power backup.",
    amenities: [
      "24/7 Smart Facility Management",
      "Private High-Speed Elevator Access",
      "Olympic-Sized Infinity Pool",
      "Reinforced Structural Foundation",
      "Multi-Tier CCTV & Biometric Security",
      "Underground Parking (3 Spaces per Unit)",
      "Centralized Water Treatment Plant",
      "Fiber-Optic Connectivity Base",
    ],
    floorPlans: [
      { name: "Standard 5-Bed Penthouse Unit", sqm: 580, bedrooms: 5, bathrooms: 6 },
      { name: "Duplex Executive Suite", sqm: 420, bedrooms: 4, bathrooms: 4 },
    ],
  },
  "2": {
    id: "2",
    title: "The Paragon Engineering Tower",
    tagline: "Premier Grade-A Commercial Tower & Corporate HQ",
    location: "Victoria Island, Lagos",
    price: 1200000000,
    status: "FOR_SALE",
    category: "COMMERCIAL",
    areaSqm: 1450,
    bedrooms: 0,
    bathrooms: 12,
    completionDate: "Ready for Fitting",
    description:
      "Engineered for enterprise leadership. The Paragon Engineering Tower features double-glazed acoustic glass, high-capacity centralized HVAC systems, and flexible open-plan office footprints built to Eurocode standards.",
    amenities: [
      "Grade-A Commercial Certification",
      "Variable Refrigerant Flow (VRF) HVAC",
      "Dedicated Substation & Generator Plant",
      "Helipad Access Deck",
      "Structural Load Floor Support (5kN/m²)",
      "Automated Fire Suppression Systems",
    ],
    floorPlans: [
      { name: "Full Floor Executive Plate", sqm: 1450, bedrooms: 0, bathrooms: 12 },
    ],
  },
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = propertiesData[params.id] || propertiesData["1"];
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitted">("idle");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("submitted");
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-6 space-y-10">
      {/* Back Navigation */}
      <Link
        href="/properties"
        className="inline-flex items-center space-x-2 text-xs font-semibold text-gold hover:text-white uppercase tracking-wider transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Listings</span>
      </Link>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold/20 pb-6 gap-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="bg-gold text-obsidian text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-xs">
              {property.status.replace("_", " ")}
            </span>
            <span className="text-xs text-gold uppercase font-semibold tracking-wider">
              {property.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">
            {property.title}
          </h1>
          <p className="text-gray-400 text-sm mt-1 flex items-center">
            <MapPin className="w-4 h-4 text-gold mr-1" />
            {property.location}
          </p>
        </div>

        <div>
          <span className="text-xs text-gray-400 uppercase block">Guide Price</span>
          <span className="text-2xl md:text-3xl font-bold text-gold">
            {formatCurrency(property.price)}
          </span>
        </div>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Details & Specs */}
        <div className="lg:col-span-2 space-y-10">
          {/* Gallery Frame */}
          <div className="h-96 bg-zinc-800 border border-white/10 rounded-sm relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
            <p className="text-gray-500 text-sm uppercase tracking-widest z-20">
              Architectural Structural Gallery View
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-obsidian-light p-6 border border-white/10 rounded-sm text-center">
            <div>
              <span className="text-[10px] text-gray-400 uppercase block">Floor Area</span>
              <span className="text-lg font-bold text-white flex items-center justify-center gap-1 mt-1">
                <Maximize2 className="w-4 h-4 text-gold" /> {property.areaSqm} sqm
              </span>
            </div>
            {property.bedrooms > 0 && (
              <div>
                <span className="text-[10px] text-gray-400 uppercase block">Bedrooms</span>
                <span className="text-lg font-bold text-white flex items-center justify-center gap-1 mt-1">
                  <Bed className="w-4 h-4 text-gold" /> {property.bedrooms}
                </span>
              </div>
            )}
            <div>
              <span className="text-[10px] text-gray-400 uppercase block">Bathrooms</span>
              <span className="text-lg font-bold text-white flex items-center justify-center gap-1 mt-1">
                <Bath className="w-4 h-4 text-gold" /> {property.bathrooms}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase block">Delivery Target</span>
              <span className="text-lg font-bold text-white flex items-center justify-center gap-1 mt-1">
                <Calendar className="w-4 h-4 text-gold" /> {property.completionDate}
              </span>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2">
              Development Overview
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Key Amenities */}
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-2">
              Engineering & Facility Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Inspection Sidebar Form */}
        <div className="bg-obsidian-light p-8 border border-white/10 rounded-sm space-y-6 h-fit sticky top-28">
          <div className="space-y-2">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider block">
              Direct Contact
            </span>
            <h3 className="text-xl font-heading font-bold text-white">
              Schedule Private Inspection
            </h3>
            <p className="text-xs text-gray-400">
              Book an on-site walkthrough or request full structural engineering blueprints.
            </p>
          </div>

          {bookingStatus === "submitted" ? (
            <div className="bg-gold/10 border border-gold/30 p-4 rounded-xs text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-gold mx-auto" />
              <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                Inspection Request Received
              </p>
              <p className="text-xs text-gray-300">
                Our sales team will contact you shortly to confirm dates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-semibold text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief Adeleke"
                  className="w-full bg-obsidian border border-white/15 px-3 py-2.5 text-xs text-white rounded-xs outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-semibold text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234..."
                  className="w-full bg-obsidian border border-white/15 px-3 py-2.5 text-xs text-white rounded-xs outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-semibold text-gray-300 mb-1">
                  Preferred Inspection Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-obsidian border border-white/15 px-3 py-2.5 text-xs text-white rounded-xs outline-none focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-obsidian font-bold py-3 text-xs uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2 transition"
              >
                <span>Confirm Booking</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}