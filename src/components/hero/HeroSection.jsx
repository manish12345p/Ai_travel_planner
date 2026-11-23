'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';
import { getHeroData } from '@/services';
import HeroSearchBar from './HeroSearchBar';
import FilterPills from './FilterPills';
import LoadingSkeleton from '@/components/common/LoadingSkeleton';
import ErrorMessage from '@/components/common/ErrorMessage';

export default function HeroSection({ initialData = null, initialError = null }) {
  const [heroData, setHeroData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(initialError);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    const res = await getHeroData();
    if (res.error) {
      setError(res.error);
    } else {
      setHeroData(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!initialData && !initialError) {
      loadData();
    }
  }, [initialData, initialError]);

  return (
    <section className="relative isolate w-full overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-36 bg-slate-900">
      {/* Background Aerial Landscape Image */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src={ASSETS.images.heroBarcelona}
          alt="Aerial view of Barcelona cityscape along the coast"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Soft atmospheric gradient overlay blending down to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-white"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {loading ? (
          <div className="max-w-xl mx-auto py-12">
            <LoadingSkeleton variant="text" />
          </div>
        ) : error ? (
          <ErrorMessage message={error} onRetry={loadData} />
        ) : heroData ? (
          <>
            {/* Top Badge: AXLES SPATIAL TRAVEL INTELLIGENCE */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-pill bg-slate-950/70 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold tracking-wider mb-5 sm:mb-6 shadow-sm">
              <span className="text-sky-400 font-bold">✦ {heroData.badge.brand}</span>
              <span className="text-white/90 font-medium">
                {heroData.badge.subtitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md mb-3 sm:mb-4 px-2">
              {heroData.heading}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-xs sm:text-base text-white/95 font-medium leading-relaxed mb-6 sm:mb-8 px-2 drop-shadow-md">
              {heroData.subheading}
            </p>

            {/* Search Input Bar */}
            <HeroSearchBar placeholder={heroData.searchPlaceholder} />

            {/* Filter Pills */}
            <FilterPills filters={heroData.filters} />
          </>
        ) : null}
      </div>
    </section>
  );
}
