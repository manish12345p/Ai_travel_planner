import React from 'react';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';
import Badge from '@/components/common/Badge';

/**
 * Cryptographic Offline Vault capability card.
 * Features cached map tiles catalog and passbook sync indicators.
 */
export default function OfflineVaultCard({ data }) {
  const { badge, title, description, visualization } = data;

  return (
    <article className="bg-white border border-slate-100/80 rounded-card p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100">
            <Image
              src={ASSETS.icons.shieldCheck}
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
              className="text-violet-600"
            />
          </div>
          <Badge variant="vault">{badge}</Badge>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Sync Status Info Boxes */}
      <div className="bg-[#FAF8FD] border border-[#EFEBF9] rounded-xl p-3.5 space-y-2.5">
        {visualization.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-100 shadow-2xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                <Image
                  src={ASSETS.icons[item.iconKey] || ASSETS.icons.mapPin}
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-800">
                {item.title}
              </span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-pill ${
                item.statusType === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                  : 'bg-sky-50 text-sky-700 border border-sky-100'
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
