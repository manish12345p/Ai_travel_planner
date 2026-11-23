import React from 'react';

/**
 * Empty state component matching the Odyssey design system.
 *
 * @param {object} props
 * @param {string} [props.title='No items found']
 * @param {string} [props.description='There are currently no items available in this category.']
 * @param {string} [props.className='']
 */
export default function EmptyState({
  title = 'No items found',
  description = 'There are currently no items available in this category.',
  className = '',
}) {
  return (
    <div
      className={`bg-white border border-slate-100 text-center p-10 rounded-card shadow-card max-w-md mx-auto ${className}`}
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center text-lg">
        ∅
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}
