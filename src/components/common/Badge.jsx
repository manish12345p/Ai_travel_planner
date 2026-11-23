import React from 'react';

/**
 * Reusable Badge component for section tags and status pills.
 *
 * @param {object} props
 * @param {'telemetry'|'algorithmic'|'vault'|'cyan'|'neutral'|'dark'|'active'} [props.variant='neutral']
 * @param {React.ReactNode} props.children
 * @param {string} [props.className='']
 */
export default function Badge({ variant = 'neutral', children, className = '' }) {
  const variantStyles = {
    telemetry: 'bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]',
    algorithmic: 'bg-[#F5F3FF] text-[#7C3AED] border border-[#EDE9FE]',
    vault: 'bg-[#FAF5FF] text-[#9333EA] border border-[#F3E8FF]',
    cyan: 'bg-[#ECFEFF] text-[#0284C7] border border-[#BAE6FD]',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    dark: 'bg-slate-900/80 text-white backdrop-blur-md border border-white/10',
    active: 'bg-[#EBF5FF] text-[#0284C7] border border-[#BFDBFE]',
  };

  const style = variantStyles[variant] || variantStyles.neutral;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-pill text-[10px] font-semibold tracking-wider uppercase ${style} ${className}`}
    >
      {children}
    </span>
  );
}
