import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-obsidian-light text-gray-300 text-xs py-2 border-b border-gold/20 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center space-x-2 hover:text-gold transition">
            <Phone className="w-3.5 h-3.5 text-gold" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center space-x-2 hover:text-gold transition">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>{siteConfig.contact.address}</span>
        </div>
      </div>
    </div>
  );
};