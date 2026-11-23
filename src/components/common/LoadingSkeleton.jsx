import React from 'react';

/**
 * Reusable loading skeleton matching AiTravelPlanner's soft card style.
 *
 * @param {object} props
 * @param {string} [props.className='']
 * @param {'card'|'row'|'text'} [props.variant='card']
 */
export default function LoadingSkeleton({ className = '', variant = 'card' }) {
  if (variant === 'row') {
    return (
      <div className={`animate-pulse flex items-center justify-between p-4 bg-slate-50 rounded-xl ${className}`}>
        <div className="h-4 bg-slate-200 rounded w-1/3"></div>
        <div className="h-4 bg-slate-200 rounded w-1/4"></div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`animate-pulse space-y-2.5 ${className}`}>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div
      className={`animate-pulse bg-white border border-slate-100 rounded-card p-6 shadow-card space-y-4 ${className}`}
      aria-label="Loading content..."
      role="status"
    >
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        <div className="w-24 h-6 bg-slate-200 rounded-pill"></div>
      </div>
      <div className="h-6 bg-slate-200 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
      </div>
      <div className="h-28 bg-slate-100 rounded-xl w-full mt-4"></div>
    </div>
  );
}
