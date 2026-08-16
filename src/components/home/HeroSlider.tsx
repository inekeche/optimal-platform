"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const HeroSlider: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center bg-obsidian overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent z-10" />
      
      {/* Visual Placeholder for Structural Render / Video */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-40" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 px-3 py-1 rounded-full">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-gold font-semibold">
              Engineering Excellence & Facility Leadership
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
            Building Infrastructure That <span className="text-gold">Endures</span>.
          </h1>

          <p className="text-gray-300 text-base md:text-lg">
            Optimal Engineering and Facilities Management Limited delivers luxury property development, structural integrity testing, and full lifecycle facility maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/properties"
              className="bg-gold hover:bg-gold-dark text-obsidian font-bold px-8 py-4 rounded-sm uppercase tracking-wider text-sm flex items-center justify-center space-x-2 transition"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/divisions"
              className="border border-white/30 hover:border-gold hover:text-gold text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-wider text-sm flex items-center justify-center transition"
            >
              Our Engineering Divisions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};