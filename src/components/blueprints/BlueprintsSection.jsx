'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlueprints } from '@/services';
import BlueprintCard from './BlueprintCard';
import LoadingSkeleton from '@/components/common/LoadingSkeleton';
import ErrorMessage from '@/components/common/ErrorMessage';
import EmptyState from '@/components/common/EmptyState';

export default function BlueprintsSection({ initialData = null, initialError = null }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(initialError);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    const res = await getBlueprints({ limit: 4 });
    if (res.error) {
      setError(res.error);
    } else {
      setData(res.data);
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
      aria-labelledby="collective-blueprints-title"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-sky-600 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span>{data?.metaInfo?.sectionKicker || 'AUTONOMOUS BLUEPRINTS'}</span>
          </div>
          <h2
            id="collective-blueprints-title"
            className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
          >
            {data?.metaInfo?.sectionTitle || 'Curated by Collective Travel Intelligence'}
          </h2>
        </div>

        {/* View All Blueprints Pill Button */}
        <Link
          href="/blueprints"
          className="inline-flex items-center justify-center text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-4 py-2 rounded-pill transition-colors self-start sm:self-auto"
        >
          {data?.metaInfo?.actionLabel || 'View All 42 Blueprints'}
        </Link>
      </div>

      {/* Content Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={loadData} />
      ) : !data?.blueprints?.length ? (
        <EmptyState title="No blueprints available" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {data.blueprints.map((blueprint) => (
            <BlueprintCard key={blueprint.id} blueprint={blueprint} />
          ))}
        </div>
      )}
    </section>
  );
}
