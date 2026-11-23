import React from 'react';
import Link from 'next/link';

/**
 * Filter pills displayed below the hero search bar.
 * Exact items from screenshot:
 * • Architecture & Sights
 * • Gastronomy
 * • Scenic Coasts
 * • Slow Travel
 *
 * @param {object} props
 * @param {Array<{ id: string, label: string }>} props.filters
 */
export default function FilterPills({ filters = [] }) {
  if (!filters.length) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5">
      {filters.map((filter) => (
        <Link
          key={filter.id}
          href={`/blueprints?category=${encodeURIComponent(filter.label)}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-[11px] sm:text-xs font-medium text-white/95 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <span>{filter.label}</span>
        </Link>
      ))}
    </div>
  );
}
