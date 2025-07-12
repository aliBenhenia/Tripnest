'use client';

import Link from 'next/link';

export default function TripnestLogo() {
  return (
    <Link 
      href="/" 
      className="group relative flex items-center transition-all duration-300
        after:absolute after:inset-0 after:rounded-2xl after:border after:border-transparent 
        after:transition-all after:duration-300 hover:after:border-primary/10 
        hover:after:bg-primary/[0.02] after:-m-3 after:p-3"
    >
      <div className="flex items-center gap-1 text-black font-semibold text-lg">
        {/* Icon */}
        <div className="w-7 h-7 bg-gradient-to-tr from-blue-400 to-blue-400 rounded-full flex items-center justify-center shadow-sm">
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z"
            />
            <circle cx="12" cy="9" r="2.5" fill="currentColor" />
          </svg>
        </div>

        {/* Text */}
        <span className="tracking-tight">
          Trip
          <span className="text-blue-500">nest</span>
        </span>
      </div>
    </Link>
  );
}
