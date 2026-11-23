import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ASSETS } from '@/config/assets';

/**
 * Blueprint card representing a curated travel itinerary.
 *
 * @param {object} props
 * @param {object} props.blueprint
 */
export default function BlueprintCard({ blueprint }) {
  const {
    slug,
    title,
    category,
    rating,
    description,
    estimatedCost,
    duration,
    imageKey,
  } = blueprint;

  const imageSrc = ASSETS.images[imageKey] || ASSETS.images.destinationBarcelona;

  return (
    <article className="bg-white border border-slate-100 rounded-card overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group">
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Rating Badge (Top Right) */}
        <div className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-pill text-[10px] font-bold text-slate-800 shadow-sm border border-slate-100">
          <svg
            className="w-2.5 h-2.5 text-amber-500 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{rating.toFixed(1)}</span>
        </div>

        {/* Category Pill Tag (Bottom Left over Image) */}
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span className="inline-block bg-slate-950/85 backdrop-blur-md border border-white/20 text-sky-400 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-pill shadow-xs">
            {category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1.5 leading-snug">
            <Link href={`/blueprints/${slug}`} className="focus:outline-none">
              {title}
            </Link>
          </h3>
          <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Price & Duration Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div>
            <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
              ESTIMATED
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              {estimatedCost}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2 py-1 rounded-pill text-[10px] font-semibold text-slate-600">
            <svg
              className="w-3 h-3 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </svg>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
