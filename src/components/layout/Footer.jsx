import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-8 mt-12 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        {/* Brand Copyright */}
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 relative shrink-0">
            <Image
              src={ASSETS.icons.logo}
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">AiTravelPlanner</span>
          <span>© 2025 Spatial Autonomous Travel Systems.</span>
        </div>

        {/* Footer Navigation Links */}
        <nav className="flex items-center gap-6" aria-label="Footer Navigation">
          <Link
            href="/privacy"
            className="hover:text-slate-900 transition-colors"
          >
            Privacy &amp; Telemetry
          </Link>
          <Link
            href="/satellite-network"
            className="hover:text-slate-900 transition-colors"
          >
            Satellite Network
          </Link>
          <Link
            href="/support"
            className="hover:text-slate-900 transition-colors"
          >
            FlightDeck Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}
