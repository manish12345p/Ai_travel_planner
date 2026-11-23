'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ASSETS } from '@/config/assets';
import { getUser, getActiveTrip } from '@/services';

export default function Header({ initialUser = null, initialActiveTrip = null }) {
  const pathname = usePathname();
  const [user, setUser] = useState(initialUser);
  const [activeTrip, setActiveTrip] = useState(initialActiveTrip);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!initialUser || !initialActiveTrip) {
      async function fetchHeaderData() {
        const [userRes, tripRes] = await Promise.all([getUser(), getActiveTrip()]);
        if (userRes.data) setUser(userRes.data);
        if (tripRes.data) setActiveTrip(tripRes.data);
      }
      fetchHeaderData();
    }
  }, [initialUser, initialActiveTrip]);

  const navLinks = [
    { label: 'Discover', href: '/' },
    { label: 'My Trips', href: '/my-trips' },
    { label: 'Trip Studio', href: '/trip-studio' },
    { label: 'Explore Map', href: '/explore-map' },
    { label: 'Vault', href: '/vault' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Active Trip */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            aria-label="AiTravelPlanner Home"
          >
            <div className="w-8 h-8 relative rounded-lg overflow-hidden shrink-0">
              <Image
                src={ASSETS.icons.logo}
                alt="AiTravelPlanner Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">
              AiTravelPlanner
            </span>
            <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-pill leading-none">
              AI 2.0
            </span>
          </Link>

          {/* Active Trip Synced Pill */}
          {activeTrip && (
            <div className="hidden xl:flex items-center gap-2 bg-[#F0F5FA] border border-[#E2EAF2] rounded-pill px-3 py-1.5 text-xs text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              <span className="font-medium truncate max-w-[280px]">
                {activeTrip.title}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider bg-white text-sky-600 border border-sky-200 px-2 py-0.5 rounded-pill">
                {activeTrip.status}
              </span>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#EEF3FA] text-[#0F172A] font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Share Trip Button */}
          <Link
            href="/share-trip"
            className="flex items-center gap-1.5 bg-[#0099FF] hover:bg-[#0088E6] text-white text-xs font-semibold px-3.5 py-1.5 sm:py-2 rounded-pill shadow-sm transition-all active:scale-95"
          >
            <Image
              src={ASSETS.icons.share}
              alt=""
              width={14}
              height={14}
              aria-hidden="true"
              className="brightness-0 invert"
            />
            <span className="hidden sm:inline">Share Trip</span>
          </Link>

          {/* Currency / Language Pill */}
          <button
            type="button"
            className="hidden sm:flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-2.5 py-1.5 rounded-pill text-[11px] font-medium text-slate-700 transition-colors"
            aria-label="Change currency and language"
          >
            <Image
              src={ASSETS.icons.globe}
              alt=""
              width={13}
              height={13}
              aria-hidden="true"
              className="opacity-70"
            />
            <span>USD / EN</span>
          </button>

          {/* Notification Bell */}
          <button
            type="button"
            className="p-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 relative transition-colors"
            aria-label="Notifications"
          >
            <Image
              src={ASSETS.icons.bell}
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              className="opacity-70"
            />
            {user?.unreadNotifications > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-sky-500 rounded-full ring-2 ring-white"></span>
            )}
          </button>

          {/* User Profile */}
          <Link
            href="/profile"
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-pill hover:bg-slate-100 transition-colors group"
            aria-label={`View profile for ${user?.name || 'Alex Rivera'}`}
          >
            <div className="w-7 h-7 rounded-full overflow-hidden bg-gradient-to-tr from-sky-500 to-blue-600 border border-sky-200 relative shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
              <Image
                src={ASSETS.images.avatarAlexRivera}
                alt=""
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden lg:inline text-xs font-semibold text-slate-800 group-hover:text-slate-900">
              {user?.name || 'Alex Rivera'}
            </span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-2 shadow-lg">
          {activeTrip && (
            <div className="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-700 mb-2">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sky-600 text-[10px] tracking-wide uppercase">
                  Active Journey
                </span>
                <span className="text-[9px] font-bold bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded-full">
                  {activeTrip.status}
                </span>
              </div>
              <p className="font-medium text-slate-900">{activeTrip.title}</p>
            </div>
          )}
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-slate-100 text-sky-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
