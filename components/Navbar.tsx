"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080c]/90 backdrop-blur-lg border-b border-[#1f2430]">
      {/* Announcement Bar */}
      <div
        className="bg-[#e63946] text-[#ffffff] text-center text-xs py-1.5 font-bold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        🇦🇺 FREE EXPRESS SHIPPING ON AU ORDERS OVER A$100 // DISPATCHED FROM SYDNEY
      </div>

      {/* Full-width container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-2xl sm:text-3xl font-black tracking-widest text-[#f8fafc] hover:text-[#e63946] transition-colors"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              ZENZ<span className="text-[#e63946]">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#drop-shoulders"
              className="text-xs font-bold tracking-widest text-[#94a3b8] hover:text-[#f8fafc] transition-colors uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              DROP SHOULDERS
            </Link>
            <Link
              href="#hoodies"
              className="text-xs font-bold tracking-widest text-[#94a3b8] hover:text-[#f8fafc] transition-colors uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              HOODIES & FLEECE
            </Link>
            <Link
              href="#manifesto"
              className="text-xs font-bold tracking-widest text-[#94a3b8] hover:text-[#f8fafc] transition-colors uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              STUDIO SPOTLIGHT
            </Link>
            <Link
              href="#why-zenz"
              className="text-xs font-bold tracking-widest text-[#94a3b8] hover:text-[#f8fafc] transition-colors uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              OUR PROMISE
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="#drop-shoulders"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#e63946] hover:bg-[#d90429] text-white text-xs font-bold tracking-widest rounded transition-colors shadow-lg shadow-[#e63946]/20"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              SHOP LATEST DROP
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#94a3b8] hover:text-white p-2"
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
        <div className="md:hidden bg-[#12151e] border-b border-[#1f2430] px-6 py-6 space-y-4">
          <Link
            href="#drop-shoulders"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-[#94a3b8] hover:text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            DROP SHOULDERS
          </Link>
          <Link
            href="#hoodies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-[#94a3b8] hover:text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            HOODIES & FLEECE
          </Link>
          <Link
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider text-[#94a3b8] hover:text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            STUDIO SPOTLIGHT
          </Link>
          <Link
            href="#drop-shoulders"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 bg-[#e63946] text-white text-xs font-bold tracking-wider rounded"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SHOP LATEST DROP
          </Link>
        </div>
      )}
    </header>
  );
}
