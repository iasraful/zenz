"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThumbnailBanner() {
  return (
    <section id="manifesto" className="relative w-full min-h-[600px] flex items-center overflow-hidden border-t border-[rgba(10,14,23,0.08)]">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/thumbnil.png"
          alt="ZENJI Sydney Studio Manifesto"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay on left for text legibility, reveals image on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e17] via-[#0a0e17]/85 to-[#0a0e17]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/60 via-transparent to-[#0a0e17]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-2xl space-y-6">

          {/* HUD Tag */}
          <span
            className="inline-block px-3 py-1.5 bg-[#ff5500] text-white text-[10px] font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            BRAND SPOTLIGHT — SYDNEY STUDIO
          </span>

          {/* Heading */}
          <h2
            className="text-4xl sm:text-6xl font-black text-white uppercase leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#06b6d4]">MANIFESTO</span>
          </h2>

          {/* Japanese accent line */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#06b6d4]" />
            <span
              className="text-[10px] text-[#06b6d4] tracking-widest uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              SEASON_01
            </span>
          </div>

          {/* Body */}
          <p
            className="text-sm sm:text-base text-[#94a3b8] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ZENJI was founded in Sydney with one vision: bridge high-density anime art with premium 240GSM drop-shoulder streetwear.
            Heavyweight cotton, pre-shrunk builds, and zero cheap prints. Every drop is crafted in strictly limited numbers. No restocks. Ever.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[rgba(255,255,255,0.08)]">
            <div>
              <span
                className="text-2xl sm:text-3xl font-black text-white block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                240 GSM
              </span>
              <span
                className="text-xs text-[#64748b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Heavyweight Cotton
              </span>
            </div>
            <div>
              <span
                className="text-2xl sm:text-3xl font-black text-[#ff5500] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                400 GSM
              </span>
              <span
                className="text-xs text-[#64748b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Fleece Hoodies
              </span>
            </div>
            <div>
              <span
                className="text-2xl sm:text-3xl font-black text-[#06b6d4] block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                100% AU
              </span>
              <span
                className="text-xs text-[#64748b]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Dispatched Sydney
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="#drop-shoulders"
              className="inline-block px-8 py-4 bg-[#ff5500] hover:bg-[#e04a00] text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-lg shadow-[#ff5500]/30 glow-hover"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              EXPLORE FEATURED DROPS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
