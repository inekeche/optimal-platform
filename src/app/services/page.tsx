import React from "react";
import Link from "next/link";

export const servicesData = [
  {
    category: "Hard FM Services",
    description: "Technical, structural, and heavy equipment systems management[cite: 1].",
    items: [
      "Mechanical, Electrical, and Plumbing (MEP) Systems",
      "HVAC Systems Management",
      "Electrical Systems & Power Maintenance",
      "Plumbing Systems & Fixtures",
      "Generators and Power Systems",
      "Solar Power Systems Installation & Maintenance",
      "Building Fabric and Structural Maintenance",
      "Fire Safety and Protection Systems",
      "Elevators, Escalators & Vertical Transportation",
      "Building Automation Systems (BAS) & Controls",
    ],
  },
  {
    category: "Soft FM Services",
    description: "Environmental, security, and human-centric facility support[cite: 1].",
    items: [
      "Cleaning, Housekeeping & Janitorial Services",
      "Waste Management & Disposal",
      "Pest Control & Fumigation",
      "Security & Access Control Systems",
      "Landscaping & Grounds Maintenance",
      "Catering, Pantry & Hospitality Services",
      "Reception, Concierge & Front Desk Services",
    ],
  },
  {
    category: "Integrated FM Services",
    description: "Strategic, advisory, and overarching administrative control[cite: 1].",
    items: [
      "Free Property & Facility Consultation",
      "Asset Management & Lifespan Extension",
      "Space Management & Planning",
      "Energy & Sustainability Management",
      "Health, Safety & Environment (HSE) Compliance",
      "Vendor & Contractor Management",
      "Project & Lifecycle Management",
      "Workplace Management & Business Continuity Planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#001f3f] min-h-screen text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Our Engineering & <span className="text-[#F58220]">FM Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Integrated engineering and property solutions designed to keep your operations smooth and uninterrupted[cite: 1].
          </p>
        </div>

        <div className="space-y-12">
          {servicesData.map((sec, idx) => (
            <div key={idx} className="bg-[#002b55] border border-white/10 rounded-sm p-8">
              <h2 className="text-2xl font-bold text-[#F58220] mb-2">{sec.category}</h2>
              <p className="text-sm text-gray-300 mb-6">{sec.description}</p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sec.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-gray-200">
                    <span className="text-[#F58220] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-[#F58220] hover:bg-[#D66B12] text-white font-bold px-8 py-4 rounded-sm uppercase tracking-wider transition-all"
          >
            Book FREE Inspection
          </Link>
        </div>
      </div>
    </main>
  );
}