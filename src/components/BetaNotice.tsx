'use client';

import Link from "next/link";
import { useState } from "react";

export default function BetaNotice() {
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <div className={`bg-yellow-50 border-l-4 border-yellow-400 p-4 relative ${isDismissed ? 'hidden' : ''} `}>
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-0 right-0 p-2"
      >
        <svg
          className="h-6 w-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.95 5.05a1 1 0 00-1.41 0L10 8.59 6.46 5.05a1 1 0 00-1.41 1.41L8.59 10 5.05 13.54a1 1 0 001.41 1.41L10 11.41l3.54 3.54a1 1 0 001.41-1.41L11.41 10l3.54-3.54a1 1 0 000-1.41z"
          />
        </svg>
      </button>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 012 0v5a1 1 0 01-2 0V7zm1 10a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
        </div>
        <div className="ml-3 text-sm leading-5 text-yellow-700">
          <p>
            Diese Seite ist noch in der Beta-Phase. <Link className="link link-hover" href="/contact">Bitte melde uns Fehler und Verbesserungsvorschläge.</Link>
          </p>
          <p>
            Daten können verloren gehen.
          </p>
          <p>
            Voraussichtlich wird die Beta-Phase bis 30.09.2024 andauern.
          </p>
        </div>
      </div>
    </div>
  );
}
