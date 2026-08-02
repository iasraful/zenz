"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3ef]/95 backdrop-blur-lg border-b border-[rgba(10,14,23,0.1)]">
      {/* Announcement Bar */}
      <div
        className="bg-[#0a0e17] text-[#f5f3ef] text-center text-xs py-1.5 font-bold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        ⚡ FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$150 • SEASON_01 LIVE ⚡
      </div>

      {/* Full-width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-2xl sm:text-3xl font-black tracking-widest text-[#0a0e17] hover:text-[#ff5500] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ZENJI<span className="text-[#ff5500]">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#drop-shoulders"
              className="text-xs font-semibold tracking-widest text-[#475569] hover:text-[#0a0e17] transition-colors uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              DROP SHOULDERS
            </Link>
            <Link
              href="#manifesto"
              className="text-xs font-semibold tracking-widest text-[#475569] hover:text-[#0a0e17] transition-colors uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              STUDIO SPOTLIGHT
            </Link>
            <Link
              href="#hoodies"
              className="text-xs font-semibold tracking-widest text-[#475569] hover:text-[#0a0e17] transition-colors uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              HOODIES
            </Link>
            <Link
              href="#why-zenji"
              className="text-xs font-semibold tracking-widest text-[#475569] hover:text-[#0a0e17] transition-colors uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              OUR PROMISE
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="#drop-shoulders"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-bold tracking-widest rounded transition-all duration-300 shadow-lg shadow-[#ff5500]/25 glow-hover"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SHOP LATEST DROP
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#475569] hover:text-[#0a0e17] p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f5f3ef] border-b border-[rgba(10,14,23,0.1)] px-6 py-6 space-y-4">
          <Link
            href="#drop-shoulders"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-[#475569] hover:text-[#0a0e17] uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            DROP SHOULDERS
          </Link>
          <Link
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-[#475569] hover:text-[#0a0e17] uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            STUDIO SPOTLIGHT
          </Link>
          <Link
            href="#hoodies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-[#475569] hover:text-[#0a0e17] uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            HOODIES
          </Link>
          <Link
            href="#drop-shoulders"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 bg-[#ff5500] text-white text-xs font-bold tracking-wider rounded"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SHOP LATEST DROP
          </Link>
        </div>
      )}
    </header>
  );
}
