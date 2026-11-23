import React from 'react';
import Link from 'next/link';

/**
 * Cohesive "Coming Soon" placeholder screen component.
 * Uses Odyssey's brand colors, typography, and card aesthetic.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} [props.badge='COMING SOON']
 */
export default function ComingSoonPlaceholder({
  title,
  subtitle,
  badge = 'COMING SOON',
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 sm:py-28 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-bold tracking-wider uppercase mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
        <span>{badge}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        {title}
      </h1>

      <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-8">
        {subtitle}
      </p>

      <div className="p-8 bg-slate-50 border border-slate-100 rounded-card max-w-md mx-auto shadow-card mb-8">
        <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3 font-bold text-lg">
          ✦
        </div>
        <p className="text-xs text-slate-600 font-medium">
          Odyssey AI is actively calibrating this module. Check back shortly or continue exploring curated journeys.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#0099FF] hover:bg-[#0088E6] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-pill shadow-sm transition-all active:scale-95"
      >
        <span>Return to Discover</span>
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
