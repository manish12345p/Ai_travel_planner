import React from 'react';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';
import Badge from '@/components/common/Badge';

/**
 * Spatial Continuity Canvas capability card.
 * Features an elevation/fatigue curve visualization with scheduled time milestones.
 */
export default function SpatialContinuityCard({ data }) {
  const { badge, title, description, visualization } = data;

  return (
    <article className="bg-white border border-slate-100/80 rounded-card p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
            <Image
              src={ASSETS.icons.compass}
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
              className="text-sky-600"
            />
          </div>
          <Badge variant="telemetry">{badge}</Badge>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Interactive Telemetry Box */}
      <div className="bg-[#F8FAFD] border border-[#E9F0F8] rounded-xl p-4">
        <div className="flex items-center justify-between text-[11px] font-semibold mb-2">
          <span className="text-slate-600 font-mono tracking-tight">
            {visualization.headerLeft}
          </span>
          <span className="text-sky-600 font-mono">
            {visualization.headerRight}
          </span>
        </div>

        {/* SVG Elevation and Fatigue Curve */}
        <div className="w-full h-14 relative my-2">
          <svg
            viewBox="0 0 300 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Filled Area */}
            <path
              d="M 0 50 Q 50 55 100 45 T 200 35 T 300 25 L 300 70 L 0 70 Z"
              fill="url(#curveGradient)"
            />

            {/* Stroke Line */}
            <path
              d="M 0 50 Q 50 55 100 45 T 200 35 T 300 25"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Key Milestone Nodes */}
            <circle cx="100" cy="45" r="3.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="200" cy="35" r="3.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="295" cy="25" r="3.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Milestone Time/Location Labels */}
        <div className="grid grid-cols-3 text-[10px] text-slate-500 font-medium pt-1 border-t border-slate-200/60">
          {visualization.milestones.map((ms, idx) => (
            <div
              key={idx}
              className={`${idx === 1 ? 'text-center' : idx === 2 ? 'text-right' : 'text-left'}`}
            >
              <span className="block font-semibold text-slate-700">{ms.time}</span>
              <span className="truncate block">{ms.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
