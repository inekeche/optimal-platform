"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, Calculator, ShieldCheck, ArrowRight, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function InvestPage() {
  const [investmentAmount, setInvestmentAmount] = useState<number>(100000000); // ₦100M
  const [holdPeriodYears, setHoldPeriodYears] = useState<number>(5);
  const [projectedAppreciationRate, setProjectedAppreciationRate] = useState<number>(12); // 12% annually
  const [projectedYieldRate, setProjectedYieldRate] = useState<number>(8); // 8% rental yield

  // ROI Calculations
  const totalAppreciation = investmentAmount * Math.pow(1 + projectedAppreciationRate / 100, holdPeriodYears) - investmentAmount;
  const totalRentalIncome = investmentAmount * (projectedYieldRate / 100) * holdPeriodYears;
  const estimatedTotalValue = investmentAmount + totalAppreciation + totalRentalIncome;
  const totalROI = ((estimatedTotalValue - investmentAmount) / investmentAmount) * 100;

  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-16">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">
          Capital & Yield Growth
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
          Investor Relations & ROI Calculator
        </h1>
        <p className="text-gray-400 text-sm">
          Evaluate expected capital appreciation and rental yield trajectories across Optimal Engineering developments.
        </p>
      </div>

      {/* Interactive Calculator Box */}
      <div className="bg-obsidian-light border border-gold/30 p-8 md:p-12 rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
            <Calculator className="w-6 h-6 text-gold" />
            <h2 className="text-xl font-heading font-bold text-white">Investment Parameters</h2>
          </div>

          {/* Slider 1: Capital */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300 font-semibold uppercase">Initial Capital Outlay</span>
              <span className="text-gold font-bold">{formatCurrency(investmentAmount)}</span>
            </div>
            <input
              type="range"
              min={50000000}
              max={1000000000}
              step={10000000}
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full accent-gold bg-obsidian h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 2: Hold Horizon */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300 font-semibold uppercase">Investment Horizon</span>
              <span className="text-gold font-bold">{holdPeriodYears} Years</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={holdPeriodYears}
              onChange={(e) => setHoldPeriodYears(Number(e.target.value))}
              className="w-full accent-gold bg-obsidian h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 3: Capital Appreciation */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300 font-semibold uppercase">Target Annual Capital Growth</span>
              <span className="text-gold font-bold">{projectedAppreciationRate}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={25}
              value={projectedAppreciationRate}
              onChange={(e) => setProjectedAppreciationRate(Number(e.target.value))}
              className="w-full accent-gold bg-obsidian h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 4: Rental Yield */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300 font-semibold uppercase">Estimated Annual Rental Yield</span>
              <span className="text-gold font-bold">{projectedYieldRate}%</span>
            </div>
            <input
              type="range"
              min={4}
              max={15}
              value={projectedYieldRate}
              onChange={(e) => setProjectedYieldRate(Number(e.target.value))}
              className="w-full accent-gold bg-obsidian h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Results Output Card (5 Cols) */}
        <div className="lg:col-span-5 bg-obsidian border border-gold/40 p-8 rounded-sm flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] text-gold uppercase tracking-widest font-semibold block mb-1">
              Estimated Financial Return
            </span>
            <h3 className="text-3xl font-bold text-white">
              {formatCurrency(estimatedTotalValue)}
            </h3>
            <span className="text-xs text-green-400 font-bold block mt-1">
              +{totalROI.toFixed(1)}% Projected Total Return
            </span>
          </div>

          <div className="space-y-3 border-y border-white/10 py-4 text-xs">
            <div className="flex justify-between text-gray-300">
              <span>Capital Outlay:</span>
              <span className="font-semibold text-white">{formatCurrency(investmentAmount)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Capital Appreciation ({holdPeriodYears} yrs):</span>
              <span className="font-semibold text-gold">{formatCurrency(totalAppreciation)}</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Cumulative Rental Income:</span>
              <span className="font-semibold text-gold">{formatCurrency(totalRentalIncome)}</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-dark text-obsidian font-bold py-3.5 px-6 rounded-xs text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition"
          >
            <span>Request Investor Deck</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}