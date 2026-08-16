"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Property Inspection",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "Property Inspection",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-6 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase">
          Get In Touch
        </span>
        <h1 className="text-4xl font-heading font-bold text-white">
          Book an Inspection or Consultation
        </h1>
        <p className="text-gray-400 text-sm">
          Connect with our engineering and facility management experts to discuss structural evaluations, property investments, or maintenance contracts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
        {/* Contact Info Sidebar */}
        <div className="space-y-8 bg-obsidian-light p-8 rounded-sm border border-white/10">
          <h2 className="text-xl font-heading font-bold text-white border-b border-gold/30 pb-3">
            Contact Information
          </h2>

          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase font-semibold block">Office Location</span>
                <span className="text-gray-200">{siteConfig.contact.address}</span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase font-semibold block">Phone Line</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-200 hover:text-gold transition">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-sm flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="text-xs text-gray-400 uppercase font-semibold block">Email Address</span>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-200 hover:text-gold transition">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-2 bg-obsidian-light p-8 rounded-sm border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-obsidian border border-white/15 focus:border-gold px-4 py-3 text-sm text-white rounded-xs outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-obsidian border border-white/15 focus:border-gold px-4 py-3 text-sm text-white rounded-xs outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+234..."
                  className="w-full bg-obsidian border border-white/15 focus:border-gold px-4 py-3 text-sm text-white rounded-xs outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Inquiry Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-obsidian border border-white/15 focus:border-gold px-4 py-3 text-sm text-white rounded-xs outline-none transition"
                >
                  <option value="Property Inspection">Property Inspection</option>
                  <option value="Structural Engineering Assessment">Structural Engineering Assessment</option>
                  <option value="Facility Management Contract">Facility Management Contract</option>
                  <option value="Investment Inquiry">Investment Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Message / Details
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Specify property location or engineering requirements..."
                className="w-full bg-obsidian border border-white/15 focus:border-gold px-4 py-3 text-sm text-white rounded-xs outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gold hover:bg-gold-dark text-obsidian font-bold px-8 py-4 rounded-xs uppercase tracking-wider text-xs flex items-center justify-center space-x-2 transition w-full md:w-auto disabled:opacity-50"
            >
              <span>{status === "loading" ? "Sending..." : "Submit Inquiry"}</span>
              <Send className="w-4 h-4" />
            </button>

            {status === "success" && (
              <div className="flex items-center space-x-2 text-green-400 text-sm pt-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Your request has been submitted. Our team will contact you shortly.</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center space-x-2 text-red-400 text-sm pt-2">
                <AlertCircle className="w-5 h-5" />
                <span>An error occurred while submitting. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}