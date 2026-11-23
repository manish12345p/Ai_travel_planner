'use client';

import React, { useEffect, useState } from 'react';
import { getCapabilities } from '@/services';
import SpatialContinuityCard from './SpatialContinuityCard';
import AutonomousPacingCard from './AutonomousPacingCard';
import OfflineVaultCard from './OfflineVaultCard';
import LoadingSkeleton from '@/components/common/LoadingSkeleton';
import ErrorMessage from '@/components/common/ErrorMessage';
import EmptyState from '@/components/common/EmptyState';

export default function CapabilitiesSection({ initialData = null, initialError = null }) {
  const [capabilities, setCapabilities] = useState(initialData || []);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState(initialError);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    const res = await getCapabilities();
    if (res.error) {
      setError(res.error);
    } else {
      setCapabilities(res.data || []);
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
      aria-label="Platform Core Capabilities"
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-20 mb-16 sm:mb-20"
    >
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : error ? (
        <ErrorMessage message={error} onRetry={loadData} />
      ) : capabilities.length === 0 ? (
        <EmptyState title="No capabilities available" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            if (item.id === 'spatial-continuity-canvas') {
              return <SpatialContinuityCard key={item.id} data={item} />;
            }
            if (item.id === 'autonomous-pacing-budget') {
              return <AutonomousPacingCard key={item.id} data={item} />;
            }
            if (item.id === 'cryptographic-offline-vault') {
              return <OfflineVaultCard key={item.id} data={item} />;
            }
            return null;
          })}
        </div>
      )}
    </section>
  );
}
