import React from "react";
import Link from "next/link";
import { HardHat, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function DivisionsPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-20">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">
          Organizational Architecture
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
          Corporate Divisions & Operational Excellence
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Optimal Engineering and Facilities Management Limited operates through targeted divisions to assure structural integrity from initial architectural blueprints to multi-decade facility operations.
        </p>
      </div>

      {/* Division 1: Structural Engineering */}
      <div id="engineering" className="bg-obsidian-light border border-white/10 p-8 md:p-12 rounded-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gold/20 pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center shrink-0">
              <HardHat className="w-8 h-8 text-gold" />
            </div>
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Division 01</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Structural & Civil Engineering
              </h2>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-obsidian font-bold px-6 py-3 rounded-xs uppercase tracking-wider text-xs inline-flex items-center justify-center space-x-2 transition"
          >
            <span>Consult Engineering Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg">
              Capabilities & Technical Scope
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our engineering division handles heavy load assessments, soil-structure interaction analysis, and specialized reinforced concrete structural execution for high-density environments.
            </p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Foundation Engineering & Piling Supervision</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Structural Integrity Testing & Non-Destructive Evaluation</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Seismic & Wind Load Calculation Modeling</span>
              </li>
            </ul>
          </div>

          <div className="bg-obsidian p-6 border border-white/10 rounded-xs space-y-4">
            <h4 className="text-gold font-heading font-semibold text-base">Standard Compliance</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              All structural designs conform strictly to Eurocodes, British Standard Codes of Practice (BS 8110 / BS 5950), and national building control standard specifications.
            </p>
          </div>
        </div>
      </div>

      {/* Division 2: Facilities Management */}
      <div id="facilities" className="bg-obsidian-light border border-white/10 p-8 md:p-12 rounded-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gold/20 pb-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center shrink-0">
              <Wrench className="w-8 h-8 text-gold" />
            </div>
            <div>
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Division 02</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Integrated Facility Management (IFM)
              </h2>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-obsidian font-bold px-6 py-3 rounded-xs uppercase tracking-wider text-xs inline-flex items-center justify-center space-x-2 transition"
          >
            <span>Request Facility Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-300">
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg">
              Asset Preservation & Lifecycle Operations
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We deliver full technical plant operation, automated MEP maintenance, and high-frequency facility maintenance programs to preserve asset valuations.
            </p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>HVAC, Central Cooling & Power Generator Maintenance</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>24/7 Security Access Control & CCTV Operations</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Water Treatment Plant & Plumbing Infrastructure</span>
              </li>
            </ul>
          </div>

          <div className="bg-obsidian p-6 border border-white/10 rounded-xs space-y-4">
            <h4 className="text-gold font-heading font-semibold text-base">Service Level Agreement (SLA) Guarantee</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Guaranteed rapid-response technical dispatched teams on site within 30 minutes for emergency power or utility system outages across managed commercial assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}