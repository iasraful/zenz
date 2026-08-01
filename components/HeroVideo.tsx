"use client";

import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen min-h-[750px] flex items-center justify-start overflow-hidden pt-16">
      {/* 100vh Full Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/Untitled Project-video.mp4"
          poster="/thumbnil.png"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080c] via-[#08080c]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-[#08080c]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 max-w-7xl">
        <span
          className="inline-block px-3 py-1 bg-[#e63946]/20 border border-[#e63946]/50 text-[#e63946] text-xs font-bold tracking-widest uppercase mb-6"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          GAMER STREETWEAR // COLLECTION AW-26
        </span>

        <h1
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-none mb-6"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          NEXT-GEN <br />
          <span className="text-[#e63946]">ANIME</span> STREETWEAR
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-10">
          Heavyweight 240GSM cotton drops engineered for gaming culture & urban streetwear. Designed, stocked, and dispatched directly from Sydney, Australia.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#drop-shoulders"
            className="px-8 py-4 bg-[#e63946] hover:bg-[#d90429] text-white text-xs font-bold tracking-widest uppercase rounded transition-all shadow-xl shadow-[#e63946]/30"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            SHOP DROP SHOULDERS
          </Link>
          <Link
            href="#hoodies"
            className="px-8 py-4 bg-[#12151e] hover:bg-[#1a1e2b] border border-[#1f2430] text-[#f8fafc] text-xs font-bold tracking-widest uppercase rounded transition-all"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            EXPLORE HOODIES
          </Link>
        </div>
      </div>
    </section>
  );
}
