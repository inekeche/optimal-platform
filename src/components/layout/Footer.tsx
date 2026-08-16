import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001f3f] text-white border-t border-[#F58220]/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand & Slogan */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold text-white mb-1">OPTIMAL ENGINEERING</h3>
          <p className="text-xs text-[#F58220] font-bold mb-3">{siteConfig.rcNumber}</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            "{siteConfig.slogan}." Reliable, sustainable, and professional facility management services across Nigeria[cite: 1].
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-md font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#F58220] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Direct Contact */}
        <div>
          <h4 className="text-md font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <strong className="block text-white">Phone:</strong>
              <a href={siteConfig.contact.phoneHref} className="hover:text-[#F58220]">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <strong className="block text-white">Address:</strong>
              {siteConfig.contact.address}
            </li>
            <li className="text-[#F58220] font-semibold">
              Call us today for a FREE inspection![cite: 1]
            </li>
          </ul>
        </div>

        {/* Col 4: Social Media */}
        <div>
          <h4 className="text-md font-bold text-white mb-4 uppercase tracking-wider">Follow Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <strong className="text-white">Facebook:</strong> <br />
              <span className="text-xs">{siteConfig.socials.facebook}</span>[cite: 1]
            </li>
            <li>
              <strong className="text-white">Instagram:</strong> <br />
              <span className="text-xs">{siteConfig.socials.instagram}</span>[cite: 1]
            </li>
            <li>
              <strong className="text-white">LinkedIn:</strong> <br />
              <span className="text-xs">{siteConfig.socials.linkedin}</span>[cite: 1]
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Website powered by inekeonubifelix@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;