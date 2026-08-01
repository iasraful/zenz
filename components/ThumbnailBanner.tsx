"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThumbnailBanner() {
  return (
    <section id="manifesto" className="relative w-full min-h-[600px] flex items-center overflow-hidden border-t border-[#1f2430]">
      {/* Full-bleed Background Image using /thumbnil.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/thumbnil.png"
          alt="ZENZ Sydney Studio Manifesto"
          fill
          className="object-cover object-center"
        />
        {/* Dark Overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080c] via-[#08080c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-[#08080c]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-2xl space-y-6">
          <span
            className="inline-block px-3 py-1 bg-[#e63946] text-white text-xs font-bold tracking-widest uppercase rounded"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            BRAND SPOTLIGHT // SYDNEY STUDIO
          </span>

          <h2
            className="text-4xl sm:text-6xl font-black text-white uppercase leading-none"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            THE <span className="text-[#e63946]">MANIFESTO</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            ZENZ was founded in Sydney with one vision: bridge high-density anime art with premium 240GSM drop-shoulder streetwear. Heavyweight cotton, pre-shrunk builds, and zero cheap prints. Every drop is crafted in limited numbers.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#1f2430]">
            <div>
              <span
                className="text-2xl sm:text-3xl font-black text-white block"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                240 GSM
              </span>
              <span className="text-xs text-[#64748b]">Heavyweight Cotton</span>
            </div>
            <div>
              <span
                className="text-2xl sm:text-3xl font-black text-[#e63946] block"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                400 GSM
              </span>
              <span className="text-xs text-[#64748b]">Fleece Hoodies</span>
            </div>
            <div>
              <span
                className="text-2xl sm:text-3xl font-black text-white block"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                100% AU
              </span>
              <span className="text-xs text-[#64748b]">Dispatched Sydney</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="#drop-shoulders"
              className="inline-block px-8 py-4 bg-[#e63946] hover:bg-[#d90429] text-white text-xs font-bold tracking-widest uppercase rounded transition-colors shadow-lg shadow-[#e63946]/30"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              EXPLORE FEATURED DROPS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
