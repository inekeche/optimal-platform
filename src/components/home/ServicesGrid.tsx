import React from "react";
import { HardHat, Wrench, Building, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: HardHat,
    title: "Structural Engineering",
    description: "Advanced structural analysis, foundation engineering, and heavy load integrity assessments for commercial and high-rise developments.",
    href: "/divisions#engineering",
  },
  {
    icon: Wrench,
    title: "Facility Management & MEP",
    description: "Comprehensive 24/7 technical operations, mechanical, electrical, and plumbing (MEP) preventative maintenance for corporate infrastructure.",
    href: "/divisions#facilities",
  },
  {
    icon: Building,
    title: "Real Estate Development",
    description: "End-to-end management of luxury residential estates, smart business towers, and mixed-use architectural projects.",
    href: "/properties",
  },
  {
    icon: ShieldCheck,
    title: "Asset Preservation & Retrofitting",
    description: "Structural rehabilitation, energy efficiency upgrades, and lifecycle optimization for institutional real estate portfolios.",
    href: "/divisions#preservation",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gold/20 pb-6">
        <div>
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            Specialized Capability
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-1">
            Core Engineering & Management Services
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
          Delivering precision, structural durability, and operational efficiency across all phases of property development and facility maintenance.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group bg-obsidian-light border border-white/10 hover:border-gold/50 p-6 rounded-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-obsidian transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold group-hover:text-obsidian" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};