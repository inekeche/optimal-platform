import React from "react";
import { siteConfig } from "@/config/site";

export const facilityCategories = [
  { name: "Commercial Facilities", desc: "Office buildings, corporate HQs, co-working spaces, malls, banks, retail, and hotels." },
  { name: "Residential Facilities", desc: "Apartments, estates, gated communities, duplexes, hostels, and senior living." },
  { name: "Industrial Facilities", desc: "Factories, manufacturing/processing plants, warehouses, refineries, and assembly plants." },
  { name: "Healthcare Facilities", desc: "Hospitals, clinics, diagnostic labs, maternity homes, and research centers." },
  { name: "Educational Facilities", desc: "Schools, universities, polytechnics, colleges, libraries, and research institutes." },
  { name: "Government & Public", desc: "Courts, public service centers, police/fire stations, and legislative buildings." },
  { name: "Hospitality & Leisure", desc: "Hotels, resorts, event centers, cinemas, theaters, and tourist attractions." },
  { name: "Sports & Recreation", desc: "Stadiums, sports complexes, gyms, swimming pools, and golf courses." },
  { name: "Religious Facilities", desc: "Churches, mosques, temples, retreat centers, and mission houses." },
  { name: "Transportation Facilities", desc: "Airports, seaports, railway stations, bus terminals, and logistics hubs." },
  { name: "Utility & Infrastructure", desc: "Power/water/sewage treatment plants, data centers, and telecom hubs." },
  { name: "Agricultural Facilities", desc: "Greenhouses, poultry/livestock, fish farms, silos, and processing centers." },
  { name: "Security & Emergency", desc: "Emergency operation centers, correctional centers, and control centers." },
  { name: "Mixed-Use Facilities", desc: "Live-work-play developments, commercial-residential complexes, and business parks." },
  { name: "Special-Purpose Facilities", desc: "Clean rooms, research labs, broadcasting studios, and defense installations." },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-[#001f3f] min-h-screen text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Facilities We <span className="text-[#F58220]">Manage</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive facility management across all major real estate, industrial, and infrastructure sectors[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityCategories.map((item, index) => (
            <div
              key={index}
              className="bg-[#002b55] border border-white/10 rounded-sm p-6 hover:border-[#F58220] transition-colors"
            >
              <h3 className="text-lg font-bold text-[#F58220] mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}