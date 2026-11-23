'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';
import { getCtaData } from '@/services';
import LoadingSkeleton from '@/components/common/LoadingSkeleton';
import ErrorMessage from '@/components/common/ErrorMessage';

export default function CtaBanner({ initialData = null, initialError = null }) {
  const [ctaData, setCtaData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(initialError);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    const res = await getCtaData();
    if (res.error) {
      setError(res.error);
    } else {
      setCtaData(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!initialData && !initialError) {
      loadData();
    }
  }, [initialData, initialError]);

  return (
    <section
      aria-label="Get Started with Odyssey"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
    >
      {loading ? (
        <div className="w-full h-64 bg-slate-100 rounded-card-lg animate-pulse"></div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={loadData} />
      ) : ctaData ? (
        <div className="w-full rounded-card-lg bg-gradient-to-r from-[#172338] via-[#10243d] to-[#036592] text-white p-8 sm:p-12 md:p-14 shadow-cta relative overflow-hidden">
          {/* Subtle Ambient Light Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white/10 backdrop-blur-md border border-white/15 text-sky-300 text-[10px] font-bold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              <span>{ctaData.badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-white">
              {ctaData.heading}
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
              {ctaData.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Action Button */}
              <Link
                href={ctaData.primaryAction.href}
                className="inline-flex items-center gap-2 bg-[#0099FF] hover:bg-[#008AE6] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-pill shadow-lg shadow-sky-900/40 transition-all hover:scale-105 active:scale-95"
              >
                <span>{ctaData.primaryAction.label}</span>
                <span className="text-sm">✦</span>
              </Link>

              {/* Secondary Action Button */}
              <Link
                href={ctaData.secondaryAction.href}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-pill transition-all active:scale-95"
              >
                <span>{ctaData.secondaryAction.label}</span>
                <Image
                  src={ASSETS.icons.eye}
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="brightness-0 invert opacity-80"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
