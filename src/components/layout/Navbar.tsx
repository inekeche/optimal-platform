"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand Logo & Typography */}
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Building Mark Graphic */}
          <div className="relative h-12 w-12 flex-shrink-0">
            <Image
              src="/images/optimal.jpeg" // Update path if you crop/rename to optimal-mark.jpeg
              alt="Optimal Logo Icon"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Sharp, Crisp Typography */}
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-[#003366] leading-none">
              OPTIMAL
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#F58220] uppercase mt-1">
              Engineering & Facilities Management Ltd
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-[#003366] font-bold hover:text-[#F58220] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#F58220] hover:bg-[#D66B12] text-white font-semibold px-5 py-2.5 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            Book Inspection
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#003366] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-[#F58220]" />
          ) : (
            <Menu className="w-7 h-7 text-[#F58220]" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-md">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base uppercase tracking-wider text-[#003366] font-bold hover:text-[#F58220] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#F58220] hover:bg-[#D66B12] text-white font-semibold py-3 rounded-sm text-sm uppercase tracking-wider transition-all"
          >
            Book Inspection
          </Link>
        </div>
      )}
    </header>
  );
};