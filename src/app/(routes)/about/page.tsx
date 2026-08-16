import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Building, Users, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">
          Corporate Profile
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
          Structural Engineering Integrity & Asset Stewardship
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {siteConfig.name} delivers precision structural engineering, facility maintenance, and luxury property developments built to last generations.
        </p>
      </div>

      {/* Core Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-obsidian-light border border-white/10 p-8 rounded-sm space-y-4">
          <Award className="w-10 h-10 text-gold" />
          <h3 className="text-xl font-heading font-bold text-white">Structural Precision</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            All structural design procedures undergo multi-stage stress tests in accordance with COREN and international standards.
          </p>
        </div>

        <div className="bg-obsidian-light border border-white/10 p-8 rounded-sm space-y-4">
          <Building className="w-10 h-10 text-gold" />
          <h3 className="text-xl font-heading font-bold text-white">Asset Preservation</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            24/7 technical facility management protecting multi-billion Naira corporate assets across Nigeria.
          </p>
        </div>

        <div className="bg-obsidian-light border border-white/10 p-8 rounded-sm space-y-4">
          <Users className="w-10 h-10 text-gold" />
          <h3 className="text-xl font-heading font-bold text-white">Certified Leadership</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Led by chartered civil engineers, certified facility managers, and experienced project directors.
          </p>
        </div>
      </div>

      {/* Compliance Box */}
      <div className="bg-obsidian-light border border-gold/30 p-8 rounded-sm space-y-6">
        <h2 className="text-2xl font-heading font-bold text-white border-b border-gold/20 pb-3">
          Engineering & Legal Compliance Framework
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <span>Council for the Regulation of Engineering in Nigeria (COREN) Registered</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <span>Nigerian Society of Engineers (NSE) Corporate Membership</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <span>ISO 9001:2015 Quality Management System Compliant</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            <span>Full Corporate Registration (CAC) & Tax Regulatory Status</span>
          </div>
        </div>
      </div>
    </div>
  );
}