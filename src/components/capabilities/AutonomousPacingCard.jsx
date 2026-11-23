import React from 'react';
import Image from 'next/image';
import { ASSETS } from '@/config/assets';
import Badge from '@/components/common/Badge';

/**
 * Autonomous Pacing & Budget capability card.
 * Features breakdown progress bars for lodging, gastronomy, and passes.
 */
export default function AutonomousPacingCard({ data }) {
  const { badge, title, description, visualization } = data;

  return (
    <article className="bg-white border border-slate-100/80 rounded-card p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
            <Image
              src={ASSETS.icons.sliders}
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
              className="text-purple-600"
            />
          </div>
          <Badge variant="algorithmic">{badge}</Badge>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Budget Breakdown List */}
      <div className="bg-[#F9F8FD] border border-[#EFEBF9] rounded-xl p-4 space-y-3.5">
        {visualization.items.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-medium text-slate-700">
              <span>{item.category}</span>
              <span className="font-semibold text-slate-900">
                {item.amount}{' '}
                <span className="text-slate-400 font-normal">/ {item.percentage}%</span>
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${item.colorClass}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
