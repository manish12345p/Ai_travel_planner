import React from 'react';

/**
 * Reusable error state component matching the AiTravelPlanner theme.
 *
 * @param {object} props
 * @param {string} [props.message='Unable to load data']
 * @param {() => void} [props.onRetry]
 * @param {string} [props.className='']
 */
export default function ErrorMessage({
  message = 'Unable to load data. Please try again.',
  onRetry,
  className = '',
}) {
  return (
    <div
      role="alert"
      className={`bg-white border border-red-100 text-slate-700 p-8 rounded-card text-center shadow-card max-w-md mx-auto ${className}`}
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xl">
        !
      </div>
      <p className="text-sm font-medium text-slate-800 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          type="button"
          className="btn btn-sm btn-outline border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white rounded-pill px-5 text-xs font-semibold"
        >
          Retry Request
        </button>
      )}
    </div>
  );
}
