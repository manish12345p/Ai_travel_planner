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
        <div className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-pill text-[10px] font-bold text-slate-800 shadow-xs">
          <span className="text-amber-500">★</span>
          <span>{rating.toFixed(1)}</span>
        </div>

        {/* Category Pill Tag (Bottom Left over Image) */}
        <div className="absolute bottom-2.5 left-2.5">
          <span className="inline-block bg-slate-900/80 backdrop-blur-md border border-white/20 text-sky-400 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-pill">
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

          <div className="inline-flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-1 rounded-pill text-[10px] font-semibold text-slate-600">
            <Image
              src={ASSETS.icons.calendar}
              alt=""
              width={11}
              height={11}
              aria-hidden="true"
              className="opacity-60"
            />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
