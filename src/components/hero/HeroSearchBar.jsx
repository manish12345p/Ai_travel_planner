'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ASSETS } from '@/config/assets';

/**
 * Hero search bar matching the exact design in the screenshot:
 * Large rounded pill with search icon, input with placeholder, mic icon, and Plan Journey button.
 *
 * @param {object} props
 * @param {string} props.placeholder
 */
export default function HeroSearchBar({ placeholder }) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/plan?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white rounded-pill p-1.5 sm:p-2 shadow-search flex items-center gap-1.5 sm:gap-2 border border-slate-100 transition-all focus-within:ring-2 focus-within:ring-sky-400"
      role="search"
    >
      {/* Search Icon */}
      <div className="pl-2.5 sm:pl-4 text-sky-500 shrink-0">
        <Image
          src={ASSETS.icons.search}
          alt=""
          width={18}
          height={18}
          aria-hidden="true"
          className="text-sky-500"
        />
      </div>

      {/* Accessible Input */}
      <label htmlFor="hero-destination-search" className="sr-only">
        Where do you want to explore?
      </label>
      <input
        id="hero-destination-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || 'Where do you want to explore? (e.g. 5 days in Kyo...'}
        className="w-full min-w-0 bg-transparent text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none px-1"
      />

      {/* Voice Mic Icon */}
      <button
        type="button"
        className="p-1 sm:p-1.5 text-slate-400 hover:text-slate-600 transition-colors shrink-0"
        aria-label="Voice search input"
      >
        <Image
          src={ASSETS.icons.mic}
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
        />
      </button>

      {/* Action Plan Journey Button */}
      <button
        type="submit"
        className="shrink-0 flex items-center justify-center gap-1 sm:gap-1.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-[11px] sm:text-sm font-semibold px-3 sm:px-6 py-2 sm:py-3 rounded-pill shadow-md transition-all active:scale-95 whitespace-nowrap"
      >
        <span>Plan Journey</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
